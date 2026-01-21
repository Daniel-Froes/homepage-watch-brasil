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
    id: 'heineken-1',
    image: '/heineken.png',
    title: 'Heineken',
    subtitle: 'Patrocinador Oficial',
    ctaText: 'Saiba Mais'
  },
  {
    id: 'heineken-2',
    image: '/heineken.png',
    title: 'Heineken',
    subtitle: 'Patrocinador Oficial',
    ctaText: 'Saiba Mais'
  },
  {
    id: 'heineken-3',
    image: '/heineken.png',
    title: 'Heineken',
    subtitle: 'Patrocinador Oficial',
    ctaText: 'Saiba Mais'
  }
]
