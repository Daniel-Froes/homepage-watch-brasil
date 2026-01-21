import React from 'react'

interface FestivalCardProps {
  title: string
  subtitle: string
  background: string
  textColor: string
}

export default function FestivalCard({ title, subtitle, background, textColor }: FestivalCardProps) {
  return (
    <div 
      className="w-40 h-40 rounded-watch-lg flex flex-col items-start justify-end p-watch-6 cursor-pointer transition-transform hover:scale-105"
      style={{ background }}
    >
      <h3 className="text-3xl font-bold" style={{ color: textColor }}>
        {title}
      </h3>
      <p className="text-lg opacity-80" style={{ color: textColor }}>
        {subtitle}
      </p>
    </div>
  )
}
