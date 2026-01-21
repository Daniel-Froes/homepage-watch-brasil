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

  const handleError = () => {
    setError(true)
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
      <img
        src={imageSrc}
        alt={alt}
        onError={handleError}
        className={`w-full h-full ${objectFitClass} ${className}`}
        {...props}
      />
    </div>
  )
}
