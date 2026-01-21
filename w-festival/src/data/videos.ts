export interface VideoData {
  id: string
  videoSrc: string
  title: string
  subtitle: string
  status: string
  location: string
}

export interface ShowData {
  id: string
  name: string
  image: string
  stage: string
  time: string
}

export interface LiveShowData {
  id: string
  artist: string
  image: string
  stage: string
  time: string
  status: string
}

export const featuredVideo: VideoData = {
  id: 'avril-lavigne',
  videoSrc: '91ua5WzV58g',
  title: 'Avril Lavigne',
  subtitle: 'Sunset',
  status: 'LIVE',
  location: 'Singer Camera'
}

export const yesterdayShows: ShowData[] = [
  {
    id: '1',
    name: 'Marshmello',
    image: '/marshmallow.png',
    stage: 'Stage Sunset',
    time: 'dJ.rum.ua - 00:00h'
  },
  {
    id: '2',
    name: 'Alok',
    image: '/alok.png',
    stage: 'Stage World',
    time: 'dJ.rum.ua - 00:00h'
  },
  {
    id: '3',
    name: 'Rita Ora',
    image: '/ritaora.png',
    stage: 'Stage Fiesta',
    time: 'dJ.rum.ua - 00:00h'
  },
  {
    id: '4',
    name: 'Dream Theatre',
    image: '/dreamtheate.png',
    stage: 'Stage Sunset',
    time: 'dJ.rum.ua - 00:00h'
  },
  {
    id: '5',
    name: 'Dua Lipa',
    image: '/dualipa.png',
    stage: 'Stage World',
    time: 'dJ.rum.ua - 00:00h'
  },
  {
    id: '6',
    name: 'Måneskin',
    image: '/maneskin.png',
    stage: 'Stage Fiesta',
    time: 'dJ.rum.ua - 00:00h'
  }
]

export const inLiveShows: LiveShowData[] = [
  {
    id: 'live-1',
    artist: 'Iron Maiden',
    image: '/ironmaiden.png',
    stage: 'Stage Sunset',
    time: 'dd.mm.aa - 00:00 h',
    status: 'Live'
  },
  {
    id: 'live-2',
    artist: 'Dua Lipa',
    image: '/dualipa.png',
    stage: 'Stage World',
    time: 'dd.mm.aa - 00:00 h',
    status: 'Live'
  },
  {
    id: 'live-3',
    artist: 'Måneskin',
    image: '/maneskin.png',
    stage: 'Stage Fiesta',
    time: 'dd.mm.aa - 00:00 h',
    status: 'Live'
  }
]
