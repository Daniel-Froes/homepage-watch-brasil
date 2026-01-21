'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ArrowRight } from 'lucide-react'
import Button from '../../atoms/Button'

interface Artist {
  id: string
  name: string
  image: string
  isAd?: boolean
}

interface LineUpSliderProps {
  artists: Artist[]
}

export default function LineUpSlider({ artists }: LineUpSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    skipSnaps: false,
    dragFree: true
  })

  const allItems = [
    ...artists.slice(0, 4),
    {
      id: 'tesla-ad',
      name: 'Tesla Ad',
      image: '/tesla-ad.jpg',
      isAd: true
    },
    ...artists.slice(4),
    ...artists.slice(0, 4).map((artist, idx) => ({ ...artist, id: `${artist.id}-dup-${idx}` })),
    {
      id: 'tesla-ad-2',
      name: 'Tesla Ad',
      image: '/tesla-ad.jpg',
      isAd: true
    }
  ]

  return (
    <section className="py-8" style={{ backgroundColor: '#1E1E22' }}>
      <div className="container mx-auto">
        <div className="mb-6 px-4 md:px-8">
          <h2 className="text-white text-2xl font-bold">Line Up</h2>
        </div>
      </div>
        
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 pl-4 md:pl-8 container mx-auto">
          {allItems.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_auto]"
              >
                {item.isAd ? (
                  <div 
                    className="relative flex flex-col justify-between p-6 overflow-hidden"
                    style={{
                      width: '440px',
                      height: '288px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)'
                    }}
                  >
                    <div className="absolute top-4 right-4">
                      <span className="bg-orange-500 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                        Announcement
                      </span>
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-white text-4xl font-bold mb-2 tracking-wider">TESLA</div>
                        <div className="text-white/90 text-base mb-6">Supercharger Technology</div>
                        <img 
                          src="/tesla-model3.png" 
                          alt="Tesla Model 3" 
                          className="w-48 h-auto mx-auto"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        icon={ArrowRight}
                        iconPosition="right"
                        radius="full"
                        className="px-6"
                      >
                        Learn more
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="relative overflow-hidden group cursor-pointer"
                    style={{
                      width: '220px',
                      height: '288px',
                      borderRadius: '8px'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/220x288/1f2937/white?text=${encodeURIComponent(item.name)}`
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