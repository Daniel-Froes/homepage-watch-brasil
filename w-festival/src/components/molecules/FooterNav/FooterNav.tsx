import Link from 'next/link'
import Text from '../../atoms/Text'

interface FooterLink {
  label: string
  href: string
}

interface FooterNavProps {
  className?: string
}

const footerLinks: FooterLink[] = [
  { label: 'About Labs Festival', href: '#' },
  { label: 'Terms of use and privacy', href: '#' },
  { label: 'Send feedback', href: '#' }
]

export default function FooterNav({ className = '' }: FooterNavProps) {
  return (
    <nav className={`flex flex-col sm:flex-row gap-watch-6 ${className}`} aria-label="Footer navigation">
      {footerLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-watch-gray-400 hover:text-white transition-colors duration-200"
        >
          <Text size="sm" className="text-inherit">
            {link.label}
          </Text>
        </Link>
      ))}
    </nav>
  )
}
