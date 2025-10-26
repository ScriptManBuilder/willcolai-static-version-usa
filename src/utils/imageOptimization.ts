/**
 * Утилиты для оптимизации изображений
 */

/**
 * Генерирует srcset для responsive изображений
 * @param basePath - базовый путь к изображению
 * @param sizes - массив размеров [320, 640, 1024, 1920]
 */
export const generateSrcSet = (basePath: string, sizes: number[] = [320, 640, 1024, 1920]): string => {
  const extension = basePath.split('.').pop();
  const basePathWithoutExt = basePath.replace(`.${extension}`, '');
  
  return sizes
    .map(size => `${basePathWithoutExt}_${size}w.${extension} ${size}w`)
    .join(', ');
};

/**
 * Генерирует sizes attribute для изображений
 * @param breakpoints - объект с breakpoints
 */
export const generateSizes = (breakpoints?: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
}): string => {
  const defaultBreakpoints = {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw',
    ...breakpoints
  };

  return `
    (max-width: 480px) ${defaultBreakpoints.mobile},
    (max-width: 768px) ${defaultBreakpoints.tablet},
    ${defaultBreakpoints.desktop}
  `.trim();
};

/**
 * Создает низкокачественный placeholder (LQIP)
 * @param width - ширина
 * @param height - высота
 */
export const createBlurPlaceholder = (width: number = 40, height: number = 40): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#1a1a2e');
    gradient.addColorStop(0.5, '#16213e');
    gradient.addColorStop(1, '#0f3460');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }
  
  return canvas.toDataURL('image/png');
};

/**
 * Проверяет поддержку WebP
 */
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Проверяет поддержку AVIF
 */
export const supportsAVIF = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const avif = new Image();
    avif.onload = avif.onerror = function () {
      resolve(avif.height === 2);
    };
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABYAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=';
  });
};

/**
 * Получает оптимальный формат изображения
 */
export const getOptimalImageFormat = async (): Promise<'avif' | 'webp' | 'jpg'> => {
  if (await supportsAVIF()) return 'avif';
  if (await supportsWebP()) return 'webp';
  return 'jpg';
};

/**
 * Preload критичных ресурсов
 */
export const preloadImage = (src: string, type: 'image' | 'video' = 'image'): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = type;
  link.href = src;
  
  if (type === 'video') {
    link.setAttribute('type', 'video/mp4');
  }
  
  document.head.appendChild(link);
};

/**
 * Preconnect к внешним доменам
 */
export const preconnect = (url: string): void => {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = url;
  document.head.appendChild(link);
};

/**
 * Компрессия изображения на клиенте (для загрузки)
 */
export const compressImage = (
  file: File,
  maxWidth: number = 1920,
  quality: number = 0.8
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas context not available'));
          return;
        }
        
        ctx.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Failed to compress image'));
            }
          },
          'image/jpeg',
          quality
        );
      };
      
      img.onerror = () => reject(new Error('Failed to load image'));
    };
    
    reader.onerror = () => reject(new Error('Failed to read file'));
  });
};
