import { useState, useEffect } from 'react';

/**
 * Хук для управления начальной загрузкой сайта
 * Показывает loader пока не загрузятся критичные ресурсы
 */
export const useInitialLoader = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Проверяем, был ли сайт уже загружен в этой сессии
    const hasLoaded = sessionStorage.getItem('siteInitiallyLoaded');
    
    if (hasLoaded === 'true') {
      setIsInitialLoading(false);
      setLoadingProgress(100);
      return;
    }

    const startTime = Date.now();
    const minLoadingTime = 5000; // Минимум 5 секунд (для полной загрузки home page)
    const maxLoadingTime = 12000; // Максимум 12 секунд (защита от зависания)
    
    let isFinished = false;

    // Плавное увеличение прогресса
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90) return prev; // Останавливаемся на 90%
        return Math.min(prev + Math.random() * 8, 90);
      });
    }, 200);

    // Функция проверки загрузки ресурсов
    const checkResourcesLoaded = () => {
      // Проверяем что DOM готов
      if (document.readyState !== 'complete') {
        return false;
      }

      // Проверяем что все изображения загружены
      const images = Array.from(document.querySelectorAll('img'));
      const allImagesLoaded = images.every(img => img.complete && img.naturalHeight !== 0);
      
      // Проверяем что все видео готовы (метаданные загружены)
      const videos = Array.from(document.querySelectorAll('video'));
      const allVideosReady = videos.every(video => video.readyState >= 1); // HAVE_METADATA

      return allImagesLoaded && allVideosReady;
    };

    // Проверяем готовность каждые 300мс
    const checkInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const resourcesReady = checkResourcesLoaded();

      // Условие завершения:
      // 1. Прошло минимум 5 секунд И ресурсы загружены
      // ИЛИ
      // 2. Прошло максимум 12 секунд (принудительно)
      if ((elapsed >= minLoadingTime && resourcesReady) || elapsed >= maxLoadingTime) {
        if (!isFinished) {
          isFinished = true;
          finishLoading();
        }
      }
    }, 300);

    function finishLoading() {
      clearInterval(progressInterval);
      clearInterval(checkInterval);
      
      // Доводим прогресс до 100%
      setLoadingProgress(100);
      
      // Небольшая задержка для плавности
      setTimeout(() => {
        setIsInitialLoading(false);
        sessionStorage.setItem('siteInitiallyLoaded', 'true');
      }, 500);
    }

    return () => {
      clearInterval(progressInterval);
      clearInterval(checkInterval);
    };
  }, []);

  return { isInitialLoading, loadingProgress };
};