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
      <header className={`fixed top-0 left-0 right-0 z-30 bg-gradient-to-b from-watch-bg-surface-alt via-watch-bg-surface-alt/60 via-55% to-transparent ${className}`}>
        <div className="absolute inset-0 bg-watch-overlay-light"></div>
        <div className="max-w-332 2xl:max-w-408 mx-auto relative z-10">
          <div className="flex items-center justify-between h-watch-20 pt-watch-6">
            <div className="flex items-center space-x-watch-8">

              <div>
                <Logo 
                  src={logoSrc} 
                  alt={logoAlt}
                  width={160}
                  height={47}
                />
              </div>

              <DesktopNav items={navItems} />
            </div>
            
            <div className="hidden lg:flex items-center space-x-watch-2">
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
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        items={navItems}
        onClose={closeMobileMenu}
        logoSrc={logoSrc}
        logoAlt={logoAlt}
      />
      
      <div className="h-watch-18" />
    </>
  )
}