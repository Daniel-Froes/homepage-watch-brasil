'use client'

import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Section from '../../molecules/Section'
import Container from '../../atoms/Layout/Container'
import CarouselIndicator from '../../atoms/CarouselIndicator'
import { Ad } from '@/src/data/ads'
import Image from 'next/image'

interface AdCarouselProps {
  ads: Ad[]
}

export default function AdCarousel({ ads }: AdCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  return (
    <Section background="watch-bg-secondary" padding="lg">
      <Container>
        <div className="relative bg-white pt-[32px] pr-[32px] pb-[12px] pl-[32px] rounded-watch-lg">
          <div className="overflow-hidden rounded-watch-lg" ref={emblaRef}>
            <div className="flex">
              {ads.map((ad) => (
                <div key={ad.id} className="flex-[0_0_100%] min-w-0">
                  <div className="relative w-full h-watch-336 overflow-hidden rounded-watch-lg">
                    <Image
                      src={ad.image}
                      alt={ad.id}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-watch-2 mt-watch-3">
            {ads.map((_, index) => (
              <CarouselIndicator
                key={index}
                isActive={index === selectedIndex}
                onClick={() => scrollTo(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
