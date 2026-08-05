import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import useTheme from '../../theme/useTheme';
import { sizes, fonts } from '../../theme/tokens';

// Ported from src/components/TileWeather/TileWeather.jsx.

function ArrowDown({ color }) {
  return (
    <Svg width={5} height={8} viewBox="0 0 5 8" fill="none">
      <Path d="M2.5 0v6M0 4l2.5 3L5 4" stroke={color} strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function ArrowUp({ color }) {
  return (
    <Svg width={5} height={8} viewBox="0 0 5 8" fill="none">
      <Path d="M2.5 8V2M0 4L2.5 1 5 4" stroke={color} strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

const DOTS = [
  { left: 19.88, top: 29.98, width: 44.376 },
  { left: 19.88, top: 24.65, width: 26.625 },
  { left: 41.18, top: 19.33, width: 10.65 },
  { left: 34.08, top: 14, width: 8.875 },
  { left: 25.2, top: 19.33, width: 14.2 },
  { left: 55.38, top: 51.28, width: 19.525 },
  { left: 50.05, top: 45.95, width: 28.4 },
  { left: 12.78, top: 45.95, width: 26.625 },
  { left: 16.32, top: 51.28, width: 8.875 },
  { left: 12.78, top: 35.3, width: 42.601 },
  { left: 11, top: 40.63, width: 15.975 },
  { left: 57.15, top: 35.3, width: 12.425 },
  { left: 48.28, top: 24.65, width: 8.875 },
  { left: 28.75, top: 40.63, width: 47.926 },
  { left: 26.97, top: 51.28, width: 5.325 },
  { left: 37.63, top: 51.28, width: 5.325 },
  { left: 41.18, top: 45.95, width: 7.1 },
  { left: 48.28, top: 51.28, width: 5.325 },
  { left: 34.08, top: 56.6, width: 5.325 },
  { left: 23.42, top: 56.6, width: 5.325 },
  { left: 30.53, top: 61.93, width: 5.325 },
  { left: 44.72, top: 56.6, width: 5.325 },
  { left: 26.97, top: 67.25, width: 5.325 },
  { left: 19.88, top: 61.93, width: 5.325 },
  { left: 41.18, top: 61.93, width: 5.325 },
  { left: 16.32, top: 67.25, width: 5.325 },
  { left: 35.85, top: 67.25, width: 5.325 },
];

function RainGraphic({ color }) {
  return (
    <View style={styles.graphic}>
      {DOTS.map((dot, i) => (
        <View
          key={i}
          style={[styles.dot, { left: dot.left, top: dot.top, width: dot.width, backgroundColor: color }]}
        />
      ))}
    </View>
  );
}

export default function TileWeather({
  time = '3:43PM',
  conditions = 'Light Rain',
  temp = '65°F',
  low = '42°',
  high = '67°',
}) {
  const t = useTheme();
  const alt = t.colorAlt;

  return (
    <View
      style={[
        styles.tile,
        { backgroundColor: t.bgBrandSecondary, borderColor: t.borderSecondary, borderBottomWidth: sizes.borderBottom },
      ]}
    >
      <View style={styles.left}>
        <View style={styles.timeConditions}>
          <Text style={[styles.time, { color: alt }]}>{time}</Text>
          <Text style={[styles.conditions, { color: alt }]}>{conditions.toUpperCase()}</Text>
        </View>
        <Text style={[styles.temp, { color: alt }]}>{temp.toUpperCase()}</Text>
      </View>

      <View style={styles.right}>
        <View style={styles.temps}>
          <View style={styles.tempItem}>
            <ArrowDown color={alt} />
            <Text style={[styles.tempValue, { color: alt }]}>{low}</Text>
          </View>
          <View style={styles.tempItem}>
            <ArrowUp color={alt} />
            <Text style={[styles.tempValue, { color: alt }]}>{high}</Text>
          </View>
        </View>
        <RainGraphic color={alt} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 136,
    padding: sizes.padSmall,
    borderWidth: sizes.border,
    borderRadius: sizes.cornerLarge,
  },
  left: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '100%',
    width: 134,
  },
  timeConditions: { gap: sizes.padXxsmall, width: '100%' },
  time: { fontFamily: fonts.sansMedium, fontSize: sizes.fontLarge, lineHeight: sizes.fontLarge * 1.3 },
  conditions: { fontFamily: fonts.mono, fontSize: sizes.fontSmall, lineHeight: 18 },
  temp: { fontFamily: fonts.headline, fontSize: sizes.fontDisplay, lineHeight: sizes.fontDisplay, width: '100%' },
  right: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '100%',
    width: 78,
  },
  temps: { flexDirection: 'row', gap: sizes.gapSmall, alignItems: 'center' },
  tempItem: { flexDirection: 'row', gap: sizes.gapXsmall, alignItems: 'center' },
  tempValue: { fontFamily: fonts.mono, fontSize: sizes.fontSmall, lineHeight: 18 },
  graphic: { position: 'relative', width: 78, height: 71, overflow: 'hidden' },
  dot: { position: 'absolute', height: 3.55, borderRadius: sizes.cornerSmall },
});
