import Link from 'next/link'
import Image from 'next/image'

interface AppStoreBadgesProps {
  className?: string
}

export default function AppStoreBadges({ className = '' }: AppStoreBadgesProps) {
  return (
    <div className={`flex gap-watch-4 items-center ${className}`}>
      <Link
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Image 
          src="/googleplay.png" 
          alt="Get it on Google Play"
          width={136}
          height={40}
          loading="lazy"
          className="object-contain"
        />
      </Link>
      <Link
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Image 
          src="/appstore.png" 
          alt="Download on App Store"
          width={136}
          height={40}
          loading="lazy"
          className="object-contain"
        />
      </Link>
    </div>
  )
}
