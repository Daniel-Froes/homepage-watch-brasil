'use client'

import { ReactNode, useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Section from '../../molecules/Section'
import Container from '../../atoms/Layout/Container'
import Heading from '../../atoms/Heading'
import CarouselIndicator from '../../atoms/CarouselIndicator'

export interface CarouselConfig {
  loop?: boolean
  align?: 'start' | 'center' | 'end'
  slidesToScroll?: number
  dragFree?: boolean
  autoplay?: boolean
  autoplayDelay?: number
}

interface CarouselProps {
  title?: string
  showTitle?: boolean
  titlePadding?: boolean
  background?: string
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  config?: CarouselConfig
  renderItem: (item: any, index: number) => ReactNode
  items: any[]
  itemClassName?: string
  containerClassName?: string
  gap?: 'sm' | 'md' | 'lg'
  showContainer?: boolean
  showIndicators?: boolean
  indicatorPosition?: 'bottom' | 'inside'
  customHeader?: ReactNode
  sectionClassName?: string
  inlineCarousel?: boolean
}

const gapClasses = {
  sm: 'gap-watch-2',
  md: 'gap-watch-4',
  lg: 'gap-watch-6'
}

export default function Carousel({
  title,
  showTitle = true,
  titlePadding = false,
  background = 'watch-bg-primary',
  padding = 'md',
  config = {},
  renderItem,
  items,
  itemClassName = '',
  containerClassName = '',
  gap = 'md',
  showContainer = true,
  showIndicators = false,
  indicatorPosition = 'bottom',
  customHeader,
  sectionClassName = '',
  inlineCarousel = false
}: CarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const {
    loop = false,
    align = 'start',
    slidesToScroll = 1,
    dragFree = true,
    autoplay = false,
    autoplayDelay = 5000
  } = config

  const plugins = autoplay 
    ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]
    : []

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      align,
      slidesToScroll,
      skipSnaps: false,
      dragFree,
    },
    plugins
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

  if (inlineCarousel && customHeader) {
    return (
      <Section background={background} padding={padding} className={sectionClassName}>
        <div className="flex flex-col md:flex-row gap-watch-6 items-start md:items-center max-w-165 lg:max-w-250 xl:max-w-332 2xl:max-w-464 mx-auto px-watch-6 md:px-0">
          {customHeader}
          
          <div className="flex-1 w-full">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className={`flex ${gapClasses[gap]} ${containerClassName}`}>
                {items.map((item, index) => (
                  <div key={item.id || index} className={itemClassName}>
                    {renderItem(item, index)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {showIndicators && (
          <div className={`flex justify-center gap-watch-2 ${indicatorPosition === 'bottom' ? 'py-watch-4' : ''}`}>
            {items.map((_, index) => (
              <CarouselIndicator
                key={index}
                isActive={index === selectedIndex}
                onClick={() => scrollTo(index)}
                index={index}
              />
            ))}
          </div>
        )}
      </Section>
    )
  }

  return (
    <Section background={background} padding={padding} className={sectionClassName}>
      {customHeader ? (
        customHeader
      ) : showContainer && showTitle && title ? (
        <Container>
          <div className={`text-2xl ${titlePadding ? 'lg:pt-watch-24' : ''} mb-watch-6`}>
            <Heading level={2} className="text-white">
              {title}
            </Heading>
          </div>
        </Container>
      ) : null}

      <div className="overflow-hidden" ref={emblaRef}>
        <div className={`flex ${gapClasses[gap]} ${showContainer ? 'max-w-165 lg:max-w-250 xl:max-w-332 2xl:max-w-464 mx-auto px-watch-6 md:px-0' : ''} ${containerClassName}`}>
          {items.map((item, index) => (
            <div key={item.id || index} className={itemClassName}>
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {showIndicators && (
        <div className={`flex justify-center gap-watch-2 ${indicatorPosition === 'bottom' ? 'py-watch-4' : ''}`}>
          {items.map((_, index) => (
            <CarouselIndicator
              key={index}
              isActive={index === selectedIndex}
              onClick={() => scrollTo(index)}
              index={index}
            />
          ))}
        </div>
      )}
    </Section>
  )
}
