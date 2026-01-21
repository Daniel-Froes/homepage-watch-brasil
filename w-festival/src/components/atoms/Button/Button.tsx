import React from 'react'
import { LucideIcon } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost' | 'orange'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

const variantClasses = {
  primary: 'bg-watch-secondary text-watch-text-white hover:bg-watch-secondary-dark',
  secondary: 'bg-watch-gray-600 text-watch-text-white hover:bg-watch-gray-700',
  ghost: 'text-watch-white-80 hover:text-watch-text-white hover:bg-watch-white-10',
  orange: 'bg-watch-primary text-watch-text-white hover:bg-watch-primary-hover'
}

const sizeClasses = {
  sm: 'px-watch-3 py-watch-1.5 text-watch-sm',
  md: 'px-watch-4 py-watch-2 text-watch-base',
  lg: 'px-watch-6 py-watch-3 text-watch-lg'
}

const radiusClasses = {
  none: 'rounded-watch-none',
  sm: 'rounded-watch-sm',
  md: 'rounded-watch-md',
  lg: 'rounded-watch-lg',
  xl: 'rounded-watch-xl',
  '2xl': 'rounded-watch-2xl',
  full: 'rounded-watch-full'
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: IconComponent,
  iconPosition = 'left',
  disabled = false,
  type = 'button',
  radius = 'lg'
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-watch-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    radiusClasses[radius],
    className
  ].filter(Boolean).join(' ')

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 20 : 18

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {IconComponent && iconPosition === 'left' && (
        <IconComponent size={iconSize} className="mr-watch-2" />
      )}
      {children}
      {IconComponent && iconPosition === 'right' && (
        <IconComponent size={iconSize} className="ml-watch-2" />
      )}
    </button>
  )
}