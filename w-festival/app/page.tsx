import VideoHero from '../src/components/organisms/VideoHero'
import ArtistCarousel from '../src/components/organisms/ArtistCarousel'
import FestivalSlider from '../src/components/organisms/FestivalSlider'
import AdCarousel from '../src/components/organisms/AdCarousel'
import LiveEventCarousel from '../src/components/organisms/LiveEventCarousel'
import ExclusiveContentCarousel from '../src/components/organisms/ExclusiveContentCarousel'
import { artists, featuredVideo, festivals, ads, inLiveShows, yesterdayShows, exclusiveContent } from '../src/data'

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
      <ArtistCarousel items={artists} title="Line Up" showTitlePadding={true} />

      <div id="festivals" className="scroll-mt-32">
        <FestivalSlider festivals={festivals} />
      </div>

      <AdCarousel ads={ads} />

      <div id="in-live" className="scroll-mt-32">
        <LiveEventCarousel events={inLiveShows} />
      </div>

      <ArtistCarousel items={yesterdayShows} title="Yesterday Shows" showAd={false} />

      <div id="exclusive" className="scroll-mt-32">
        <ExclusiveContentCarousel items={exclusiveContent} />
      </div>

      <ArtistCarousel items={artists} title="Rock Singers" />

      <AdCarousel ads={ads} />

      <ArtistCarousel items={artists} title="Watch Again" showWatchAgainBadge={true} />
    </div>
  );
}
