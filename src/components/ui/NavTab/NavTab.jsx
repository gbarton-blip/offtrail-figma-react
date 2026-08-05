import BrandIcon from '../BrandIcon/BrandIcon'
import './NavTab.css'

export default function NavTab({
  icon = 'home',
  label,
  active = false,
  onClick,
  className = '',
  ...props
}) {
  return (
    <button
      type="button"
      className={`nav-tab ${active ? 'nav-tab--active' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="nav-tab__indicator" />
      <BrandIcon glyph={icon} className="nav-tab__icon" />
      {label && <span className="nav-tab__label">{label}</span>}
    </button>
  )
}
