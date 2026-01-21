'use client'

import { useEffect, useRef } from 'react'
import NavItem from '../../molecules/NavItem/NavItem'

interface NavItemType {
  href: string
  label: string
  icon?: React.ReactNode
  isActive?: boolean
  hasDropdown?: boolean
}

interface MobileMenuProps {
  isOpen: boolean
  items: NavItemType[]
  onClose: () => void
  className?: string
}

export default function MobileMenu({ 
  isOpen, 
  items, 
  onClose, 
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
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-watch-overlay-dark backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div 
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-watch-80 max-w-[85vw] bg-watch-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${className}`}
      >
        <nav className="flex flex-col p-watch-6 pt-watch-20 space-y-watch-2">
          {items.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isActive={item.isActive}
              hasDropdown={item.hasDropdown}
              onClick={onClose}
              className="w-full text-left justify-start px-watch-4 py-watch-3 text-watch-base"
            />
          ))}
        </nav>
      </div>
    </>
  )
}