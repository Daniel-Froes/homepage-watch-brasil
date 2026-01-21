import Image from 'next/image'
import Text from '../../atoms/Text'

interface ExclusiveContentCardProps {
  title: string
  subtitle: string
  image: string
  cta?: {
    text: string
    href?: string
  }
}

export default function ExclusiveContentCard({
  title,
  subtitle,
  image,
  cta,
}: ExclusiveContentCardProps) {
  return (
    <div className="relative w-full h-56 rounded-watch-md overflow-hidden group">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      {/* Content */}
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
