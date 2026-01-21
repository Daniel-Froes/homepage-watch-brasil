import VideoHero from '../src/components/organisms/VideoHero'
import LineUpSlider from '../src/components/organisms/LineUpSlider'

export default function Home() {
  const artists = [
    {
      id: '1',
      name: 'Iron Maiden',
      image: '/ironmaiden.png'
    },
    {
      id: '2', 
      name: 'Alok',
      image: '/alok.png'
    },
    {
      id: '3',
      name: 'Rita Ora',
      image: '/ritaora.png'
    },
    {
      id: '4',
      name: 'Dream Theatre',
      image: '/dreamtheate.png'
    },
    {
      id: '5',
      name: 'Dua Lipa',
      image: '/dualipa.png'
    }
  ]

  return (
    <div className="min-h-screen">
      <VideoHero 
        videoSrc="91ua5WzV58g"
        title="Avril Lavigne"
        subtitle="Sunset"
        status="LIVE"
        location="Singer Camera"
      />

      <LineUpSlider artists={artists} />
    </div>
  );
}
