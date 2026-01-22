export const getResponsiveSizes = (
  mobile: string,
  tablet: string,
  desktop: string
) => {
  return `(max-width: 640px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`
}

export const COMMON_IMAGE_SIZES = {
  thumbnail: '(max-width: 640px) 100vw, 200px',
  card: '(max-width: 640px) 100vw, 300px',
  hero: '(max-width: 1024px) 100vw, 1200px',
  badge: '(max-width: 640px) 100vw, 136px',
  avatar: '(max-width: 640px) 40px, 48px',
}


export const LAZY_IMAGE_CONFIG = {
  loading: 'lazy' as const,
  quality: 75,
}

export const PRIORITY_IMAGE_CONFIG = {
  priority: true,
  quality: 85,
}
