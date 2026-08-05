// Google Maps dark style (Android). Apple Maps (iOS default provider) instead
// honors the `userInterfaceStyle` prop set in MapView. Trimmed standard dark
// palette to roughly match the web app's dark map.
export default [
  { elementType: 'geometry', stylers: [{ color: '#1d2330' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#1d2330' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#8a93a6' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2c3445' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#1d2330' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0f1420' }] },
  { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#283041' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#1f3324' }] },
  { featureType: 'transit', stylers: [{ visibility: 'off' }] },
];
