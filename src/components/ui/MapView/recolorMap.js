// Walks every layer in the loaded MapLibre style and retints fills, lines,
// and label text to match the Figma design tokens for the active mode.
// Carto's Positron and Dark Matter share a stable layer naming convention
// (road_*_fill, place_*, building*, water, landuse*, etc.) which we pattern-match on.
export function recolorMap(map, palette) {
  const style = map.getStyle()
  if (!style?.layers) return

  for (const layer of style.layers) {
    const id = layer.id

    try {
      if (layer.type === 'background') {
        map.setPaintProperty(id, 'background-color', palette.land)
        continue
      }

      if (layer.type === 'fill') {
        if (id === 'water' || id === 'water_shadow') {
          map.setPaintProperty(id, 'fill-color', palette.water)
        } else if (id.startsWith('park') || id === 'landcover') {
          map.setPaintProperty(id, 'fill-color', palette.park)
        } else if (id.startsWith('building')) {
          map.setPaintProperty(id, 'fill-color', palette.building)
          map.setPaintProperty(id, 'fill-opacity', 1)
        } else {
          map.setPaintProperty(id, 'fill-color', palette.land)
        }
        continue
      }

      if (layer.type === 'line') {
        if (id === 'waterway') {
          map.setPaintProperty(id, 'line-color', palette.water)
        } else if (id.startsWith('boundary')) {
          map.setPaintProperty(id, 'line-color', palette.boundary)
        } else if (id.startsWith('rail')) {
          map.setPaintProperty(id, 'line-color', palette.rail)
        } else if (id.includes('_case')) {
          map.setPaintProperty(id, 'line-color', palette.roadCasing)
        } else {
          // road/bridge/tunnel/aeroway fills and paths
          map.setPaintProperty(id, 'line-color', palette.road)
        }
        // Dim everything below trunk (primary / secondary / minor / service / path)
        // to 50% opacity, both the fill stroke and its casing. Only motorways and
        // trunk roads stay at full strength.
        const isMinorRoad =
          id.includes('_pri_') ||
          id.includes('_sec_') ||
          id.includes('_minor_') ||
          id.includes('_service_') ||
          id.endsWith('_path')
        if (isMinorRoad) {
          map.setPaintProperty(id, 'line-opacity', 0.5)
        }
        continue
      }

      if (layer.type === 'symbol') {
        if (id === 'housenumber') {
          map.setLayoutProperty(id, 'visibility', 'none')
          continue
        }

        const isPlace =
          id.startsWith('place_country') ||
          id.startsWith('place_state') ||
          id.startsWith('place_continent') ||
          id.startsWith('place_city')

        map.setPaintProperty(id, 'text-color', isPlace ? palette.placeText : palette.labelText)
        map.setPaintProperty(id, 'text-halo-color', palette.labelHalo)
        map.setPaintProperty(id, 'text-halo-width', 1.2)
      }
    } catch {
      // Layer may not support the property (e.g. raster); skip silently.
    }
  }
}
