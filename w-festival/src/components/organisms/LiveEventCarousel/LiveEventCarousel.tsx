'use client'

import Carousel from '../Carousel'
import Text from '../../atoms/Text'
import StatusBadge from '../../atoms/StatusBadge'
import Image from 'next/image'

interface LiveShow {
  id: string
  artist: string
  image?: string
  stage: string
  time: string
  status: string
}

interface LiveEventCarouselProps {
  events: LiveShow[]
  title?: string
}

export default function LiveEventCarousel({
  events,
  title = 'In Live',
}: LiveEventCarouselProps) {
  return (
    <Carousel
      title={title}
      items={events}
      itemClassName="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] xl:flex-[0_0_32%] 2xl:flex-[0_0_30%] min-w-0"
      gap="sm"
      renderItem={(event) => (
        <div className="group rounded-watch-lg overflow-hidden border-4 border-transparent hover:border-watch-primary transition-all duration-300 w-full h-[288px] flex flex-col mx-auto">
          <div className="relative w-full flex-1 bg-linear-to-b from-gray-600 to-gray-800">
            {event.image && (
              <Image
                src={event.image}
                alt={(event as any).artist || ''}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300"></div>
            <div className="absolute top-0 left-0 right-0 h-watch-24 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-b from-watch-overlay-heavy via-watch-overlay-medium to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 h-watch-40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-t from-watch-overlay-heavy via-watch-overlay-dark to-transparent"></div>
            
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end pb-watch-6 px-watch-6 z-20">
              <div className="flex items-center gap-watch-3">
                <button className="w-watch-10 h-watch-10 bg-watch-green rounded-watch-sm flex items-center justify-center text-white font-bold text-sm hover:bg-watch-green-hover transition-colors">
                  L
                </button>
                
                <button className="px-watch-4 h-watch-9 bg-watch-primary rounded-watch-sm flex items-center justify-center text-white font-semibold text-xs hover:bg-watch-primary-hover transition-colors">
                  ▶ Assistir
                </button>
                
                <button className="w-watch-9 h-watch-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg hover:bg-white/30 transition-colors border border-white/40">
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="bg-watch-gray-card p-watch-4 shrink-0">
            <div className="flex items-start justify-between mb-watch-6">
              <Text className="text-white font-semibold text-sm">
                {(event as any).artist}
              </Text>
              <StatusBadge status={(event as any).status} />
            </div>
            <div className="flex items-center justify-between">
              <Text className="text-white/70 text-xs">
                {(event as any).stage}
              </Text>
              <Text className="text-white/70 text-xs">
                {(event as any).time}
              </Text>
            </div>
          </div>
        </div>
      )}
    />
  )
}
