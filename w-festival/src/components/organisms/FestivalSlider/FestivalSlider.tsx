'use client'

import Carousel from '../Carousel'
import FestivalCard from '../../molecules/FestivalCard'
import AdCard from '../../molecules/AdCard'
import Button from '../../atoms/Button'
import { Festival } from '@/src/data/festivals'

interface FestivalSliderProps {
  festivals: Festival[]
  showAd?: boolean
  adPosition?: number
}

export default function FestivalSlider({ festivals, showAd = true, adPosition = 2 }: FestivalSliderProps) {
  const displayItems = showAd
    ? [
        ...festivals.slice(0, adPosition),
        {
          id: 'nike-ad',
          title: 'Nike Air Max 90 Futura',
          subtitle: 'Exclusive Product',
          isAd: true,
        },
        ...festivals.slice(adPosition),
      ]
    : festivals

  return (
    <Carousel
      background="watch-bg-secondary"
      padding="lg"
      sectionClassName="overflow-hidden"
      showTitle={false}
      showContainer={false}
      items={displayItems}
      itemClassName="flex-[0_0_auto]"
      inlineCarousel={true}
      customHeader={
        <div className="shrink-0 md:w-64">
          <h2 className="text-white text-2xl font-bold mb-watch-4">
            Festival for you
          </h2>
          <p className="text-white/70 text-sm mb-watch-6">
            Explore your favorite genres and discover new rhythms to love!
          </p>
          <Button variant="orange" size="sm">
            See All
          </Button>
        </div>
      }
      renderItem={(item: any) => 
        item.isAd ? (
          <AdCard 
            title="Nike Air Max 90 Futura"
            subtitle="Exclusive Product"
            image="/tesla.png"
            height="h-52"
            cta={{
              text: "Learn more",
              href: "#"
            }}
          />
        ) : (
          <FestivalCard
            title={item.title}
            subtitle={item.subtitle}
            background={item.background}
            textColor={item.textColor}
            svgSrc={item.svgSrc}
            imageSrc={item.imageSrc}
          />
        )
      }
    />
  )
}
