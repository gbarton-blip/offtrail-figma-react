import './TileWeather.css'

function ArrowDown() {
  return (
    <svg width="5" height="8" viewBox="0 0 5 8" fill="none" aria-hidden="true">
      <path d="M2.5 0v6M0 4l2.5 3L5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowUp() {
  return (
    <svg width="5" height="8" viewBox="0 0 5 8" fill="none" aria-hidden="true">
      <path d="M2.5 8V2M0 4L2.5 1 5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function RainGraphic() {
  const dots = [
    { left: 19.88, top: 29.98, width: 44.376 },
    { left: 19.88, top: 24.65, width: 26.625 },
    { left: 41.18, top: 19.33, width: 10.65 },
    { left: 34.08, top: 14,    width: 8.875 },
    { left: 25.2,  top: 19.33, width: 14.2 },
    { left: 55.38, top: 51.28, width: 19.525 },
    { left: 50.05, top: 45.95, width: 28.4 },
    { left: 12.78, top: 45.95, width: 26.625 },
    { left: 16.32, top: 51.28, width: 8.875 },
    { left: 12.78, top: 35.3,  width: 42.601 },
    { left: 11,    top: 40.63, width: 15.975 },
    { left: 57.15, top: 35.3,  width: 12.425 },
    { left: 48.28, top: 24.65, width: 8.875 },
    { left: 28.75, top: 40.63, width: 47.926 },
    { left: 26.97, top: 51.28, width: 5.325 },
    { left: 37.63, top: 51.28, width: 5.325 },
    { left: 41.18, top: 45.95, width: 7.1 },
    { left: 48.28, top: 51.28, width: 5.325 },
    { left: 34.08, top: 56.6,  width: 5.325 },
    { left: 23.42, top: 56.6,  width: 5.325 },
    { left: 30.53, top: 61.93, width: 5.325 },
    { left: 44.72, top: 56.6,  width: 5.325 },
    { left: 26.97, top: 67.25, width: 5.325 },
    { left: 19.88, top: 61.93, width: 5.325 },
    { left: 41.18, top: 61.93, width: 5.325 },
    { left: 16.32, top: 67.25, width: 5.325 },
    { left: 35.85, top: 67.25, width: 5.325 },
  ]

  return (
    <div className="tile-weather__graphic">
      {dots.map((dot, i) => (
        <span
          key={i}
          className="tile-weather__dot"
          style={{ left: dot.left, top: dot.top, width: dot.width }}
        />
      ))}
    </div>
  )
}

export default function TileWeather({
  time = '3:43PM',
  conditions = 'Light Rain',
  temp = '65°F',
  low = '42°',
  high = '67°',
  className = '',
}) {
  const classes = ['tile-weather', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <div className="tile-weather__left">
        <div className="tile-weather__time-conditions">
          <p className="tile-weather__time">{time}</p>
          <p className="tile-weather__conditions">{conditions}</p>
        </div>
        <p className="tile-weather__temp">{temp}</p>
      </div>
      <div className="tile-weather__right">
        <div className="tile-weather__temps">
          <div className="tile-weather__temp-item">
            <ArrowDown />
            <p className="tile-weather__temp-value">{low}</p>
          </div>
          <div className="tile-weather__temp-item">
            <ArrowUp />
            <p className="tile-weather__temp-value">{high}</p>
          </div>
        </div>
        <RainGraphic />
      </div>
    </div>
  )
}
