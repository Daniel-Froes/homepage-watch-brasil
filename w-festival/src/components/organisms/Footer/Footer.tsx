'use client'

import Logo from '../../atoms/Logo/Logo'
import { Youtube, Linkedin, Instagram, Facebook, Music, Twitter } from 'lucide-react'
import Link from 'next/link'

interface FooterProps {
  logoSrc: string
  logoAlt: string
  className?: string
}

const socialLinks = [
  {
    icon: Youtube,
    href: 'https://youtube.com',
    label: 'YouTube',
    color: 'hover:text-red-500'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    color: 'hover:text-blue-500'
  },
  {
    icon: Instagram,
    href: 'https://instagram.com',
    label: 'Instagram',
    color: 'hover:text-pink-500'
  },
  {
    icon: Facebook,
    href: 'https://facebook.com',
    label: 'Facebook',
    color: 'hover:text-blue-600'
  },
  {
    icon: Music,
    href: 'https://tiktok.com',
    label: 'TikTok',
    color: 'hover:text-white'
  },
  {
    icon: Twitter,
    href: 'https://twitter.com',
    label: 'Twitter',
    color: 'hover:text-blue-400'
  }
]

const footerLinks = [
  { label: 'About Labs Festival', href: '#' },
  { label: 'Terms of use and privacy', href: '#' },
  { label: 'Send feedback', href: '#' }
]

export default function Footer({ 
  logoSrc, 
  logoAlt, 
  className = '' 
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`bg-watch-bg-surface-alt py-watch-12 ${className}`}>
      <div className="max-w-332 2xl:max-w-408 mx-auto px-watch-6">
        {/* Top Section - Logo and Social Links */}
        <div className="mb-watch-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-watch-8">
            {/* Logo */}
            <div className="mb-watch-6 md:mb-0">
              <Logo 
                src={logoSrc} 
                alt={logoAlt}
                width={160}
                height={47}
              />
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-watch-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-colors duration-200 ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Download Badges */}
          <div className="flex flex-col sm:flex-row gap-watch-4">
            <Link
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-opacity hover:opacity-80"
            >
              <img 
                src="/images/google-play-badge.png" 
                alt="Get it on Google Play"
                className="h-watch-8 object-contain"
              />
            </Link>
            <Link
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-opacity hover:opacity-80"
            >
              <img 
                src="/images/app-store-badge.png" 
                alt="Download on App Store"
                className="h-watch-8 object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-watch-6" />

        {/* Bottom Section - Links and Copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row gap-watch-6 mb-watch-6 md:mb-0">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-400 text-watch-3 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-watch-3">
            © {currentYear} Watch Brasil. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}
