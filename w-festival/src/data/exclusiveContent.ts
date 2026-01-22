export interface ExclusiveContent {
  id: string
  title: string
  subtitle: string
  image: string
  cta?: {
    text: string
    href?: string
  }
}

export const exclusiveContent: ExclusiveContent[] = [
  {
    id: 'backstage',
    title: 'Back Stage',
    subtitle: 'Festival',
    image: '/ironmaiden.png'
  },
  {
    id: 'interviews',
    title: 'Interviews',
    subtitle: 'Festival',
    image: '/dualipa.png'
  },
  {
    id: 'nike-exclusive',
    title: 'Nike Air Max 90 Futura',
    subtitle: 'Exclusive Product',
    image: '/airmax.jpg',
    cta: {
      text: 'Learn more',
      href: '#'
    }
  },
  {
    id: 'exclusive-4',
    title: 'Behind The Scenes',
    subtitle: 'Festival',
    image: '/maneskin.png'
  },
  {
    id: 'exclusive-5',
    title: 'Artist Spotlight',
    subtitle: 'Festival',
    image: '/ritaora.png'
  },
  {
    id: 'exclusive-6',
    title: 'VIP Access',
    subtitle: 'Festival',
    image: '/alok.png'
  },
  {
    id: 'exclusive-7',
    title: 'Meet & Greet',
    subtitle: 'Festival',
    image: '/colplay.png'
  },
  {
    id: 'exclusive-8',
    title: 'Soundcheck Sessions',
    subtitle: 'Festival',
    image: '/offsprint.png'
  },
  {
    id: 'exclusive-9',
    title: 'Documentary',
    subtitle: 'Festival',
    image: '/marshmallow.png'
  },
  {
    id: 'exclusive-10',
    title: 'Photo Gallery',
    subtitle: 'Festival',
    image: '/dreamtheate.png'
  },
  {
    id: 'exclusive-11',
    title: 'Back Stage',
    subtitle: 'Festival',
    image: '/ironmaiden.png'
  },
  {
    id: 'exclusive-12',
    title: 'Exclusive Merch',
    subtitle: 'Festival',
    image: '/racionais.png'
  }
]
