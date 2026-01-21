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
}

const variantClasses = {
  primary: 'bg-red-600 text-white hover:bg-red-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  ghost: 'text-white/80 hover:text-white hover:bg-white/10',
  orange: 'bg-orange-600 text-white hover:bg-orange-700'
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
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
  type = 'button'
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
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
        <IconComponent size={iconSize} className="mr-2" />
      )}
      {children}
      {IconComponent && iconPosition === 'right' && (
        <IconComponent size={iconSize} className="ml-2" />
      )}
    </button>
  )
}