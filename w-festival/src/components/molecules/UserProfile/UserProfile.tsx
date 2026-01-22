'use client'

import { useState, useRef, useEffect } from 'react'
import { Settings, User } from 'lucide-react'

interface UserProfileProps {
  name: string
  className?: string
}

export default function UserProfile({ 
  name, 
  className = '' 
}: UserProfileProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-watch-2 hover:opacity-80 transition-opacity cursor-pointer"
      >
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
          <User size={18} className="text-white" />
        </div>
        <div className="flex items-center gap-watch-2">
          <span className="text-watch-sm font-watch-medium text-watch-text-white">
            {name}
          </span>
          <Settings size={18} className="text-watch-text-white" />
        </div>
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-watch-bg-surface rounded-lg shadow-lg overflow-hidden">
          <a
            href="#profile"
            className="block px-4 py-3 text-watch-sm text-watch-text-white hover:bg-watch-bg-surface-alt transition-colors"
            onClick={() => setIsDropdownOpen(false)}
          >
            My Profile
          </a>
          <a
            href="#help"
            className="block px-4 py-3 text-watch-sm text-watch-text-white hover:bg-watch-bg-surface-alt transition-colors"
            onClick={() => setIsDropdownOpen(false)}
          >
            Help
          </a>
        </div>
      )}
    </div>
  )
}