import Link from 'next/link'

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
    <div className={`flex flex-col sm:flex-row gap-watch-6 ${className}`}>
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
  )
}
