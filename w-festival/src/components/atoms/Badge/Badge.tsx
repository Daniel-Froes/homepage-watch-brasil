import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'orange' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Badge({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '' 
}: BadgeProps) {
  const variants = {
    primary: 'bg-blue-500 text-watch-text-white',
    secondary: 'bg-watch-gray-600 text-watch-text-white',
    success: 'bg-green-500 text-watch-text-white',
    warning: 'bg-yellow-500 text-watch-text-black',
    error: 'bg-watch-secondary text-watch-text-white',
    orange: 'bg-watch-primary text-watch-text-white',
    dark: 'bg-black/60 backdrop-blur-sm text-white'
  }

  const sizes = {
    sm: 'text-watch-xs px-watch-2 py-watch-0.5',
    md: 'text-watch-xs px-watch-3 py-watch-1.5',
    lg: 'text-watch-sm px-watch-4 py-watch-2'
  }

  return (
    <span 
      className={`inline-flex items-center justify-center rounded-watch-full font-watch-medium ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  )
}
