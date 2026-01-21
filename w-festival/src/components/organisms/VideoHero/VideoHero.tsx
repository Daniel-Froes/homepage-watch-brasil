'use client'

import { Grid2X2, Maximize, Volume2, Settings, VideoOff, Video } from 'lucide-react'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button'

interface VideoHeroProps {
  videoSrc: string
  title: string
  subtitle: string
  status: string
  location: string
}

export default function VideoHero({ 
  videoSrc, 
  title, 
  subtitle, 
  status, 
  location
}: VideoHeroProps) {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube.com/embed/${videoSrc}?autoplay=1&mute=1&loop=1&playlist=${videoSrc}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: 'max(177.77vh, 100vw)',
            height: 'max(56.25vw, 100vh)',
            pointerEvents: 'none'
          }}
        />
        <div className="absolute inset-0 bg-watch-overlay-medium"></div>
        
        <div className="absolute top-0 left-0 right-0 h-watch-32 z-10 bg-gradient-to-b from-watch-bg-primary via-watch-bg-primary/80 via-30% via-watch-bg-primary/40 via-60% to-transparent"></div>
        
        <div 
          className="absolute bottom-0 left-0 right-0 h-watch-32 z-10"
          style={{
            background: 'linear-gradient(to top, #1E1E22 0%, rgba(30, 30, 34, 0.8) 30%, rgba(30, 30, 34, 0.4) 60%, transparent 100%)'
          }}
        ></div>
      </div>
      
      <div className="relative z-20 flex flex-col justify-between h-full">
        <div className="flex-1 flex items-start justify-start pt-watch-20 md:pt-watch-24">
          <div className="container mx-auto px-watch-4 md:px-watch-8">
            <div className="text-white">
              <Text variant="h3" weight="bold" className="mb-watch-2 md:mb-watch-4 text-watch-2xl md:text-watch-4xl lg:text-watch-5xl xl:text-watch-6xl">
                {title}
              </Text>
              <div className="flex flex-wrap items-center gap-watch-2 md:gap-watch-4 uppercase tracking-wider text-watch-xs md:text-watch-sm">
                <Text variant="p" size="sm" className="text-white px-watch-2 py-watch-1 rounded">{status}</Text>
                <Text variant="p" size="sm">{subtitle}</Text>
                <Text variant="p" size="sm">•</Text>
                <Text variant="p" size="sm">{location}</Text>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-watch-4 md:p-watch-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-watch-4">
              <div className="flex items-center gap-watch-2 md:gap-watch-4 w-full md:w-auto">
                <Button 
                  variant="orange"
                  size="sm"
                  icon={Video}
                  radius="2xl"
                  className="gap-watch-1.5 w-full md:w-auto"
                >
                  <span className="hidden sm:inline">Choose your camera</span>
                  <span className="sm:hidden">Choose camera</span>
                </Button>
              </div>
              
              <div className="flex items-center gap-watch-2 md:gap-watch-4">
                <Button variant="ghost">
                  <Icon icon={Grid2X2} />
                </Button>
                <Button variant="ghost">
                  <Icon icon={Maximize} />
                </Button>
                <Button variant="ghost">
                  <Icon icon={Volume2} />
                </Button>
                <Button variant="ghost">
                  <Icon icon={Settings} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}