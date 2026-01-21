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
  xs: 'text-xs',
  sm: 'text-sm', 
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  hero: 'text-[32px] leading-[120%] tracking-[-2%]'
}

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold font-[700]',
  extrabold: 'font-extrabold'
}

const colorClasses = {
  white: 'text-white',
  black: 'text-black',
  gray: 'text-gray-400',
  red: 'text-red-600',
  orange: 'text-orange-600'
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