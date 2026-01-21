import VideoHero from '../src/components/organisms/VideoHero'
import LineUpSlider from '../src/components/organisms/LineUpSlider'

export default function Home() {
  const artists = [
    {
      id: '1',
      name: 'Iron Maiden',
      image: '/artists/iron-maiden.jpg'
    },
    {
      id: '2', 
      name: 'Alok',
      image: '/artists/alok.jpg'
    },
    {
      id: '3',
      name: 'Rita Ora',
      image: '/artists/rita-ora.jpg'
    },
    {
      id: '4',
      name: 'Dream Theatre',
      image: '/artists/dream-theatre.jpg'
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
