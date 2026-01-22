'use client'

import ArtistCard from '../../molecules/ArtistCard'
import AdCard from '../../molecules/AdCard'
import Carousel from '../Carousel'

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
          image: '/tesla.png',
          isAd: true,
        },
        ...items.slice(adPosition),
      ]
    : items

  return (
    <Carousel
      title={title}
      titlePadding={showTitlePadding}
      items={displayItems}
      itemClassName="flex-[0_0_auto]"
      renderItem={(item) => 
        item.isAd ? (
          <AdCard 
            title="Nike Air Max 90 Futura"
            subtitle="Exclusive Product"
            image="/tesla.png"
            cta={{
              text: "Learn more",
              href: "#"
            }}
          />
        ) : (
          <ArtistCard 
            name={item.name} 
            image={item.image}
            showWatchAgainBadge={showWatchAgainBadge}
          />
        )
      }
    />
  )
}
