'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import NavItem from '../../molecules/NavItem/NavItem'
import Logo from '../../atoms/Logo/Logo'

interface NavItemType {
  href: string
  label: string
  icon?: React.ReactNode
  isActive?: boolean
  hasDropdown?: boolean
  dropdownItems?: Array<{ label: string; href: string }>
}

interface MobileMenuProps {
  isOpen: boolean
  items: NavItemType[]
  onClose: () => void
  logoSrc?: string
  logoAlt?: string
  className?: string
}

export default function MobileMenu({ 
  isOpen, 
  items, 
  onClose,
  logoSrc = '/logo.svg',
  logoAlt = 'Watch',
  className = '' 
}: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])
  
  if (!isOpen) return null
  
  return (
    <>
      <div 
        ref={menuRef}
        className={`fixed top-0 left-0 w-full h-[50vh] bg-watch-bg-primary shadow-xl z-50 transform transition-all duration-700 ease-out md:hidden flex flex-col ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } ${className}`}
      >
        <div className="sticky top-0 flex items-center justify-between px-watch-2 py-watch-6 border-b border-white/10 bg-watch-bg-primary">
          <Logo 
            src={logoSrc} 
            alt={logoAlt}
            width={160}
            height={47}
          />
          <button
            onClick={onClose}
            className="p-watch-2 hover:bg-white/10 rounded transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="text-watch-orange" />
          </button>
        </div>

        <nav className="flex flex-col p-watch-6 space-y-watch-2 overflow-y-auto">
          {items.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isActive={item.isActive}
              hasDropdown={item.hasDropdown}
              dropdownItems={item.dropdownItems}
              onClick={onClose}
              isMobile={true}
              className="w-full text-left justify-start px-watch-4 py-watch-3 text-watch-base"
            />
          ))}
        </nav>
      </div>
    </>
  )
}