// MapLibre-compatible vector styles from CARTO's free basemap CDN.
// Each entry exposes labeled and no-label variants so the `labels` prop can swap
// styles at runtime, plus a palette used by recolorMap to match the Figma design.
export const MAP_STYLES = {
  Dark: {
    url: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
    urlNoLabels: 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json',
    shadeFrom: '#615c67',
    shadeTo: 'rgba(97, 92, 103, 0)',
    palette: {
      land: '#595360',
      landAlt: '#595360',
      park: '#595360',
      building: '#625b6b',
      water: '#4e4855',
      road: '#d6d5d8',
      roadCasing: '#d6d5d8',
      rail: '#6e6878',
      boundary: 'rgba(255, 255, 255, 0.08)',
      placeText: 'rgba(255, 255, 255, 0.9)',
      labelText: 'rgba(255, 255, 255, 0.65)',
      labelHalo: 'rgba(0, 0, 0, 0.45)',
    },
  },
  Light: {
    url: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
    urlNoLabels: 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json',
    shadeFrom: '#5f788e',
    shadeTo: 'rgba(95, 120, 142, 0)',
    palette: {
      land: '#8497a8',
      landAlt: '#8497a8',
      park: '#8497a8',
      building: '#91a3b2',
      water: '#788ea0',
      road: '#e1e6ea',
      roadCasing: '#e1e6ea',
      rail: '#92a4b3',
      boundary: 'rgba(255, 255, 255, 0.18)',
      placeText: '#ffffff',
      labelText: 'rgba(255, 255, 255, 0.85)',
      labelHalo: 'rgba(132, 151, 168, 0.45)',
    },
  },
}
