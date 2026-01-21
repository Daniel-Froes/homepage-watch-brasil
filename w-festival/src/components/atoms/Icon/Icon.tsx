import React from 'react'
import { LucideIcon } from 'lucide-react'

interface IconProps {
  icon: LucideIcon
  size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  color?: 'white' | 'gray' | 'red' | 'orange' | 'black'
}

const sizeMap = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40
}

const colorMap = {
  white: 'text-watch-text-white',
  gray: 'text-watch-gray-400',
  red: 'text-watch-secondary',
  orange: 'text-watch-primary',
  black: 'text-watch-text-black'
}

export default function Icon({ 
  icon: IconComponent, 
  size = 'md', 
  className = '', 
  color = 'white' 
}: IconProps) {
  const iconSize = typeof size === 'string' ? sizeMap[size] : size
  const colorClass = colorMap[color]
  
  return (
    <IconComponent 
      size={iconSize} 
      className={`${colorClass} ${className}`}
    />
  )
}