'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Section from '../../molecules/Section'
import Container from '../../atoms/Layout/Container'
import Heading from '../../atoms/Heading'
import Text from '../../atoms/Text'
import Image from 'next/image'

interface LiveShowData {
  id: string
  artist: string
  image: string
  stage: string
  time: string
  status: string
}

interface InLiveSliderProps {
  shows: LiveShowData[]
}

export default function InLiveSlider({ shows }: InLiveSliderProps) {
  const [emblaRef] = useEmblaCarousel({ 
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    skipSnaps: false,
    dragFree: true
  })

  return (
    <Section background="watch-bg-primary" padding="md">
      <Container>
        <div className="mb-watch-6 text-2xl lg:pt-watch-24">
          <Heading level={2} className="text-white">In Live</Heading>
        </div>
      </Container>
        
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-watch-4 max-w-332 2xl:max-w-408 mx-auto px-0">
          {shows.map((show) => (
            <div
              key={show.id}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
            >
              <div className="relative group rounded-watch-md overflow-hidden">
                <div className="relative w-full h-64 bg-gradient-to-b from-gray-600 to-gray-800">
                  <Image
                    src={show.image}
                    alt={show.artist}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay escuro */}
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                
                {/* Info card */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-watch-4">
                  <div className="flex items-start justify-between mb-watch-2">
                    <Text className="text-white font-semibold text-sm">{show.artist}</Text>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      <Text className="text-red-500 text-xs font-medium">{show.status}</Text>
                    </div>
                  </div>
                  <Text className="text-white/70 text-xs mb-watch-1">{show.stage}</Text>
                  <Text className="text-white/70 text-xs">{show.time}</Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
