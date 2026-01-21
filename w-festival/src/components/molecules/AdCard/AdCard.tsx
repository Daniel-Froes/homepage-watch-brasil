'use client'

import { ArrowRight } from 'lucide-react'
import Button from '../../atoms/Button'
import Image from '../../atoms/Image'
import Badge from '../../atoms/Badge'

interface AdCardProps {
  title?: string
  subtitle?: string
  imageSrc?: string
  imageAlt?: string
  badgeText?: string
  buttonText?: string
  width?: string
  height?: string
  onButtonClick?: () => void
  imageOnly?: boolean
}

export default function AdCard({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  badgeText = 'Announcement',
  buttonText = 'Learn more',
  width = '440px',
  height = '288px',
  onButtonClick,
  imageOnly = false
}: AdCardProps) {
  if (imageOnly && imageSrc) {
    return (
      <div 
        className="relative overflow-hidden rounded-watch-lg cursor-pointer"
        style={{
          width,
          height
        }}
        onClick={onButtonClick}
      >
        <Image 
          src={imageSrc}
          alt={imageAlt || 'Ad'}
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    )
  }

  return (
    <div 
      className="relative flex flex-col justify-between p-watch-6 overflow-hidden rounded-watch-lg bg-gradient-to-br from-watch-secondary to-watch-secondary-dark"
      style={{
        width,
        height
      }}
    >
      <div className="absolute top-4 right-4">
        <Badge variant="orange" size="md">
          {badgeText}
        </Badge>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-watch-4xl font-watch-bold mb-watch-2 tracking-wider">{title}</div>
          <div className="text-white/90 text-watch-base mb-watch-6">{subtitle}</div>
          {imageSrc && (
            <Image 
              src={imageSrc}
              alt={imageAlt || title || 'Ad'}
              objectFit="contain"
              className="w-watch-48 h-auto mx-auto"
            />
          )}
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button 
          variant="secondary" 
          size="sm"
          icon={ArrowRight}
          iconPosition="right"
          radius="full"
          className="px-watch-6"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
