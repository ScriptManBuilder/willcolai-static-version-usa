import { useState, useEffect } from 'react';

/**
 * Хук для управления начальной загрузкой сайта
 * Показывает loader при первом запуске пока не загрузятся критичные ресурсы
 */
export const useInitialLoader = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Проверяем, был ли сайт уже загружен в этой сессии
    const hasLoaded = sessionStorage.getItem('siteInitiallyLoaded');
    
    if (hasLoaded === 'true') {
      // Если уже загружали - пропускаем loader
      setIsInitialLoading(false);
      setLoadingProgress(100);
      return;
    }

    // Эмулируем загрузку критичных ресурсов
    const startTime = Date.now();
    const minLoadingTime = 5000; // Минимум 5 секунд

    // Плавное увеличение прогресса
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 95) return prev; // Останавливаемся на 95%
        return prev + Math.random() * 10; // Случайное увеличение для реалистичности
      });
    }, 200);

    // Таймер для завершения загрузки
    const completeLoadingTimer = setTimeout(() => {
      clearInterval(progressInterval);
      
      // Доводим прогресс до 100%
      setLoadingProgress(100);
      
      // Небольшая задержка перед скрытием для плавности
      setTimeout(() => {
        setIsInitialLoading(false);
        sessionStorage.setItem('siteInitiallyLoaded', 'true');
      }, 500);
    }, minLoadingTime);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeLoadingTimer);
    };
  }, []);

  return { isInitialLoading, loadingProgress };
};
