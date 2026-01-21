import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`container mx-auto px-watch-4 md:px-watch-8 ${className}`}>
      {children}
    </div>
  )
}
