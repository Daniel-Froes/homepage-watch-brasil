'use client'

import ArtistCard from '../../molecules/ArtistCard'
import AdCard from '../../molecules/AdCard'
import Carousel from '../Carousel'

interface Item {
  id: string
  name: string
  image: string
  isAd?: boolean
  title?: string
  subtitle?: string
  cta?: {
    text: string
    href?: string
    onClick?: () => void
  }
}

interface ArtistCarouselProps {
  items: Item[]
  title?: string
  showAd?: boolean
  adPosition?: number
  showTitlePadding?: boolean
  showWatchAgainBadge?: boolean
}

export default function ArtistCarousel({
  items,
  title = 'Artists',
  showAd = true,
  adPosition = 5,
  showTitlePadding = false,
  showWatchAgainBadge = false,
}: ArtistCarouselProps) {
  const displayItems = showAd
    ? [
        ...items.slice(0, adPosition),
        {
          id: 'tesla-ad',
          name: 'Nike Air Max 90 Futura',
          title: 'Model 3 Standard',
          subtitle: 'Exclusive Product',
          image: '/tesla.png',
          isAd: true,
          cta: {
            text: 'Learn more',
            href: 'http://www.tesla.com/model3-choose',
          },
        },
        ...items.slice(adPosition),
      ]
    : items

  return (
    <Carousel
      title={title}
      titlePadding={showTitlePadding}
      items={displayItems as any}
      itemClassName="flex-[0_0_auto]"
      renderItem={(item) => {
        const typedItem = item as Item
        return typedItem.isAd ? (
          <AdCard 
            title="Model 3 Standard"
            subtitle="Exclusive Product"
            image="/teslasds.png"
            cta={{
              text: "Learn more",
              href: "http://www.tesla.com/model3-choose"
            }}
          />
        ) : (
          <ArtistCard 
            name={typedItem.name} 
            image={typedItem.image}
            showWatchAgainBadge={showWatchAgainBadge}
          />
        )
      }}
    />
  )
}
