import NavItem from '../../molecules/NavItem/NavItem'
import { ReactNode } from 'react'

interface NavItemType {
  href: string
  label: string
  icon?: ReactNode
  isActive?: boolean
  hasDropdown?: boolean
}

interface DesktopNavProps {
  items: NavItemType[]
  className?: string
}

export default function DesktopNav({ items, className = '' }: DesktopNavProps) {
  return (
    <nav className={`hidden lg:flex items-center space-x-watch-2 ${className}`}>
      {items.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          label={item.label}
          icon={item.icon}
          isActive={item.isActive}
          hasDropdown={item.hasDropdown}
        />
      ))}
    </nav>
  )
}