import NextImage from 'next/image'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import Overlay from '../../atoms/Overlay'
import AnnouncementBadge from '../../atoms/AnnouncementBadge'

interface AdCardProps {
  title: string
  subtitle: string
  image: string
  badge?: {
    text?: string
    show?: boolean
  }
  cta?: {
    text: string
    href?: string
    onClick?: () => void
  }
  height?: string
  onClick?: () => void
  textAlign?: 'left' | 'center' | 'right'
}

export default function AdCard({
  title,
  subtitle,
  image,
  badge = { show: true },
  cta,
  height = 'h-72',
  onClick,
  textAlign = 'left'
}: AdCardProps) {
  const CardWrapper = onClick ? 'button' : 'div'
  
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }
  
  return (
    <CardWrapper 
      className={`relative w-full sm:w-[440px] ${height} rounded-watch-md overflow-hidden group cursor-pointer border-4 border-watch-bg-primary hover:border-watch-primary transition-colors duration-300`}
      onClick={onClick}
      {...(onClick && { type: 'button' })}
    >

      <NextImage
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, 440px"
      />

  
      <Overlay className="bg-gradient-to-t from-black via-black/50 to-transparent" />

      {badge?.show && (
        <div className="absolute top-watch-2 right-watch-2 z-10">
          <AnnouncementBadge text={badge.text} />
        </div>
      )}

      <div className="absolute inset-0 flex flex-col justify-end p-watch-6 z-10">
        <div className={`space-y-watch-1 w-full flex flex-col ${alignClasses[textAlign]}`}>
          <Text 
            variant="h3" 
            size="2xl" 
            weight="bold"
            color="white"
          >
            {title}
          </Text>
          
          <Text 
            size="sm"
            color="white"
            className="text-white/80"
          >
            {subtitle}
          </Text>
          
          {cta && (
            <div className="pt-watch-3">
              <Button
                onClick={cta.href ? undefined : cta.onClick}
                variant="primary"
                size="sm"
                radius="sm"
                className="inline-flex items-center gap-watch-2"
                {...(cta.href && {
                  onClick: () => window.location.href = cta.href!
                })}
              >
                {cta.text}
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  )
}
