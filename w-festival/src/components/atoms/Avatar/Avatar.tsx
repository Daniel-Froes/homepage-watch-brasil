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
  
  const baseClasses = 'rounded-watch-full bg-watch-gray-600 flex items-center justify-center overflow-hidden'
  
  if (src) {
    return (
      <div className={`${baseClasses} ${sizes[size]} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    )
  }
  
  return (
    <div className={`${baseClasses} ${sizes[size]} ${className}`}>
      <span className="text-watch-sm font-watch-medium text-watch-text-white">
        {alt.charAt(0).toUpperCase()}
      </span>
    </div>
  )
}