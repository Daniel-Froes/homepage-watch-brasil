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
    background: 'linear-gradient(135deg, var(--color-watch-blue-dark) 0%, var(--color-watch-blue) 100%)',
    textColor: 'white',
    image: '/ironmaiden.png',
    svgSrc: '/rock.svg'
  },
  {
    id: 'pop',
    title: 'Pop',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, var(--color-watch-green-dark) 0%, var(--color-watch-green) 100%)',
    textColor: 'white',
    image: '/dualipa.png',
    svgSrc: '/pop.svg'
  },
  {
    id: 'funk',
    title: 'Funk',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, var(--color-watch-purple-dark) 0%, var(--color-watch-purple) 100%)',
    textColor: 'white',
    image: '/racionais.png',
    svgSrc: '/funk.svg'
  },
  {
    id: 'jazz',
    title: 'Jazz',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, var(--color-watch-amber-dark) 0%, var(--color-watch-amber) 100%)',
    textColor: 'white',
    image: '/colplay.png'
  },
  {
    id: 'rock-2',
    title: 'Rock',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, var(--color-watch-blue-dark) 0%, var(--color-watch-blue) 100%)',
    textColor: 'white',
    image: '/offsprint.png',
    svgSrc: '/rock.svg'
  },
  {
    id: 'pop-2',
    title: 'Pop',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, var(--color-watch-green-dark) 0%, var(--color-watch-green) 100%)',
    textColor: 'white',
    image: '/ritaora.png',
    svgSrc: '/pop.svg'
  },
  {
    id: 'edm',
    title: 'EDM',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, var(--color-watch-secondary) 0%, var(--color-watch-secondary-light) 100%)',
    textColor: 'white',
    image: '/marshmallow.png'
  },
  {
    id: 'funk-2',
    title: 'Funk',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, var(--color-watch-purple-dark) 0%, var(--color-watch-purple) 100%)',
    textColor: 'white',
    image: '/racionais.png',
    svgSrc: '/funk.svg'
  },
  {
    id: 'indie',
    title: 'Indie',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, var(--color-watch-teal-dark) 0%, var(--color-watch-teal) 100%)',
    textColor: 'white',
    image: '/maneskin.png'
  },
  {
    id: 'metal',
    title: 'Metal',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, var(--color-watch-violet-dark) 0%, var(--color-watch-violet) 100%)',
    textColor: 'white',
    image: '/dreamtheate.png'
  },
  {
    id: 'alternative',
    title: 'Alternative',
    subtitle: 'Festival',
    background: 'linear-gradient(135deg, var(--color-watch-pink-dark) 0%, var(--color-watch-pink) 100%)',
    textColor: 'white',
    image: '/colplay.png'
  }
]
