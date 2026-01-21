interface VideoPlayerProps {
  videoSrc: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  className?: string
}

export default function VideoPlayer({ 
  videoSrc,
  autoplay = true,
  muted = true,
  loop = true,
  controls = false,
  className = ''
}: VideoPlayerProps) {
  const youtubeParams = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    mute: muted ? '1' : '0',
    loop: loop ? '1' : '0',
    playlist: loop ? videoSrc : '',
    controls: controls ? '1' : '0',
    showinfo: '0',
    rel: '0',
    iv_load_policy: '3',
    modestbranding: '1',
    start: '0'
  })

  return (
    <iframe
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
      src={`https://www.youtube.com/embed/${videoSrc}?${youtubeParams.toString()}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        width: 'max(177.77vh, 100vw)',
        height: 'max(56.25vw, 100vh)',
        pointerEvents: 'none'
      }}
    />
  )
}
