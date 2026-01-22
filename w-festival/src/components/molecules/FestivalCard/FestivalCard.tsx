import React from 'react'
import Image from 'next/image'

interface FestivalCardProps {
  title: string
  subtitle: string
  background: string
  textColor: string
  svgSrc?: string
  imageSrc?: string
}

export default function FestivalCard({ 
  title, 
  subtitle, 
  background, 
  textColor,
  svgSrc,
  imageSrc
}: FestivalCardProps) {
  return (
    <div 
      className="w-52 h-52 rounded-watch-lg flex flex-col items-start justify-end p-watch-6 cursor-pointer border-4 border-watch-bg-primary hover:border-watch-primary relative overflow-hidden transition-colors duration-300"
      style={{ background }}
    >
      {imageSrc && (
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {!imageSrc && svgSrc && (
        <div className="absolute inset-0">
          <Image
            src={svgSrc}
            alt={title}
            fill
            className="object-none"
          />
        </div>
      )}
    </div>
  )
}
