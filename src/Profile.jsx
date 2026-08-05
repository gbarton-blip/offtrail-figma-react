import { useNavigate } from 'react-router-dom'
import Avatar from './components/ui/Avatar/Avatar'
import Button from './components/ui/Button/Button'
import TileCallout from './components/ui/TileCallout/TileCallout'
import CardEvent from './components/ui/CardEvent/CardEvent'
import AppShell from './components/ui/AppShell/AppShell'
import DesktopTopNav from './components/ui/DesktopTopNav/DesktopTopNav'
import { getEvent } from './data/events'
import './Profile.css'

const imgAvatar = 'https://static.figma.com/uploads/a760126f639ca34680e11f727e7593119d9c44fe'

const upcoming = getEvent('morning-run')
const past = getEvent('horseback')

export default function Profile() {
  const navigate = useNavigate()
  const openEvent = (id) => navigate(`/event/${id}`)

  return (
    <AppShell active="Profile" className="profile" contentClassName="profile__content">
        <DesktopTopNav tone="dark" />
        {/* Avatar + identity */}
        <section className="profile__avatar-section">
          <div className="profile__header">
            <div className="profile__user">
              <p className="profile__name">Kaley B.</p>
              <p className="profile__location">Los Angeles, CA</p>
            </div>
            <Avatar src={imgAvatar} alt="Kaley B." size={80} />
          </div>
          <div className="profile__actions">
            <Button label="Edit" colour="transparent-white" size="medium" />
            <Button label="Share" colour="transparent-white" size="medium" />
          </div>
          <div className="profile__stats">
            <TileCallout variant="Highlight" label="HOSTED" value="12" />
            <TileCallout variant="Highlight" label="FOLLOWERS" value="148" />
            <TileCallout variant="Highlight" label="HOST RATING" value="4.9" />
          </div>
        </section>

        {/* Upcoming events */}
        <section className="profile__section">
          <p className="profile__section-title">Upcoming events</p>
          <CardEvent
            src={upcoming.src}
            title={upcoming.title}
            location={upcoming.location}
            people={upcoming.people}
            time={upcoming.time}
            size="large"
            month={upcoming.month}
            day={upcoming.day}
            onClick={() => openEvent(upcoming.id)}
          />
        </section>

        {/* Past events */}
        <section className="profile__section profile__section--past">
          <p className="profile__section-title">Past events</p>
          <CardEvent
            src={past.src}
            title={past.title}
            location={past.location}
            people={past.people}
            time={past.time}
            size="large"
            month={past.month}
            day={past.day}
            className="profile__past-mobile"
            onClick={() => openEvent(past.id)}
          />
          <CardEvent
            src={past.src}
            title={past.title}
            location={past.location}
            people={past.people}
            time={past.time}
            size="small"
            month={past.month}
            day={past.day}
            className="profile__past-desktop"
            onClick={() => openEvent(past.id)}
          />
        </section>
    </AppShell>
  )
}
