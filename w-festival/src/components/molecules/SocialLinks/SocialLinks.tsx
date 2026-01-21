import Link from 'next/link'
import { Youtube, Linkedin, Instagram, Facebook, Music, Twitter } from 'lucide-react'

interface SocialLink {
  icon: React.ComponentType<{ size?: number }>
  href: string
  label: string
  color: string
}

interface SocialLinksProps {
  className?: string
}

const socialLinks: SocialLink[] = [
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

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-watch-6 ${className}`}>
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
  )
}
