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
  },
  {
    id: '7',
    name: 'Coldplay',
    image: '/colplay.png',
    stage: 'Stage Sunset',
    time: 'dJ.rum.ua - 00:00h'
  },
  {
    id: '8',
    name: 'The Offspring',
    image: '/offsprint.png',
    stage: 'Stage World',
    time: 'dJ.rum.ua - 00:00h'
  },
  {
    id: '9',
    name: 'Iron Maiden',
    image: '/ironmaiden.png',
    stage: 'Stage Sunset',
    time: 'dJ.rum.ua - 00:00h'
  },
  {
    id: '10',
    name: 'Racionais MC\'s',
    image: '/racionais.png',
    stage: 'Stage World',
    time: 'dJ.rum.ua - 00:00h'
  },
  {
    id: '11',
    name: 'Marshmello',
    image: '/marshmallow.png',
    stage: 'Stage Fiesta',
    time: 'dJ.rum.ua - 00:00h'
  },
  {
    id: '12',
    name: 'Alok',
    image: '/alok.png',
    stage: 'Stage World',
    time: 'dJ.rum.ua - 00:00h'
  }
]

export const inLiveShows: LiveShowData[] = [
  {
    id: 'inlive1',
    artist: 'Iron Maiden',
    image: '/inlive1.svg',
    stage: 'Stage Sunset',
    time: 'dd.mm.aa - 00:00 h',
    status: 'Live'
  },
  {
    id: 'inlive2',
    artist: 'Dua Lipa',
    image: '/inlive2.svg',
    stage: 'Stage World',
    time: 'dd.mm.aa - 00:00 h',
    status: 'Live'
  },
  {
    id: 'inlive3',
    artist: 'Måneskin',
    image: '/inlive3.svg',
    stage: 'Stage Fiesta',
    time: 'dd.mm.aa - 00:00 h',
    status: 'Live'
  },
  {
    id: 'live-4',
    artist: 'Coldplay',
    image: '/colplay.png',
    stage: 'Stage Sunset',
    time: 'dd.mm.aa - 00:00 h',
    status: 'Live'
  },
  {
    id: 'live-5',
    artist: 'The Offspring',
    image: '/offsprint.png',
    stage: 'Stage World',
    time: 'dd.mm.aa - 00:00 h',
    status: 'Live'
  },
  {
    id: 'live-6',
    artist: 'Marshmello',
    image: '/marshmallow.png',
    stage: 'Stage Fiesta',
    time: 'dd.mm.aa - 00:00 h',
    status: 'Live'
  },
  {
    id: 'live-7',
    artist: 'Alok',
    image: '/alok.png',
    stage: 'Stage Sunset',
    time: 'dd.mm.aa - 00:00 h',
    status: 'Live'
  },
  {
    id: 'live-8',
    artist: 'Rita Ora',
    image: '/ritaora.png',
    stage: 'Stage World',
    time: 'dd.mm.aa - 00:00 h',
    status: 'Live'
  },
  {
    id: 'live-9',
    artist: 'Dream Theatre',
    image: '/dreamtheate.png',
    stage: 'Stage Fiesta',
    time: 'dd.mm.aa - 00:00 h',
    status: 'Live'
  },
  {
    id: 'live-10',
    artist: 'Racionais MC\'s',
    image: '/racionais.png',
    stage: 'Stage Sunset',
    time: 'dd.mm.aa - 00:00 h',
    status: 'Live'
  },
  {
    id: 'live-11',
    artist: 'Iron Maiden',
    image: '/ironmaiden.png',
    stage: 'Stage World',
    time: 'dd.mm.aa - 00:00 h',
    status: 'Live'
  },
  {
    id: 'live-12',
    artist: 'Dua Lipa',
    image: '/dualipa.png',
    stage: 'Stage Fiesta',
    time: 'dd.mm.aa - 00:00 h',
    status: 'Live'
  }
]
