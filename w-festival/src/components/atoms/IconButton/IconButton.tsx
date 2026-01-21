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
  const baseClasses = 'inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent'
  
  const variants = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    ghost: 'text-white hover:bg-white/10'
  }
  
  const sizes = {
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base', 
    lg: 'h-12 w-12 text-lg'
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