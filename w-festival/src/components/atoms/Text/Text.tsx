import { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | 'hero'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
  color?: 'white' | 'black' | 'gray' | 'red' | 'orange'
  className?: string
}

const sizeClasses = {
  xs: 'text-watch-xs',
  sm: 'text-watch-sm', 
  md: 'text-watch-base',
  lg: 'text-watch-lg',
  xl: 'text-watch-xl',
  '2xl': 'text-watch-2xl',
  '3xl': 'text-watch-3xl',
  '4xl': 'text-watch-4xl',
  '5xl': 'text-watch-5xl',
  '6xl': 'text-watch-6xl',
  hero: 'text-[32px] leading-[120%] tracking-[-2%]'
}

const weightClasses = {
  normal: 'font-watch-normal',
  medium: 'font-watch-medium',
  semibold: 'font-watch-semibold',
  bold: 'font-watch-bold',
  extrabold: 'font-watch-extrabold'
}

const colorClasses = {
  white: 'text-watch-text-white',
  black: 'text-watch-text-black',
  gray: 'text-watch-gray-400',
  red: 'text-watch-secondary',
  orange: 'text-watch-primary'
}

export default function Text({ 
  children, 
  variant = 'p',
  size = 'md',
  weight = 'normal',
  color = 'white',
  className = ''
}: TextProps) {
  const Component = variant
  
  const classes = [
    'font-roboto',
    sizeClasses[size],
    weightClasses[weight],
    colorClasses[color],
    className
  ].filter(Boolean).join(' ')

  return (
    <Component className={classes}>
      {children}
    </Component>
  )
}