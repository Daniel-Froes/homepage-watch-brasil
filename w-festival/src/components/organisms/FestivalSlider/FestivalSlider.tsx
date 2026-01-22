'use client'

import Carousel from '../Carousel'
import FestivalCard from '../../molecules/FestivalCard'
import AdCard from '../../molecules/AdCard'
import Button from '../../atoms/Button'
import Heading from '../../atoms/Heading'
import Text from '../../atoms/Text'
import { Festival } from '@/src/data/festivals'

interface FestivalSliderProps {
  festivals: Festival[]
  showAd?: boolean
  adPosition?: number
}

export default function FestivalSlider({ festivals, showAd = true, adPosition = 2 }: FestivalSliderProps) {
  const filteredFestivals = festivals.filter(festival => festival.image)

  const displayItems = showAd
    ? [
        ...filteredFestivals.slice(0, adPosition),
        {
          id: 'airpods-pro-2',
          title: 'Airpods Pro 2',
          subtitle: 'Exclusive Product',
          isAd: true,
        },
        ...filteredFestivals.slice(adPosition),
      ]
    : filteredFestivals

  return (
    <Carousel
      background="watch-bg-secondary"
      padding="lg"
      sectionClassName=""
      showTitle={false}
      showContainer={false}
      items={displayItems as any}
      itemClassName="flex-[0_0_auto]"
      inlineCarousel={true}
      customHeader={
        <div className="shrink-0 mb-watch-3.5 md:mb-watch-0 md:w-watch-64 flex items-start max-w-[280px] md:max-w-none">
          <div>
            <Heading level={2} className="mb-watch-4 text-xl md:text-2xl">
              Festival for you
            </Heading>
            <Text variant="p" size="md" color="gray" className="mb-watch-6 md:text-sm">
              Explore your favorite genres and discover new rhythms to love!
            </Text>
            <Button variant="orange" size="sm" radius="2xl">
              See All
            </Button>
          </div>
        </div>
      }
      renderItem={(item: any) => 
        'isAd' in item && item.isAd ? (
          <AdCard 
            title="Airpods Pro 2"
            subtitle="Exclusive Product"
            image="/airpods.jpg"
            height="h-watch-52"
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
