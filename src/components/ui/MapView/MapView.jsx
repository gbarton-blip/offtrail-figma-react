import { useState, useCallback, useRef, useEffect } from 'react'
import Map, { Marker } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import MapPin from '../MapPin/MapPin'
import MapUserLocation from '../MapUserLocation/MapUserLocation'
import { MAP_STYLES } from './mapStyles'
import { recolorMap } from './recolorMap'
import './MapView.css'

const variantClassMap = {
  full: 'map-view--full',
  card: 'map-view--card',
}

export default function MapView({
  longitude = -118.25,
  latitude = 34.07,
  zoom = 12,
  interactive = true,
  variant = 'full',
  mode = 'Dark',
  labels = true,
  markers = [],
  showUserLocation = true,
  onMarkerClick,
  className = '',
}) {
  const mapRef = useRef(null)

  const [viewState, setViewState] = useState({
    longitude,
    latitude,
    zoom,
  })

  const handleMove = useCallback((evt) => {
    setViewState(evt.viewState)
  }, [])

  const style = MAP_STYLES[mode]
  const styleUrl = labels ? style.url : style.urlNoLabels
  const palette = style.palette

  // Recolor on every style (re)load — initial mount, mode flip, and labels toggle
  // each trigger a fresh style load, after which we override paint properties to
  // match the Figma palette.
  useEffect(() => {
    const map = mapRef.current?.getMap()
    if (!map) return

    const apply = () => {
      if (map.isStyleLoaded()) recolorMap(map, palette)
    }

    apply()
    map.on('style.load', apply)
    return () => {
      map.off('style.load', apply)
    }
  }, [palette, styleUrl])

  const handleLoad = useCallback(() => {
    const map = mapRef.current?.getMap()
    if (map) recolorMap(map, palette)
  }, [palette])

  const classes = [
    'map-view',
    variantClassMap[variant],
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <Map
        ref={mapRef}
        {...viewState}
        onMove={interactive ? handleMove : undefined}
        onLoad={handleLoad}
        mapStyle={styleUrl}
        interactive={interactive}
        attributionControl={false}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Map pin markers */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            longitude={marker.lng}
            latitude={marker.lat}
            anchor="bottom"
            onClick={() => onMarkerClick?.(marker)}
          >
            <MapPin />
          </Marker>
        ))}

        {/* User location indicator */}
        {showUserLocation && (
          <Marker
            longitude={longitude}
            latitude={latitude}
            anchor="center"
          >
            <MapUserLocation size={variant === 'card' ? 'small' : 'large'} />
          </Marker>
        )}
      </Map>

      {/* Top shade gradient */}
      <div
        className="map-view__shade"
        style={{
          background: `linear-gradient(to bottom, ${style.shadeFrom}, ${style.shadeTo})`,
        }}
      />
    </div>
  )
}

MapView.variants = Object.keys(variantClassMap)
MapView.modes = Object.keys(MAP_STYLES)
