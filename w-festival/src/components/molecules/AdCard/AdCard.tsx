import Image from 'next/image'
import Text from '../../atoms/Text'

interface AdCardProps {
  title: string
  subtitle: string
  image: string
  cta?: {
    text: string
    href?: string
  }
  height?: string
}

export default function AdCard({
  title,
  subtitle,
  image,
  cta,
  height = 'h-72'
}: AdCardProps) {
  return (
    <div className={`relative w-full sm:w-[440px] ${height} rounded-watch-md overflow-hidden group cursor-pointer border-4 border-watch-bg-primary hover:border-watch-primary transition-colors duration-300`}>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      {/* Badge Announcement */}
      <div className="absolute top-2 right-2 z-10">
        <div 
          className="flex items-center gap-1 px-2 py-1 rounded-3xl text-white text-xs font-semibold"
          style={{ backgroundColor: '#E96744' }}
        >
          Announcement
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M6 4V6.5M6 8.5V8.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-between p-watch-6">
        <div></div>
        <div>
          <h3 className="text-white text-2xl font-bold mb-watch-1">
            {title}
          </h3>
          <Text className="text-white/80 text-sm mb-watch-4">
            {subtitle}
          </Text>
          {cta && (
            <a
              href={cta.href || '#'}
              className="inline-flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 px-watch-4 py-watch-2 rounded-watch-md text-xs font-semibold transition-colors"
            >
              {cta.text}
              <span>→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
