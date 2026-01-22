'use client'

import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Container from '../../atoms/Layout/Container'
import CarouselIndicator from '../../atoms/CarouselIndicator'
import Section from '../../molecules/Section'
import { Ad } from '@/src/data/ads'
import Image from 'next/image'

interface AdCarouselProps {
  ads: Ad[]
}

export default function AdCarousel({ ads }: AdCarouselProps) {
  const [selectedIndexMobile, setSelectedIndexMobile] = useState(0)
  const [selectedIndexDesktop, setSelectedIndexDesktop] = useState(0)

  const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  const [emblaRefDesktop, emblaApiDesktop] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  const onSelectMobile = useCallback(() => {
    if (!emblaApiMobile) return
    setSelectedIndexMobile(emblaApiMobile.selectedScrollSnap())
  }, [emblaApiMobile])

  const onSelectDesktop = useCallback(() => {
    if (!emblaApiDesktop) return
    setSelectedIndexDesktop(emblaApiDesktop.selectedScrollSnap())
  }, [emblaApiDesktop])

  useEffect(() => {
    if (!emblaApiMobile) return
    onSelectMobile()
    emblaApiMobile.on('select', onSelectMobile)
    return () => {
      emblaApiMobile.off('select', onSelectMobile)
    }
  }, [emblaApiMobile, onSelectMobile])

  useEffect(() => {
    if (!emblaApiDesktop) return
    onSelectDesktop()
    emblaApiDesktop.on('select', onSelectDesktop)
    return () => {
      emblaApiDesktop.off('select', onSelectDesktop)
    }
  }, [emblaApiDesktop, onSelectDesktop])

  const scrollToMobile = useCallback(
    (index: number) => emblaApiMobile && emblaApiMobile.scrollTo(index),
    [emblaApiMobile]
  )

  const scrollToDesktop = useCallback(
    (index: number) => emblaApiDesktop && emblaApiDesktop.scrollTo(index),
    [emblaApiDesktop]
  )

  return (
    <Section background="watch-bg-secondary" padding="lg">
      <Container>
        {/* Mobile Version */}
        <div className="lg:hidden w-full">
          <div className="overflow-hidden" ref={emblaRefMobile}>
            <div className="flex gap-watch-4">
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
                isActive={index === selectedIndexMobile}
                onClick={() => scrollToMobile(index)}
                index={index}
              />
            ))}
          </div>        
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:block relative bg-white rounded-watch-lg overflow-hidden">
          <div className="overflow-hidden" ref={emblaRefDesktop}>
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

          <div className="flex justify-center gap-watch-2 py-watch-4 bg-white">
            {ads.map((_, index) => (
              <CarouselIndicator
                key={index}
                isActive={index === selectedIndexDesktop}
                onClick={() => scrollToDesktop(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
