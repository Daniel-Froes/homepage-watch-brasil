'use client'

import NextImage from 'next/image'
import { useState } from 'react'

interface ImageProps {
  src: string
  alt: string
  fallbackSrc?: string
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  className?: string
  width?: number
  height?: number
}

export default function Image({ 
  src, 
  alt, 
  fallbackSrc,
  objectFit = 'cover',
  className = '',
  width,
  height
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
      <NextImage
        src={imageSrc}
        alt={alt}
        fill={!width && !height}
        width={width}
        height={height}
        onError={handleError}
        className={`w-full h-full ${objectFitClass} ${className}`}
      />
    </div>
  )
}
