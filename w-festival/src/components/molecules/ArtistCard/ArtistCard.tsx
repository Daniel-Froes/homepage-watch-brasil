'use client'

import Image from '../../atoms/Image'

interface ArtistCardProps {
  name: string
  image: string
  width?: string
  height?: string
  onClick?: () => void
}

export default function ArtistCard({ 
  name, 
  image, 
  width = '220px', 
  height = '288px',
  onClick 
}: ArtistCardProps) {
  return (
    <div 
      className="relative overflow-hidden rounded-watch-lg group cursor-pointer"
      style={{
        width,
        height
      }}
      onClick={onClick}
    >
      <Image
        src={image}
        alt={name}
        fallbackSrc={`https://via.placeholder.com/${width.replace('px', '')}x${height.replace('px', '')}/1f2937/white?text=${encodeURIComponent(name)}`}
        className="w-full h-full transition-transform duration-300 group-hover:scale-105"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-watch-overlay-heavy via-transparent to-transparent" />
      <div className="absolute bottom-watch-4 left-watch-4 right-watch-4">
        <h3 className="text-watch-text-white font-watch-bold text-watch-lg">{name}</h3>
      </div>
    </div>
  )
}
