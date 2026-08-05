import { View, StyleSheet, Platform } from 'react-native';
import RNMapView, { Marker } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import MapPin from '../MapPin/MapPin';
import MapUserLocation from '../MapUserLocation/MapUserLocation';
import useTheme from '../../theme/useTheme';
import darkMapStyle from './mapStyleDark';

// RN port of src/components/MapView/MapView.jsx. The web version used
// react-map-gl/maplibre with a custom recolor step; here we wrap
// react-native-maps. On iOS the default provider is Apple Maps (no API key,
// dark mode via userInterfaceStyle); on Android it's Google Maps (customMapStyle).
//
// `zoom` (web tile zoom) is converted to a region delta. Roughly, the visible
// longitude span ≈ 360 / 2^zoom degrees.
function zoomToDelta(zoom) {
  return 360 / Math.pow(2, zoom);
}

export default function MapView({
  longitude = -118.25,
  latitude = 34.07,
  zoom = 12,
  interactive = true,
  markers = [],
  showUserLocation = true,
  showShade = true,
  style,
}) {
  const t = useTheme();
  const isDark = t.mode === 'Dark';
  const delta = zoomToDelta(zoom);

  return (
    <View style={[styles.container, style]}>
      <RNMapView
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: delta,
          longitudeDelta: delta,
        }}
        scrollEnabled={interactive}
        zoomEnabled={interactive}
        rotateEnabled={interactive}
        pitchEnabled={interactive}
        userInterfaceStyle={isDark ? 'dark' : 'light'}
        customMapStyle={Platform.OS === 'android' && isDark ? darkMapStyle : undefined}
        pointerEvents={interactive ? 'auto' : 'none'}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.lat, longitude: marker.lng }}
            anchor={{ x: 0.5, y: 1 }}
            tracksViewChanges={false}
          >
            <MapPin />
          </Marker>
        ))}

        {showUserLocation ? (
          <Marker
            coordinate={{ latitude, longitude }}
            anchor={{ x: 0.5, y: 0.5 }}
            tracksViewChanges={false}
          >
            <MapUserLocation size="large" />
          </Marker>
        ) : null}
      </RNMapView>

      {showShade ? (
        <LinearGradient
          colors={isDark ? ['rgba(16,7,27,0.45)', 'transparent'] : ['rgba(0,0,0,0.18)', 'transparent']}
          style={styles.shade}
          pointerEvents="none"
        />
      ) : null}
    </View>
  );
}

MapView.variants = ['full', 'card'];

const styles = StyleSheet.create({
  container: { position: 'relative', overflow: 'hidden' },
  shade: { position: 'absolute', top: 0, left: 0, right: 0, height: 120 },
});
