import './MapUserLocation.css'

const sizeClassMap = {
  large: 'map-user-location--large',
  small: 'map-user-location--small',
}

export default function MapUserLocation({
  size = 'large',
  className = '',
}) {
  const classes = [
    'map-user-location',
    sizeClassMap[size],
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <div className="map-user-location__glow" />
      <div className="map-user-location__pulse" />
      <div className="map-user-location__dot" />
    </div>
  )
}

MapUserLocation.sizes = Object.keys(sizeClassMap)
