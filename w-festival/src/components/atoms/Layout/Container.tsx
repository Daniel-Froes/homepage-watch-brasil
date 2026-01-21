import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`w-full max-w-165 lg:max-w-250 xl:max-w-332 2xl:max-w-464 mx-auto px-watch-6 md:px-0 ${className}`}>
      {children}
    </div>
  )
}
