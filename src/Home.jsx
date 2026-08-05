import { useNavigate } from 'react-router-dom'
import Logo from './components/ui/Logo/Logo'
import BrandIcon from './components/ui/BrandIcon/BrandIcon'
import TileWeather from './components/ui/TileWeather/TileWeather'
import CardEvent from './components/ui/CardEvent/CardEvent'
import CardGuide from './components/ui/CardGuide/CardGuide'
import Carousel from './components/ui/Carousel/Carousel'
import TileLocation from './components/ui/TileLocation/TileLocation'
import AppShell from './components/ui/AppShell/AppShell'
import DesktopTopNav from './components/ui/DesktopTopNav/DesktopTopNav'
import { getEvent } from './data/events'
import './Home.css'

const imgAmelia = 'https://static.figma.com/uploads/a760126f639ca34680e11f727e7593119d9c44fe'
const imgTeresa = 'https://static.figma.com/uploads/f7e2ba11c6a11c6d7712a56321a70b474a3dbc53'
const imgKarim = 'https://static.figma.com/uploads/8bc77a91af9a6bae4d369a5d2768f26cd66e2c03'
const imgJordan = 'https://static.figma.com/uploads/2f2d3067dad7b641f28978c2ff0dea7bb5176622'
const imgMaya = 'https://static.figma.com/uploads/48080c69f291b89e052c0d532eba87c3247125ec'
const imgLeo = 'https://static.figma.com/uploads/d31ce0e0d5bf18c86a5a1dd86027ce2508dcbfd7'

const featured = getEvent('canyon-crew')
const morningRun = getEvent('morning-run')
const horseback = getEvent('horseback')
const weekendSurf = getEvent('weekend-surf')
const trailRun = getEvent('trail-run')

export default function Home() {
  const navigate = useNavigate()
  const openEvent = (id) => navigate(`/event/${id}`)

  return (
    <AppShell active="Home" className="home" contentClassName="home__content">
      <div className="home__mobile">
        <div className="home__header">
          <Logo />
          <BrandIcon glyph="search" />
        </div>

        {/* Location & Weather */}
        <div className="home__section home__section--top">
          <div className="home__heading">
            <p className="home__heading-label">Current Location</p>
            <p className="home__heading-title">Los Angeles</p>
          </div>
          <TileWeather
            time="3:43PM"
            conditions="Light Rain"
            temp="65°F"
            low="42°"
            high="67°"
          />
        </div>

        {/* Featured */}
        <div className="home__section home__section--featured">
          <p className="home__section-title">Featured</p>
          <CardEvent
            src={featured.src}
            title={featured.title}
            location={featured.location}
            people={featured.people}
            time={featured.time}
            size="large"

            month={featured.month}
            day={featured.day}
            onClick={() => openEvent(featured.id)}
          />
        </div>

        {/* Guides */}
        <div className="home__section home__section--guides">
          <Carousel title="Guides">
            <CardGuide src={imgAmelia} name="Amelia B." category="SURFING" />
            <CardGuide src={imgTeresa} name="Teresa M." category="MEDITATION" />
            <CardGuide src={imgKarim} name="Karim N." category="HIKING" />
            <CardGuide src={imgJordan} name="Jordan P." category="CLIMBING" />
            <CardGuide src={imgMaya} name="Maya R." category="YOGA" />
            <CardGuide src={imgLeo} name="Leo C." category="CYCLING" />
          </Carousel>
        </div>

        {/* Events Nearby */}
        <div className="home__section home__section--nearby">
          <TileLocation location="Los Angeles" />
        </div>

        {/* Upcoming Events */}
        <div className="home__section home__section--upcoming">
          <p className="home__section-title">Upcoming Events</p>
          <div className="home__events">
            <CardEvent
              src={morningRun.src}
              title={morningRun.title}
              location={morningRun.location}
              people={morningRun.people}
              time={morningRun.time}
              size="large"
              month={morningRun.month}
              day={morningRun.day}
              onClick={() => openEvent(morningRun.id)}
            />
            <CardEvent
              src={horseback.src}
              title={horseback.title}
              location={horseback.location}
              people={horseback.people}
              time={horseback.time}
              size="large"
              month={horseback.month}
              day={horseback.day}
              onClick={() => openEvent(horseback.id)}
            />
            <CardEvent
              src={weekendSurf.src}
              title={weekendSurf.title}
              location={weekendSurf.location}
              people={weekendSurf.people}
              time={weekendSurf.time}
              size="large"

              month={weekendSurf.month}
              day={weekendSurf.day}
              onClick={() => openEvent(weekendSurf.id)}
            />
            <CardEvent
              src={trailRun.src}
              title={trailRun.title}
              location={trailRun.location}
              people={trailRun.people}
              time={trailRun.time}
              size="large"
              month={trailRun.month}
              day={trailRun.day}
              onClick={() => openEvent(trailRun.id)}
            />
          </div>
        </div>
      </div>

      <div className="home__desktop">
        <DesktopTopNav tone="dark" />

        <section className="home-desktop__overview" aria-labelledby="home-desktop-location-title">
          <div className="home-desktop__location-panel">
            <div className="home__heading">
              <p className="home__heading-label">Current Location</p>
              <p id="home-desktop-location-title" className="home__heading-title">
                Los Angeles
              </p>
            </div>
            <TileWeather
              className="home-desktop__weather"
              time="3:43PM"
              conditions="Light Rain"
              temp="65°F"
              low="42°"
              high="67°"
            />
          </div>

          <div className="home-desktop__featured-panel">
            <div className="home-desktop__panel-heading">
              <p className="home__section-title"> </p>
            </div>
            <CardEvent
              className="home-desktop__featured-card"
              src={featured.src}
              title={featured.title}
              location={featured.location}
              people={featured.people}
              time={featured.time}
              size="large"
              month={featured.month}
              day={featured.day}
              onClick={() => openEvent(featured.id)}
            />
          </div>
        </section>

        <div className="home-desktop__workspace">
          <section className="home-desktop__panel home-desktop__panel--guides">
            <Carousel title="Guides" showControls>
              <CardGuide src={imgAmelia} name="Amelia B." category="SURFING" />
              <CardGuide src={imgTeresa} name="Teresa M." category="MEDITATION" />
              <CardGuide src={imgKarim} name="Karim N." category="HIKING" />
              <CardGuide src={imgJordan} name="Jordan P." category="CLIMBING" />
              <CardGuide src={imgMaya} name="Maya R." category="YOGA" />
              <CardGuide src={imgLeo} name="Leo C." category="CYCLING" />
            </Carousel>
          </section>

          <section className="home-desktop__panel home-desktop__panel--nearby">
            <div className="home-desktop__panel-heading">
              <p className="home__section-title">Events Nearby</p>
            </div>
            <TileLocation
              location="Los Angeles"
              mode="Dark"
              className="home-desktop__nearby-tile"
              onClick={() => navigate('/map')}
            />
          </section>

          <section className="home-desktop__panel home-desktop__panel--upcoming">
            <div className="home-desktop__panel-heading">
              <p className="home__section-title">Upcoming Events</p>
            </div>
            <div className="home-desktop__events-grid">
              <CardEvent
                src={morningRun.src}
                title={morningRun.title}
                location={morningRun.location}
                people={morningRun.people}
                time={morningRun.time}
                size="large"
                month={morningRun.month}
                day={morningRun.day}
                onClick={() => openEvent(morningRun.id)}
              />
              <CardEvent
                src={horseback.src}
                title={horseback.title}
                location={horseback.location}
                people={horseback.people}
                time={horseback.time}
                size="large"
                month={horseback.month}
                day={horseback.day}
                onClick={() => openEvent(horseback.id)}
              />
              <CardEvent
                src={weekendSurf.src}
                title={weekendSurf.title}
                location={weekendSurf.location}
                people={weekendSurf.people}
                time={weekendSurf.time}
                size="large"
                month={weekendSurf.month}
                day={weekendSurf.day}
                onClick={() => openEvent(weekendSurf.id)}
              />
              <CardEvent
                src={trailRun.src}
                title={trailRun.title}
                location={trailRun.location}
                people={trailRun.people}
                time={trailRun.time}
                size="large"
                month={trailRun.month}
                day={trailRun.day}
                onClick={() => openEvent(trailRun.id)}
              />
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  )
}
