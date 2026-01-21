'use client'

import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Section from '../../molecules/Section'
import Container from '../../atoms/Layout/Container'
import { Ad } from '@/src/data/ads'
import Image from 'next/image'

interface AdsSliderProps {
  ads: Ad[]
}

export default function AdsSlider({ ads }: AdsSliderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center'
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
        <div className="relative">
          <div className="bg-white p-watch-3 rounded-watch-lg">
            <div className="overflow-hidden rounded-watch-md" ref={emblaRef}>
              <div className="flex">
                {ads.map((ad) => (
                  <div key={ad.id} className="flex-[0_0_100%] min-w-0">
                    <div className="relative w-full h-336 bg-gradient-to-r from-orange-300 via-amber-200 to-orange-400 rounded-watch-md overflow-visible flex items-center justify-between px-watch-6">
                      <div className="relative w-full h-full">
                        <Image
                          src={ad.image}
                          alt={ad.id}
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                      
                      <div className="absolute right-watch-6 top-1/2 -translate-y-1/2">
                        <button className="bg-watch-primary hover:bg-orange-600 text-white px-watch-6 py-watch-3 rounded-watch-md font-bold transition-colors whitespace-nowrap">
                          Saiba Mais →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-watch-2 mt-watch-4">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === selectedIndex 
                    ? 'bg-watch-primary w-8' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
