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
    image: '/tesla.png',
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
  }
]
