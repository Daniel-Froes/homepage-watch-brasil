'use client'

import useEmblaCarousel from 'embla-carousel-react'
import ArtistCard from '../../molecules/ArtistCard'
import Section from '../../molecules/Section'
import Heading from '../../atoms/Heading'
import Container from '../../atoms/Layout/Container'
import Text from '../../atoms/Text'

interface ShowData {
  id: string
  name: string
  image: string
  stage: string
  time: string
}

interface YesterdayShowsSliderProps {
  shows: ShowData[]
}

export default function YesterdayShowsSlider({ shows }: YesterdayShowsSliderProps) {
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
          <Heading level={2} className="text-white">Yesterday Shows</Heading>
        </div>
      </Container>
        
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-watch-4 max-w-332 2xl:max-w-408 mx-auto px-0">
          {shows.map((show) => (
            <div
              key={show.id}
              className="flex-[0_0_auto]"
            >
              <div className="relative">
                <ArtistCard
                  name={show.name}
                  image={show.image}
                />
                <div className="mt-watch-2 text-center">
                  <Text className="text-white text-xs">{show.stage}</Text>
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
