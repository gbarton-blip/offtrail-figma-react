import BrandIcon from '../BrandIcon/BrandIcon'
import './TileCommunity.css'

export default function TileCommunity({
  activity = 'Meditation',
  count = '64',
  className = '',
}) {
  const classes = ['tile-community', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <p className="tile-community__activity">{activity}</p>
      <div className="tile-community__count">
        <BrandIcon glyph="location" className="tile-community__icon" />
        <p className="tile-community__count-label">{count}</p>
      </div>
    </div>
  )
}
