'use client'

import Link from 'next/link'
import { ReactNode, useState, useEffect, useRef } from 'react'
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
  isMobile?: boolean
}

export default function NavItem({ 
  href, 
  label,
  icon, 
  isActive = false,
  hasDropdown = false,
  dropdownItems = [],
  onClick, 
  className = '',
  isMobile = false
}: NavItemProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  const baseClasses = 'flex items-center gap-watch-2 px-watch-4 py-watch-2 font-watch-medium transition-colors duration-200 rounded-watch-md focus:outline-none focus:ring-2 focus:ring-watch-white-20'
  const typographyClasses = 'text-[16px] leading-[24px] tracking-[-0.02em]'
  const activeClasses = isActive 
    ? 'text-watch-text-white' 
    : 'text-watch-text-secondary hover:text-watch-text-white'

  useEffect(() => {
    if (!isMobile) return

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen, isMobile])

  const handleToggleDropdown = (e: React.MouseEvent) => {
    if (isMobile && hasDropdown && dropdownItems.length > 0) {
      e.preventDefault()
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  if (hasDropdown && dropdownItems.length > 0) {
    if (isMobile) {
      return (
        <div ref={dropdownRef} className="w-full">
          <button
            onClick={handleToggleDropdown}
            className={`${baseClasses} ${typographyClasses} ${activeClasses} ${className} w-full justify-between`}
            style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}
          >
            <div className="flex items-center gap-watch-2">
              {icon && <span className="w-watch-4 h-watch-4">{icon}</span>}
              <span>{label}</span>
            </div>
            <ChevronDown 
              size={16} 
              className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>
          
          {isDropdownOpen && (
            <div className="mt-watch-2 ml-watch-8 space-y-watch-1">
              {dropdownItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={onClick}
                  className="block px-watch-4 py-watch-2 text-watch-text-secondary hover:text-watch-text-white hover:bg-watch-white-10 transition-colors rounded-watch-md text-sm"
                  style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
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
      <div 
        ref={dropdownRef}
        className="relative z-50"
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
          <div className="absolute top-full left-0 mt-watch-2 bg-watch-bg-primary border-2 border-watch-primary rounded-watch-lg shadow-2xl min-w-50 py-watch-3 z-100 backdrop-blur-sm">
            {dropdownItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={onClick}
                className="block px-watch-4 py-watch-3 text-watch-text-white hover:text-watch-primary hover:bg-watch-white-10 transition-colors text-sm font-watch-medium"
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