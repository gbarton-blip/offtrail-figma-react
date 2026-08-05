import { useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import BrandIcon from '../BrandIcon/BrandIcon'
import Avatar from '../Avatar/Avatar'
const avatarImage = 'https://static.figma.com/uploads/86285ada8df9f7b3d1dc73448bebeba29311b5f9'
import './DesktopTopNav.css'

const navItems = [
  { label: 'Explore', path: '/home' },
  { label: 'Map', path: '/map' },
]

export default function DesktopTopNav({ tone = 'dark', className = '' }) {
  const navigate = useNavigate()
  const classes = ['desktop-top-nav', `desktop-top-nav--${tone}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <nav className={classes} aria-label="Desktop navigation">
      <button
        className="desktop-top-nav__brand"
        type="button"
        onClick={() => navigate('/home')}
        aria-label="Offtrail home"
      >
        <Logo className="desktop-top-nav__logo" />
      </button>
      <div className="desktop-top-nav__links">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="desktop-top-nav__link"
            type="button"
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </button>
        ))}
        <button
          className="desktop-top-nav__search-button"
          type="button"
          aria-label="Search"
        >
          <BrandIcon glyph="search" />
        </button>
        <button
          className="desktop-top-nav__avatar-button"
          type="button"
          onClick={() => navigate('/profile')}
          aria-label="Open profile"
        >
          <Avatar src={avatarImage} alt="" size={32} />
        </button>
      </div>
    </nav>
  )
}

DesktopTopNav.tones = ['dark', 'light']
