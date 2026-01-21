import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface DropdownItem {
  label: string
  href: string
}

interface NavItemProps {
  href: string
  label: string
  icon?: ReactNode
  isActive?: boolean
  hasDropdown?: boolean
  dropdownItems?: DropdownItem[]
  onClick?: () => void
  className?: string
}

export default function NavItem({ 
  href, 
  label,
  icon, 
  isActive = false,
  hasDropdown = false,
  dropdownItems = [],
  onClick, 
  className = '' 
}: NavItemProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  
  const baseClasses = 'flex items-center gap-watch-2 px-watch-4 py-watch-2 font-watch-medium transition-colors duration-200 rounded-watch-md focus:outline-none focus:ring-2 focus:ring-watch-white-20'
  const typographyClasses = 'text-[16px] leading-[24px] tracking-[-0.02em]'
  const activeClasses = isActive 
    ? 'text-watch-text-white' 
    : 'text-watch-text-secondary hover:text-watch-text-white'

  if (hasDropdown && dropdownItems.length > 0) {
    return (
      <div 
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <Link 
          href={href} 
          onClick={onClick}
          className={`${baseClasses} ${typographyClasses} ${activeClasses} ${className}`}
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
        >
          {icon && <span className="w-watch-4 h-watch-4">{icon}</span>}
          <span>{label}</span>
          <ChevronDown size={16} className="ml-watch-1" />
        </Link>
        
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-watch-2 bg-watch-bg-surface-alt border border-watch-border rounded-watch-md shadow-lg min-w-[200px] py-watch-2 z-50">
            {dropdownItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-watch-4 py-watch-2 text-watch-text-secondary hover:text-watch-text-white hover:bg-watch-bg-secondary transition-colors"
                style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }
    
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`${baseClasses} ${typographyClasses} ${activeClasses} ${className}`}
      style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
    >
      {icon && <span className="w-watch-4 h-watch-4">{icon}</span>}
      <span>{label}</span>
      {hasDropdown && <ChevronDown size={16} className="ml-watch-1" />}
    </Link>
  )
}