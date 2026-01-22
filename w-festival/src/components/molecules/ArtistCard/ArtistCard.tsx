'use client'

import Image from '../../atoms/Image'
import Text from '../../atoms/Text'
import Badge from '../../atoms/Badge'
import Overlay from '../../atoms/Overlay'

interface ArtistCardProps {
  name: string
  image: string
  width?: string
  height?: string
  onClick?: () => void
  showWatchAgainBadge?: boolean
}

export default function ArtistCard({ 
  name, 
  image, 
  width = '220px', 
  height = '288px',
  onClick,
  showWatchAgainBadge = false
}: ArtistCardProps) {
  const CardWrapper = onClick ? 'button' : 'div'
  
  return (
    <CardWrapper 
      className="relative overflow-hidden rounded-watch-lg group cursor-pointer border-4 border-transparent transition-all duration-300 hover:border-watch-primary"
      style={{ width, height }}
      onClick={onClick}
      {...(onClick && { type: 'button' })}
    >

      <Image
        src={image}
        alt={name}
        fallbackSrc={`https://via.placeholder.com/${width.replace('px', '')}x${height.replace('px', '')}/1f2937/white?text=${encodeURIComponent(name)}`}
        className="w-full h-full"
      />
      
      <Overlay 
        className={showWatchAgainBadge 
          ? "from-black via-black/70 to-black/40 to-t z-10" 
          : "from-black via-black/50 to-transparent to-t z-10"
        } 
      />
      
      {showWatchAgainBadge && (
        <div className="absolute top-watch-4 left-watch-4 z-20">
          <Badge variant="dark" size="sm">
            Watch Again
          </Badge>
        </div>
      )}
      
      <div className="absolute inset-0 mb-watch-12 flex items-end justify-center z-20">
        <Text 
          variant="h3" 
          size="artist" 
          weight="bold"
          color="white"
          className="text-center px-watch-4"
        >
          {name}
        </Text>
      </div>
    </CardWrapper>
  )
}
