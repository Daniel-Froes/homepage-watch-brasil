import React from 'react'
import Image from 'next/image'

interface FestivalCardProps {
  title: string
  subtitle: string
  background: string
  textColor: string
  svgSrc?: string
  isWide?: boolean
  imageSrc?: string
}

export default function FestivalCard({ 
  title, 
  subtitle, 
  background, 
  textColor,
  svgSrc,
  isWide = false,
  imageSrc
}: FestivalCardProps) {
  const sizeClasses = isWide ? 'w-[440px] h-52' : 'w-52 h-52'
  const borderRadius = isWide ? 'rounded-watch-lg' : 'rounded-watch-lg'

  return (
    <div 
      className={`${sizeClasses} ${borderRadius} flex flex-col items-start justify-end p-watch-6 cursor-pointer border-4 border-watch-bg-primary hover:border-watch-primary relative overflow-hidden transition-colors duration-300`}
      style={{ background }}
    >
      {imageSrc ? (
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      ) : svgSrc ? (
        <div className="absolute inset-0">
          <Image
            src={svgSrc}
            alt={title}
            fill
            className="object-none"
          />
        </div>
      ) : null}
    </div>
  )
}
