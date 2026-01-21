import { ReactNode, ButtonHTMLAttributes } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  'aria-label': string
}

export default function IconButton({ 
  children, 
  variant = 'ghost', 
  size = 'md', 
  className = '', 
  ...props 
}: IconButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-watch-md transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent'
  
  const variants = {
    primary: 'bg-watch-secondary text-watch-text-white hover:bg-watch-secondary-dark',
    ghost: 'text-watch-text-white hover:bg-watch-white-10'
  }
  
  const sizes = {
    sm: 'h-watch-8 w-watch-8 text-watch-sm',
    md: 'h-watch-10 w-watch-10 text-watch-base', 
    lg: 'h-watch-12 w-watch-12 text-watch-lg'
  }
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}