import './TileDate.css'

export default function TileDate({
  day = '28',
  month = 'Jun',
  className = '',
}) {
  const classes = ['tile-date', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <p className="tile-date__month">{month}</p>
      <p className="tile-date__day">{day}</p>
    </div>
  )
}
