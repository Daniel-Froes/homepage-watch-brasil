import { ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
  className?: string
}

export default function Heading({ 
  children, 
  level = 2,
  weight = 'bold',
  className = '' 
}: HeadingProps) {
  const Tag = `h${level}` as React.ElementType

  const weightClasses = {
    normal: 'font-watch-normal',
    medium: 'font-watch-medium',
    semibold: 'font-watch-semibold',
    bold: 'font-watch-bold',
    extrabold: 'font-watch-extrabold'
  }

  const sizeClasses = {
    1: 'text-watch-4xl md:text-watch-5xl lg:text-watch-6xl',
    2: 'text-watch-3xl md:text-watch-4xl lg:text-watch-5xl',
    3: 'text-watch-2xl md:text-watch-3xl lg:text-watch-4xl',
    4: 'text-watch-xl md:text-watch-2xl',
    5: 'text-watch-lg md:text-watch-xl',
    6: 'text-watch-base md:text-watch-lg'
  }

  return (
    <Tag className={`${weightClasses[weight]} ${sizeClasses[level]} ${className}`}>
      {children}
    </Tag>
  )
}
