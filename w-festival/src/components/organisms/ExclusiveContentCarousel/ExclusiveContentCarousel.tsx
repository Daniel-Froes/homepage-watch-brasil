'use client'

import Carousel from '../Carousel'
import ExclusiveContentCard from '../../molecules/ExclusiveContentCard'

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
  return (
    <Carousel
      title={title}
      items={items}
      itemClassName="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
      renderItem={(item) => (
        <ExclusiveContentCard
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
          cta={item.cta}
        />
      )}
    />
  )
}
