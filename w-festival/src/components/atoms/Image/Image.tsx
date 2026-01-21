'use client'

import { ImgHTMLAttributes, useState } from 'react'

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'className'> {
  src: string
  alt: string
  fallbackSrc?: string
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  className?: string
}

export default function Image({ 
  src, 
  alt, 
  fallbackSrc,
  objectFit = 'cover',
  className = '',
  ...props 
}: ImageProps) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleError = () => {
    setError(true)
    setLoading(false)
  }

  const handleLoad = () => {
    setLoading(false)
  }

  const imageSrc = error && fallbackSrc ? fallbackSrc : src
  const objectFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down'
  }[objectFit]

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 bg-watch-gray-800 animate-pulse" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={`${objectFitClass} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ${className}`}
        {...props}
      />
    </div>
  )
}
