interface Props {
  isActive: boolean
  onClick: () => void
  index: number
}

export default function CarouselIndicator({
  isActive,
  onClick,
  index,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`h-2 rounded-full transition-all ${
        isActive
          ? 'bg-watch-primary w-6'
          : 'bg-gray-300 w-2 hover:bg-gray-400'
      }`}
      aria-label={`Go to slide ${index + 1}`}
    />
  )
}
