'use client'

import useEmblaCarousel from 'embla-carousel-react'
import ArtistCard from '../../molecules/ArtistCard'
import AdCard from '../../molecules/AdCard'
import Section from '../../molecules/Section'
import Heading from '../../atoms/Heading'
import Container from '../../atoms/Layout/Container'

interface Artist {
  id: string
  name: string
  image: string
  isAd?: boolean
}

interface LineUpSliderProps {
  artists: Artist[]
}

export default function LineUpSlider({ artists }: LineUpSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    skipSnaps: false,
    dragFree: true
  })

  const allItems = [
    ...artists.slice(0, 5),
    {
      id: 'tesla-ad',
      name: 'Tesla Ad',
      image: '/tesla-ad.jpg',
      isAd: true
    },
    ...artists.slice(5)
  ]

  return (
    <Section background="watch-bg-primary" padding="md">
      <Container>
        <div className="mb-watch-6 px-watch-4 md:px-watch-8">
          <Heading level={2} className="text-white">Line Up</Heading>
        </div>
      </Container>
        
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-watch-4 pl-watch-4 md:pl-watch-8 container mx-auto">
          {allItems.map((item) => (
            <div
              key={item.id}
              className="flex-[0_0_auto]"
            >
              {item.isAd ? (
                <AdCard
                  imageSrc="/tesla.png"
                  imageAlt="Tesla"
                  imageOnly
                />
              ) : (
                <ArtistCard
                  name={item.name}
                  image={item.image}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}