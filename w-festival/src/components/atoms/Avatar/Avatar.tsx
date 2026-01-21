import Image from 'next/image'

interface AvatarProps {
  src?: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Avatar({ 
  src, 
  alt, 
  size = 'md', 
  className = '' 
}: AvatarProps) {
  const sizes = {
    sm: 'h-watch-8 w-watch-8',
    md: 'h-watch-10 w-watch-10',
    lg: 'h-watch-12 w-watch-12'
  }
  
  const baseClasses = 'rounded-watch-full flex items-center justify-center overflow-hidden'
  const defaultBgColor = 'bg-[#E87E5F]'
  
  if (src) {
    return (
      <div className={`${baseClasses} ${sizes[size]} ${className || defaultBgColor}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    )
  }
  
  const initials = alt
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('')
  
  return (
    <div className={`${baseClasses} ${sizes[size]} ${className || defaultBgColor}`}>
      <span className="text-watch-sm font-watch-semibold text-white">
        {initials}
      </span>
    </div>
  )
}