import Image from 'next/image'

interface LogoProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export default function Logo({ 
  src, 
  alt, 
  width = 120, 
  height = 40, 
  className = '' 
}: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </div>
  )
}