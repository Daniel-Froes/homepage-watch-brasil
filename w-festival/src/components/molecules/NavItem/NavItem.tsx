import Link from 'next/link'
import { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

interface NavItemProps {
  href: string
  label: string
  icon?: ReactNode
  isActive?: boolean
  hasDropdown?: boolean
  onClick?: () => void
  className?: string
}

export default function NavItem({ 
  href, 
  label,
  icon, 
  isActive = false,
  hasDropdown = false, 
  onClick, 
  className = '' 
}: NavItemProps) {
  const baseClasses = 'flex items-center gap-2 px-4 py-2 font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20'
  const typographyClasses = 'text-[16px] leading-[24px] tracking-[-0.02em]'
  const activeClasses = isActive 
    ? 'text-white' 
    : 'text-gray-300 hover:text-white'
    
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`${baseClasses} ${typographyClasses} ${activeClasses} ${className}`}
      style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      <span>{label}</span>
      {hasDropdown && <ChevronDown size={16} className="ml-1" />}
    </Link>
  )
}