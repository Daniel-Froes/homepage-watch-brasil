interface OverlayProps {
  variant?: 'solid' | 'gradient-top' | 'gradient-bottom' | 'gradient-radial'
  opacity?: number
  className?: string
}

export default function Overlay({ 
  variant = 'solid',
  opacity = 0.4,
  className = '' 
}: OverlayProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'solid':
        return `bg-black`
      case 'gradient-top':
        return 'bg-gradient-to-b from-watch-bg-primary via-watch-bg-primary/80 via-30% via-watch-bg-primary/40 via-60% to-transparent'
      case 'gradient-bottom':
        return 'bg-gradient-to-t from-watch-bg-primary via-watch-bg-primary/80 via-30% via-watch-bg-primary/40 via-60% to-transparent'
      case 'gradient-radial':
        return 'bg-gradient-radial from-transparent to-watch-overlay-heavy'
      default:
        return 'bg-black'
    }
  }

  return (
    <div 
      className={`absolute inset-0 ${getVariantClasses()} ${className}`}
      style={variant === 'solid' ? { opacity } : undefined}
    />
  )
}
