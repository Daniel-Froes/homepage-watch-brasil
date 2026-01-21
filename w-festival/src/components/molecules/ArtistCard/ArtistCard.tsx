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
      className="relative overflow-hidden rounded-watch-lg group cursor-pointer border-4 border-transparent transition-all duration-300 hover:border-watch-primary"
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
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
      <div className="absolute inset-0 mb-watch-12 flex items-end justify-center z-20">
        <h3 className="text-watch-text-white font-watch-bold text-watch-2xl text-center px-watch-4">{name}</h3>
      </div>
    </div>
  )
}
