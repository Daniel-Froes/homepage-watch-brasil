'use client'

import useEmblaCarousel from 'embla-carousel-react'
import ExclusiveContentCard from '../../molecules/ExclusiveContentCard'
import Section from '../../molecules/Section'
import Container from '../../atoms/Layout/Container'
import Heading from '../../atoms/Heading'

export interface ExclusiveContent {
  id: string
  title: string
  subtitle: string
  image: string
  cta?: {
    text: string
    href?: string
  }
}

interface ExclusiveContentCarouselProps {
  items: ExclusiveContent[]
  title?: string
}

export default function ExclusiveContentCarousel({
  items,
  title = 'Exclusive Content',
}: ExclusiveContentCarouselProps) {
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
        <div className="mb-watch-6 text-2xl lg:pt-watch-24">
          <Heading level={2} className="text-white">
            {title}
          </Heading>
        </div>
      </Container>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-watch-4 max-w-332 2xl:max-w-408 mx-auto px-0">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
            >
              <ExclusiveContentCard
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                cta={item.cta}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
