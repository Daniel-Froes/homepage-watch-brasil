import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`w-[calc(100%-112px)] md:w-[calc(100%-80px)] lg:w-[calc(100%-112px)] mx-auto ${className}`}>
      {children}
    </div>
  )
}
