'use client'

import useEmblaCarousel from 'embla-carousel-react'
import ArtistCard from '../../molecules/ArtistCard'
import AdCard from '../../molecules/AdCard'
import Section from '../../molecules/Section'
import Heading from '../../atoms/Heading'
import Container from '../../atoms/Layout/Container'

interface Item {
  id: string
  name: string
  image: string
  isAd?: boolean
}

interface ArtistCarouselProps {
  items: Item[]
  title?: string
  showAd?: boolean
  adPosition?: number
}

export default function ArtistCarousel({
  items,
  title = 'Artists',
  showAd = true,
  adPosition = 5,
}: ArtistCarouselProps) {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    skipSnaps: false,
    dragFree: true,
  })

  const displayItems = showAd
    ? [
        ...items.slice(0, adPosition),
        {
          id: 'tesla-ad',
          name: 'Tesla Ad',
          image: '/tesla-ad.jpg',
          isAd: true,
        },
        ...items.slice(adPosition),
      ]
    : items

  return (
    <Section background="watch-bg-primary" padding="md">
      <Container>
        <div className="mb-watch-6 text-2xl lg:pt-watch-24">
          <Heading level={2} className="text-white">
            {title}
          </Heading>
        </div>
      </Container>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-watch-4 max-w-332 2xl:max-w-408 mx-auto px-0">
          {displayItems.map((item) => (
            <div key={item.id} className="flex-[0_0_auto]">
              {item.isAd ? (
                <AdCard imageSrc="/tesla.png" imageAlt="Tesla" imageOnly />
              ) : (
                <ArtistCard name={item.name} image={item.image} />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
