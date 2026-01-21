'use client'

import { Grid2X2, Maximize, Volume2, Settings, VideoOff } from 'lucide-react'
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
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${videoSrc}?autoplay=1&mute=1&loop=1&playlist=${videoSrc}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            transform: 'scale(1.2)',
            transformOrigin: 'center center',
            pointerEvents: 'none'
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div 
          className="absolute top-0 left-0 right-0 h-32 z-10"
          style={{
            background: 'linear-gradient(to bottom, #1E1E22 0%, rgba(30, 30, 34, 0.8) 30%, rgba(30, 30, 34, 0.4) 60%, transparent 100%)'
          }}
        ></div>
        
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 z-10"
          style={{
            background: 'linear-gradient(to top, #1E1E22 0%, rgba(30, 30, 34, 0.8) 30%, rgba(30, 30, 34, 0.4) 60%, transparent 100%)'
          }}
        ></div>
      </div>
      
      <div className="relative z-20 flex flex-col justify-between h-full">
        <div className="flex-1 flex items-start justify-start p-8 pt-24">
          <div className="text-white">
            <Text variant="h1" size="hero" weight="bold" className="mb-4">
              {title}
            </Text>
            <div className="flex items-center space-x-4 text-sm uppercase tracking-wider">
              <span className="text-white px-2 py-1 rounded">{status}</span>
              <span>{subtitle}</span>
              <span>•</span>
              <span>{location}</span>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="orange" 
                icon={VideoOff} 
                onClick={() => console.log('Close camera')}
              >
                Close your camera
              </Button>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => console.log('Grid clicked')}>
                <Icon icon={Grid2X2} />
              </Button>
              <Button variant="ghost" onClick={() => console.log('Maximize clicked')}>
                <Icon icon={Maximize} />
              </Button>
              <Button variant="ghost" onClick={() => console.log('Volume clicked')}>
                <Icon icon={Volume2} />
              </Button>
              <Button variant="ghost" onClick={() => console.log('Settings clicked')}>
                <Icon icon={Settings} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}