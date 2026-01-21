import { Menu, X } from 'lucide-react'
import IconButton from '../../atoms/IconButton/IconButton'

interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export default function HamburgerButton({ 
  isOpen, 
  onClick, 
  className = '' 
}: HamburgerButtonProps) {
  return (
    <IconButton
      onClick={onClick}
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={isOpen}
      className={`lg:hidden ${className}`}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </IconButton>
  )
}