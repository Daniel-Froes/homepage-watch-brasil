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
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  }
  
  const baseClasses = 'rounded-full bg-gray-600 flex items-center justify-center overflow-hidden'
  
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
      <span className="text-sm font-medium text-white">
        {alt.charAt(0).toUpperCase()}
      </span>
    </div>
  )
}