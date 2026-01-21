'use client'

import useEmblaCarousel from 'embla-carousel-react'
import FestivalCard from '../../molecules/FestivalCard'
import Section from '../../molecules/Section'
import Button from '../../atoms/Button'
import { Festival } from '@/src/data/festivals'

interface FestivalSliderProps {
  festivals: Festival[]
}

export default function FestivalSlider({ festivals }: FestivalSliderProps) {
  const [emblaRef] = useEmblaCarousel({ 
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    dragFree: true
  })

  return (
    <Section background="watch-bg-secondary" padding="lg" className='overflow-hidden'>
      <div className="flex flex-col md:flex-row gap-watch-6 items-start md:items-center max-w-165 lg:max-w-250 xl:max-w-332 2xl:max-w-464 mx-auto px-watch-6 md:px-0">
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

        <div className="flex-1 w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-watch-4">
              {festivals.map((festival) => (
                <div key={festival.id} className="flex-[0_0_auto]">
                  <FestivalCard
                    title={festival.title}
                    subtitle={festival.subtitle}
                    background={festival.background}
                    textColor={festival.textColor}
                    svgSrc={festival.svgSrc}
                    isWide={festival.isWide}
                    imageSrc={festival.imageSrc}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
