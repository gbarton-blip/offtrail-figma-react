import { useNavigate } from 'react-router-dom'
import MapView from './components/ui/MapView/MapView'
import SearchInput from './components/ui/SearchInput/SearchInput'
import Chip from './components/ui/Chip/Chip'
import BottomSheet from './components/ui/BottomSheet/BottomSheet'
import CardEvent from './components/ui/CardEvent/CardEvent'
import AppShell from './components/ui/AppShell/AppShell'
import DesktopTopNav from './components/ui/DesktopTopNav/DesktopTopNav'
import { getEvent } from './data/events'
import './Map.css'

const FILTERS = ['For You', 'Yoga', 'Surfing', 'Biking', 'Meditation']

const EVENT_IDS = ['weekend-surf', 'morning-run', 'horseback']

export default function Map() {
  const navigate = useNavigate()
  const events = EVENT_IDS.map(getEvent)

  return (
    <AppShell active="Map" className="map-screen" contentClassName="map-screen__content">
      <DesktopTopNav tone="dark" />
      <div className="map-screen__map-region">
        <MapView
          className="map-screen__map"
          variant="full"
          latitude={34.07}
          longitude={-118.25}
          zoom={12}
          interactive={true}
          showUserLocation={true}
          markers={[
            { id: '1', lng: -118.27, lat: 34.09 },
            { id: '2', lng: -118.22, lat: 34.06 },
          ]}
        />

        <div className="map-screen__search map-screen__search--mobile">
          <SearchInput placeholder="Find things to do..." />
        </div>
      </div>

      <BottomSheet size="Default" className="map-screen__sheet">
        <div className="map-screen__search map-screen__search--desktop">
          <SearchInput placeholder="Find things to do..." />
        </div>
        <div className="map-screen__tabs">
          {FILTERS.map((label, i) => (
            <Chip key={label} label={label} active={i === 0} />
          ))}
        </div>
        <div className="map-screen__events">
          {events.map((event) => (
            <CardEvent
              key={event.id}
              size="small"
              src={event.src}
              title={event.title}
              location={event.location}
              people={event.people}
              time={event.time}
              month={event.month}
              day={event.day}
              onClick={() => navigate(`/event/${event.id}`)}
            />
          ))}
        </div>
      </BottomSheet>
    </AppShell>
  )
}
