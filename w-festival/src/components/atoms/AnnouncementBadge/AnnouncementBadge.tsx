interface AnnouncementBadgeProps {
  text?: string
  className?: string
}

export default function AnnouncementBadge({ 
  text = 'Announcement',
  className = ''
}: AnnouncementBadgeProps) {
  return (
    <div 
      className={`flex items-center gap-1 px-watch-2 py-1 rounded-3xl text-white text-xs font-semibold ${className}`}
      style={{ backgroundColor: '#E96744' }}
      role="status"
      aria-label={text}
    >
      {text}
      <svg 
        width="12" 
        height="12" 
        viewBox="0 0 12 12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M6 4V6.5M6 8.5V8.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  )
}
