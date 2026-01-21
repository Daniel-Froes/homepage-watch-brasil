'use client'

import { useState } from 'react'
import { Home, Radio, AudioLines, SparklesIcon } from 'lucide-react'
import Logo from '../../atoms/Logo/Logo'
import DesktopNav from '../DesktopNav/DesktopNav'
import MobileMenu from '../MobileMenu/MobileMenu'
import HamburgerButton from '../../molecules/HamburgerButton/HamburgerButton'
import UserProfile from '../../molecules/UserProfile/UserProfile'

interface NavItemType {
  href: string
  label: string
  icon?: React.ReactNode
  isActive?: boolean
  hasDropdown?: boolean
}

interface HeaderProps {
  logoSrc: string
  logoAlt: string
  navItems?: NavItemType[]
  className?: string
}

const defaultNavItems: NavItemType[] = [
  { href: '/', label: 'Home', icon: <Home size={16} />, isActive: true },
  { href: '/live', label: 'Live', icon: <Radio size={16} /> },
  { href: '/musical-styles', label: 'Musical Styles', icon: <AudioLines size={16} /> },
  { href: '/exclusive-content', label: 'Exclusive Content', icon: <SparklesIcon size={16} />, hasDropdown: true }
]

export default function Header({ 
  logoSrc, 
  logoAlt, 
  navItems = defaultNavItems,
  className = '' 
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }
  
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-30 ${className}`} 
        style={{
          background: `
            linear-gradient(180deg, #2B2B2E 0%, rgba(43, 43, 46, 0.6) 54.69%, rgba(43, 43, 46, 0) 100%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))
          `
        }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20 pt-6">
            <div className="flex items-center space-x-8">

              <div className="mb-5">
                <Logo 
                  src={logoSrc} 
                  alt={logoAlt}
                  width={160}
                  height={47}
                />
              </div>

              <DesktopNav items={navItems} />
            </div>
            
            <div className="hidden lg:flex items-center space-x-2">
              <UserProfile 
                name="Peter Parker"
                avatarColor="bg-orange-500"
                showSettings={true}
              />
            </div>
            
            <HamburgerButton 
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        items={navItems}
        onClose={closeMobileMenu}
      />
      
      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  )
}