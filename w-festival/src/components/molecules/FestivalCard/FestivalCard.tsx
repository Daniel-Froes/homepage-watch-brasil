import React from 'react'
import NextImage from 'next/image'

interface FestivalCardProps {
  title: string
  subtitle: string
  background: string
  textColor?: string
  svgSrc?: string
  imageSrc?: string
  onClick?: () => void
}

export default function FestivalCard({ 
  title, 
  background, 
  svgSrc,
  imageSrc,
  onClick
}: FestivalCardProps) {
  const CardWrapper = onClick ? 'button' : 'div'
  
  return (
    <CardWrapper 
      className="w-watch-52 h-watch-52 rounded-watch-lg cursor-pointer border-4 border-watch-bg-primary hover:border-watch-primary relative transition-colors duration-300"
      style={{ background }}
      onClick={onClick}
      {...(onClick && { type: 'button' })}
    >
      {imageSrc && (
        <NextImage
          src={imageSrc}
          alt={title}
          fill
          loading="lazy"
          className="object-cover"
          sizes="208px"
        />
      )}
      
      {!imageSrc && svgSrc && (
        <NextImage
          src={svgSrc}
          alt={title}
          fill
          loading="lazy"
          className="object-none"
        />
      )}
    </CardWrapper>
  )
}
