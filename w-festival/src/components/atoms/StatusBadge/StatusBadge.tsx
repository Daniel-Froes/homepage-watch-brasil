interface Props {
  status: string
  variant?: 'primary' | 'secondary'
}

export default function StatusBadge({ status, variant = 'primary' }: Props) {
  const baseClasses = 'flex items-center gap-1'
  const variantClasses = {
    primary: 'text-red-500',
    secondary: 'text-white',
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <span className="w-2 h-2 rounded-full bg-red-500"></span>
      <span className="text-xs font-medium">{status}</span>
    </div>
  )
}
