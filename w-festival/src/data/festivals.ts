export interface Festival {
  id: string
  title: string
  subtitle: string
  background: string
  textColor: string
  image?: string
  svgSrc?: string
  isWide?: boolean
  imageSrc?: string
}

export const festivals: Festival[] = [
  {
    id: 'rock',
    title: 'Rock',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    textColor: 'white',
    image: '/ironmaiden.png',
    svgSrc: '/rock.svg'
  },
  {
    id: 'pop',
    title: 'Pop',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, #166534 0%, #22c55e 100%)',
    textColor: 'white',
    image: '/dualipa.png',
    svgSrc: '/pop.svg'
  },
  {
    id: 'airpods',
    title: 'AirPods Pro',
    subtitle: 'buy now',
    background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
    textColor: 'white',
    image: '/tesla.png',
    imageSrc: '/airpod edit.png',
    isWide: true
  },
  {
    id: 'funk',
    title: 'Funk',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, #7e22ce 0%, #a855f7 100%)',
    textColor: 'white',
    image: '/racionais.png',
    svgSrc: '/funk.svg'
  },
  {
    id: 'jazz',
    title: 'Jazz',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)',
    textColor: 'white',
    image: '/colplay.png'
  },
  {
    id: 'rock-2',
    title: 'Rock',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    textColor: 'white',
    image: '/offsprint.png',
    svgSrc: '/rock.svg'
  },
  {
    id: 'pop-2',
    title: 'Pop',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, #166534 0%, #22c55e 100%)',
    textColor: 'white',
    image: '/ritaora.png',
    svgSrc: '/pop.svg'
  },
  {
    id: 'edm',
    title: 'EDM',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
    textColor: 'white',
    image: '/marshmallow.png'
  },
  {
    id: 'funk-2',
    title: 'Funk',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, #7e22ce 0%, #a855f7 100%)',
    textColor: 'white',
    image: '/racionais.png',
    svgSrc: '/funk.svg'
  },
  {
    id: 'indie',
    title: 'Indie',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
    textColor: 'white',
    image: '/maneskin.png'
  },
  {
    id: 'metal',
    title: 'Metal',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)',
    textColor: 'white',
    image: '/dreamtheate.png'
  },
  {
    id: 'alternative',
    title: 'Alternative',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, #be185d 0%, #ec4899 100%)',
    textColor: 'white',
    image: '/colplay.png'
  }
]
