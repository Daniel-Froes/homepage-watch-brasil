import NextImage from 'next/image'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import Overlay from '../../atoms/Overlay'

interface ExclusiveContentCardProps {
  title?: string
  subtitle?: string
  image?: string
  cta?: {
    text: string
    href?: string
    onClick?: () => void
  }
  textAlign?: 'left' | 'center' | 'right'
  onClick?: () => void
}

export default function ExclusiveContentCard({
  title,
  subtitle,
  image,
  cta,
  textAlign = 'left',
  onClick
}: ExclusiveContentCardProps) {
  const CardWrapper = onClick ? 'button' : 'div'
  
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }
  
  return (
    <CardWrapper 
      className="relative w-full h-56 rounded-watch-md overflow-hidden group cursor-pointer"
      onClick={onClick}
      {...(onClick && { type: 'button' })}
    >

      {image && (
        <NextImage
          src={image}
          alt={title || ''}
          fill
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      )}

      <Overlay className="from-black via-black/50 to-transparent bg-gradient-to-t" />

      <div className="absolute inset-0 flex flex-col justify-end p-watch-6 z-10">
        <div className={`space-y-watch-1 w-full flex flex-col ${alignClasses[textAlign]}`}>
          <Text 
            variant="h3" 
            size="exclusive-title" 
            weight="bold"
            color="white"
          >
            {title}
          </Text>
          
          <Text 
            size="exclusive-subtitle"
            color="white"
            className="text-white/80"
          >
            {subtitle}
          </Text>
          
          {cta && (
            <div className="pt-watch-3">
              <Button
                onClick={cta.href ? undefined : cta.onClick}
                variant="orange"
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

