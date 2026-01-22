'use client'

import Logo from '../../atoms/Logo/Logo'
import Container from '../../atoms/Layout/Container'
import SocialLinks from '../../molecules/SocialLinks'
import AppStoreBadges from '../../molecules/AppStoreBadges'
import LegalText from '../../molecules/LegalText'
import FooterNav from '../../molecules/FooterNav'

interface FooterProps {
  logoSrc: string
  logoAlt: string
  className?: string
}

export default function Footer({ 
  logoSrc, 
  logoAlt, 
  className = '' 
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`bg-watch-bg-surface-alt py-watch-12 ${className}`}>
      <Container>
        <div className="mb-watch-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-watch-8">
            <div className="flex-1">
              <LegalText className="mb-watch-6" />
              <SocialLinks />
            </div>

            <div className="flex flex-col items-start lg:items-end gap-watch-6">
              <Logo 
                src={logoSrc} 
                alt={logoAlt}
                width={160}
                height={47}
              />
              <AppStoreBadges />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mb-watch-6" />

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <FooterNav className="mb-watch-6 lg:mb-0" />
          <div className="text-gray-500 text-watch-3">
            © {currentYear} Watch Brasil. All rights reserved
          </div>
        </div>
      </Container>
    </footer>
  )
}
