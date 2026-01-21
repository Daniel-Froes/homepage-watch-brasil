'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'

interface Artist {
  id: string
  name: string
  image: string
}

interface LineUpSliderProps {
  artists: Artist[]
}

export default function LineUpSlider({ artists }: LineUpSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const allItems = [
    ...artists.slice(0, 2),
    {
      id: 'tesla-ad',
      name: 'Tesla Ad',
      image: '/tesla-ad.jpg',
      isAd: true
    },
    ...artists.slice(2)
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + allItems.length) % allItems.length)
  }

  return (
    <section className="py-8" style={{ backgroundColor: '#1E1E22' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-bold">Line Up</h2>
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              onClick={prevSlide}
              className="p-1"
            >
              <Icon icon={ChevronLeft} />
            </Button>
            <Button 
              variant="ghost" 
              onClick={nextSlide}
              className="p-1"
            >
              <Icon icon={ChevronRight} />
            </Button>
          </div>
        </div>
        
        <div className="flex space-x-4 overflow-hidden">
          {allItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex-shrink-0 w-48 h-64 relative transition-transform duration-300 ${
                index >= currentIndex && index < currentIndex + 5 ? 'block' : 'hidden'
              }`}
            >
              {item.isAd ? (
                <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg h-full flex flex-col justify-between p-4 relative overflow-hidden">
                  <div className="absolute top-2 right-2">
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                      Announcement
                    </span>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-white text-2xl font-bold mb-2">TESLA</div>
                      <div className="text-white/80 text-sm mb-4">Supercharger Technology</div>
                      <img 
                        src="/tesla-model3.png" 
                        alt="Tesla Model 3" 
                        className="w-32 h-auto mx-auto"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    variant="secondary" 
                    size="sm"
                    icon={ArrowRight}
                    iconPosition="right"
                    onClick={() => console.log('Tesla ad clicked')}
                  >
                    Learn more
                  </Button>
                </div>
              ) : (
                <div className="relative h-full rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/192x256/1f2937/white?text=${encodeURIComponent(item.name)}`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">{item.name}</h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}