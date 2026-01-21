import Avatar from '../../atoms/Avatar/Avatar'
import IconButton from '../../atoms/IconButton/IconButton'
import { Settings } from 'lucide-react'

interface UserProfileProps {
  name: string
  avatar?: string
  avatarColor?: string
  showSettings?: boolean
  onSettingsClick?: () => void
  className?: string
}

export default function UserProfile({ 
  name, 
  avatar, 
  avatarColor = 'bg-orange-500',
  showSettings = true,
  onSettingsClick,
  className = '' 
}: UserProfileProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center gap-2">
        <Avatar 
          src={avatar}
          alt={name}
          size="sm"
          className={avatarColor}
        />
        <span className="text-sm font-medium text-white">
          {name}
        </span>
      </div>
      
      {showSettings && (
        <IconButton
          onClick={onSettingsClick}
          aria-label="Configurações"
          size="sm"
          variant="ghost"
        >
          <Settings size={18} />
        </IconButton>
      )}
    </div>
  )
}