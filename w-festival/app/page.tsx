import VideoHero from '../src/components/organisms/VideoHero'
import LineUpSlider from '../src/components/organisms/LineUpSlider'
import { artists, featuredVideo } from '../src/data'

export default function Home() {
  return (
    <div className="min-h-screen">
      <VideoHero 
        videoSrc={featuredVideo.videoSrc}
        title={featuredVideo.title}
        subtitle={featuredVideo.subtitle}
        status={featuredVideo.status}
        location={featuredVideo.location}
      />

      <LineUpSlider artists={artists} />
    </div>
  );
}
