import Link from 'next/link'
import Image from 'next/image'

interface SocialLink {
  icon: string
  href: string
  label: string
  hoverOpacity?: string
}

interface SocialLinksProps {
  className?: string
}

const socialLinks: SocialLink[] = [
  { icon: '/logoyoutube.png', href: 'https://youtube.com', label: 'YouTube', hoverOpacity: 'hover:opacity-80' },
  { icon: '/logolinkedin.png', href: 'https://linkedin.com', label: 'LinkedIn', hoverOpacity: 'hover:opacity-80' },
  { icon: '/logoinstagram.png', href: 'https://instagram.com', label: 'Instagram', hoverOpacity: 'hover:opacity-80' },
  { icon: '/Llogofacebook.png', href: 'https://facebook.com', label: 'Facebook', hoverOpacity: 'hover:opacity-80' },
  { icon: '/logotiktok.png', href: 'https://tiktok.com', label: 'TikTok', hoverOpacity: 'hover:opacity-80' },
  { icon: '/logotwiter.png', href: 'https://twitter.com', label: 'Twitter', hoverOpacity: 'hover:opacity-80' }
]

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <nav className={`flex items-center gap-watch-6 ${className}`} aria-label="Social media links">
      {socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-opacity duration-200 ${social.hoverOpacity}`}
          aria-label={social.label}
        >
          <Image
            src={social.icon}
            alt={social.label}
            width={24}
            height={24}
            loading="lazy"
            className="object-none"
          />
        </Link>
      ))}
    </nav>
  )
}
