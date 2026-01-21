import { ReactNode } from 'react'

export interface Ad {
  ctaText: ReactNode
  subtitle: ReactNode
  title: ReactNode
  id: string
  image: string
}

export const ads: Ad[] = [
  {
    id: 'heineken',
    image: '/heineken.svg',
    title: 'Heineken',
    subtitle: 'Patrocinador Oficial',
    ctaText: 'Saiba Mais'
  },
  {
    id: 'cocacola',
    image: '/cocacola.svg',
    title: 'Coca-Cola',
    subtitle: 'Bebida Oficial',
    ctaText: 'Confira'
  },
  {
    id: 'tesla',
    image: '/tesla.png',
    title: 'Tesla',
    subtitle: 'Tecnologia & Inovação',
    ctaText: 'Explore'
  }
]
