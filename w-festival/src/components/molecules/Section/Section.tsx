import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  background?: string
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export default function Section({ 
  children, 
  background,
  padding = 'md',
  className = '' 
}: SectionProps) {
  const paddingClasses = {
    none: '',
    sm: 'py-watch-4',
    md: 'py-watch-8',
    lg: 'py-watch-12',
    xl: 'py-watch-16'
  }

  const bgClass = background ? `bg-${background}` : ''

  return (
    <section 
      className={`${paddingClasses[padding]} ${bgClass} ${className}`}
    >
      {children}
    </section>
  )
}
