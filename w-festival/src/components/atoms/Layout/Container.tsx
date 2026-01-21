import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`w-full max-w-332 2xl:max-w-408 mx-auto ${className}`}>
      {children}
    </div>
  )
}
