'use client'

import useEmblaCarousel from 'embla-carousel-react'
import FestivalCard from '../../molecules/FestivalCard'
import Section from '../../molecules/Section'
import Container from '../../atoms/Layout/Container'
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
    <Section background="watch-bg-secondary" padding="lg">
      <Container>
        <div className="flex gap-watch-8 items-center">
          {/* Texto fixo à esquerda */}
          <div className="flex-shrink-0 w-48">
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

          {/* Carrossel de cards */}
          <div className="flex-1 overflow-hidden" ref={emblaRef}>
            <div className="flex gap-watch-4">
              {festivals.map((festival) => (
                <div key={festival.id} className="flex-[0_0_auto]">
                  <FestivalCard
                    title={festival.title}
                    subtitle={festival.subtitle}
                    background={festival.background}
                    textColor={festival.textColor}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
