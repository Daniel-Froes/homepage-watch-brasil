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
        <div className="md:hidden w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {ads.map((ad) => (
                <div key={ad.id} className="flex-[0_0_100%] min-w-0">
                  <Image
                    src="/tesla.png"
                    alt={ad.id}
                    width={1400}
                    height={420}
                    className="object-contain w-full"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>          
          <div className="flex justify-center gap-watch-2 py-watch-4">
            {ads.map((_, index) => (
              <CarouselIndicator
                key={index}
                isActive={index === selectedIndex}
                onClick={() => scrollTo(index)}
                index={index}
              />
            ))}
          </div>        </div>

        <div className="hidden md:block relative bg-white rounded-watch-lg overflow-hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {ads.map((ad) => (
                <div key={ad.id} className="flex-[0_0_100%] min-w-0">
                  <div className="relative w-full h-watch-480 bg-white px-watch-8 pt-watch-8 pb-watch-0">
                    <div className="relative w-full h-full overflow-hidden rounded-watch-lg flex items-center justify-center bg-white">
                      <Image
                        src={ad.image}
                        alt={ad.id}
                        width={1400}
                        height={420}
                        className="object-contain w-full h-full"
                        priority
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-watch-2 py-watch-4  bg-white">
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
