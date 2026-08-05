import { View, Text, Image, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import MapView from '../MapView/MapView';
import MapPin from '../MapPin/MapPin';
import useTheme from '../../theme/useTheme';
import { sizes, fonts } from '../../theme/tokens';

// Ported from src/components/TileLocation/TileLocation.jsx. The radar uses the
// PNG ring layers from the shared assets (the per-mode .svg layer is skipped —
// RN's Image can't render SVG files without a transformer). The map is anchored
// like the web version so its center sits under the radar/pin.
const radar = {
  Dark: {
    outer: { uri: 'https://static.figma.com/uploads/48c084d597ff4581c17dc1681e5322eef471eab4' },
    ring: { uri: 'https://static.figma.com/uploads/9c90a2b093d3e2425ecc1323bf6e66ef511ec610' },
    mid: { uri: 'https://static.figma.com/uploads/cfe5993936e68725ddc8d50b4cf5c5ae87bc260b' },
  },
  Light: {
    outer: { uri: 'https://static.figma.com/uploads/2d76fa3ec4b81a2424623ecd56ff52bbe1238b55' },
    inner: { uri: 'https://static.figma.com/uploads/603552d22f3c9c0f9cadb42cedb3c4fbc862581f' },
    mid: { uri: 'https://static.figma.com/uploads/c0c0bacb2a0cb55fddfa438795199591efaf0cc8' },
  },
};

function ChevronRight({ color }) {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
      <Path d="M4 2l4 4-4 4" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default function TileLocation({ location = 'Location', latitude = 34.07, longitude = -118.25, style }) {
  const t = useTheme();
  const r = radar[t.mode];
  const overlayColor =
    t.mode === 'Dark' ? 'rgba(16,7,27,0.5)' : 'rgba(187,228,255,0.55)';

  return (
    <View style={[styles.tile, { borderColor: t.colorDim }, style]}>
      {/* Map background, centered on the marker (clipped by the tile) */}
      <View style={styles.mapAnchor} pointerEvents="none">
        <MapView
          latitude={latitude}
          longitude={longitude}
          zoom={14}
          interactive={false}
          showUserLocation={false}
          labels={false}
          showShade={false}
          style={styles.map}
        />
      </View>

      <View style={[StyleSheet.absoluteFill, { backgroundColor: overlayColor }]} pointerEvents="none" />

      {/* Radar rings */}
      <View style={styles.radar} pointerEvents="none">
        <Image source={r.outer} style={[styles.ringOuter, { opacity: 0.2 }]} resizeMode="contain" />
        {r.ring ? (
          <Image source={r.ring} style={[styles.ringMid258, { opacity: 0.2 }]} resizeMode="contain" />
        ) : null}
        <Image source={r.mid} style={styles.ringMid175} resizeMode="contain" />
        {r.inner ? (
          <Image source={r.inner} style={[styles.ringInner, { opacity: 0.2 }]} resizeMode="contain" />
        ) : null}
      </View>

      {/* Pin anchored at the radar center */}
      <View style={styles.pin} pointerEvents="none">
        <MapPin />
      </View>

      {/* Text content */}
      <View style={styles.content}>
        <Text style={[styles.eyebrow, { color: t.colorSecondary }]} numberOfLines={1}>Events Nearby</Text>
        <Text style={[styles.location, { color: t.colorPrimary }]} numberOfLines={1}>{String(location).toUpperCase()}</Text>
      </View>

      {/* CTA */}
      <View style={styles.cta}>
        <Text style={[styles.ctaLabel, { color: t.colorPrimary }]}>VIEW MAP</Text>
        <ChevronRight color={t.colorPrimary} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    position: 'relative',
    justifyContent: 'space-between',
    width: '100%',
    height: 188,
    paddingVertical: sizes.padMedium,
    paddingHorizontal: sizes.padLarge,
    borderWidth: 1,
    borderRadius: sizes.cornerLarge,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  // 378x378 box whose center lands ~ (right:64, bottom:54) of the tile.
  mapAnchor: { position: 'absolute', right: -286, bottom: -296, width: 600, height: 600 },
  map: { width: '100%', height: '100%' },
  radar: { position: 'absolute', right: -125, bottom: -135, width: 378, height: 378 },
  ringOuter: { position: 'absolute', left: 0, top: 0, width: 378, height: 378 },
  ringMid258: { position: 'absolute', left: 60, top: 60, width: 258, height: 258 },
  ringMid175: { position: 'absolute', left: 102, top: 101, width: 175, height: 175 },
  ringInner: { position: 'absolute', left: 121, top: 121, width: 136, height: 136 },
  pin: { position: 'absolute', right: 54, bottom: 54 },
  content: { gap: sizes.gapSmall, width: '100%' },
  eyebrow: { fontFamily: fonts.sansMedium, fontSize: sizes.fontLarge, lineHeight: sizes.fontLarge * 1.3, width: '100%' },
  location: { fontFamily: fonts.headline, fontSize: sizes.fontDisplay, lineHeight: sizes.fontDisplay, width: '100%' },
  cta: { flexDirection: 'row', gap: sizes.padXxsmall, alignItems: 'center' },
  ctaLabel: { fontFamily: fonts.mono, fontSize: sizes.fontSmall, lineHeight: 18 },
});
