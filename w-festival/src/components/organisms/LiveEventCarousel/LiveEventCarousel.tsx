'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Section from '../../molecules/Section'
import Container from '../../atoms/Layout/Container'
import Heading from '../../atoms/Heading'
import Text from '../../atoms/Text'
import StatusBadge from '../../atoms/StatusBadge'
import Button from '../../atoms/Button'
import Image from 'next/image'

interface LiveShow {
  id: string
  artist: string
  image: string
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
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    skipSnaps: false,
    dragFree: true,
  })

  return (
    <Section background="watch-bg-primary" padding="md">
      <Container>
        <div className="mb-watch-6 text-2xl">
          <Heading level={2} className="text-white">
            {title}
          </Heading>
        </div>
      </Container>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-watch-4 max-w-332 2xl:max-w-408 mx-auto px-watch-6 md:px-0">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
            >
              <div className="relative group rounded-watch-md overflow-hidden">
                <div className="relative w-full h-64 bg-gradient-to-b from-gray-600 to-gray-800">
                  <Image
                    src={event.image}
                    alt={event.artist}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay escuro padrão */}
                  <div className="absolute inset-0 bg-black/30 group-hover:opacity-0 transition-opacity duration-300"></div>
                  
                  {/* Gradiente superior - igual VideoHero */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(to bottom, #1E1E22 0%, rgba(30, 30, 34, 0.8) 30%, rgba(30, 30, 34, 0.4) 60%, transparent 100%)'
                    }}
                  ></div>
                  
                  {/* Gradiente inferior - igual VideoHero */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-32 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(to top, #1E1E22 0%, rgba(30, 30, 34, 0.8) 30%, rgba(30, 30, 34, 0.4) 60%, transparent 100%)'
                    }}
                  ></div>
                  
                  {/* Overlay com botões no hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-center p-watch-6 z-20">
                    <div className="flex items-center gap-watch-3">
                      {/* Botão L */}
                      <button className="w-10 h-10 bg-watch-green rounded-watch-sm flex items-center justify-center text-white font-bold text-lg hover:bg-watch-green/80 transition-colors">
                        L
                      </button>
                      
                      {/* Botão Assistir */}
                      <Button variant="orange" size="sm">
                        Assistir
                      </Button>
                      
                      {/* Botão + */}
                      <button className="w-10 h-10 border-2 border-white rounded-watch-sm flex items-center justify-center text-white font-bold text-2xl hover:bg-white/10 transition-colors">
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Info card - sempre visível com fundo cinza */}
                <div className="absolute bottom-0 left-0 right-0 bg-watch-bg-secondary/95 p-watch-4 z-30">
                  <div className="flex items-start justify-between mb-watch-2">
                    <Text className="text-white font-semibold text-sm">
                      {event.artist}
                    </Text>
                    <StatusBadge status={event.status} />
                  </div>
                  <Text className="text-white/70 text-xs mb-watch-1">
                    {event.stage}
                  </Text>
                  <Text className="text-white/70 text-xs">
                    {event.time}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
