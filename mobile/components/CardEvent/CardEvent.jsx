import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Icon from '../Icon/Icon';
import TileDate from '../TileDate/TileDate';
import useTheme from '../../theme/useTheme';
import { sizes, fonts } from '../../theme/tokens';

// Ported from src/components/CardEvent/CardEvent.jsx (<img> -> Image, clickable
// div -> Pressable; ARIA/keyboard handling dropped).
export default function CardEvent({
  src,
  title = 'Weekend Surf Session',
  location = 'Ventura, CA',
  people = '12',
  time = '6:30AM – 1:00PM',
  month = 'Jun',
  day = '12',
  size = 'large',
  overlay = '',
  onPress,
  style,
}) {
  const t = useTheme();
  const isLarge = size === 'large';

  const content = (
    <>
      <View style={isLarge ? styles.imageWrapLarge : styles.imageWrapSmall}>
        <Image source={src} style={styles.image} resizeMode="cover" />
        {isLarge && overlay ? (
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>{String(overlay).toUpperCase()}</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.info}>
        <View style={styles.contentCol}>
          <Text style={[styles.title, { color: t.colorPrimary }]}>{title}</Text>
          <Text style={[styles.location, { color: t.colorSecondary }]}>{String(location).toUpperCase()}</Text>
          <View style={styles.meta}>
            <View style={styles.people}>
              <Icon glyph="person" size={12} color={t.colorSecondary} />
              <Text style={[styles.metaText, { color: t.colorSecondary }]}>{people}</Text>
            </View>
            <View style={[styles.dot, { backgroundColor: t.colorSecondary }]} />
            <Text style={[styles.metaText, { color: t.colorSecondary }]}>{time}</Text>
          </View>
        </View>
        <TileDate month={month} day={day} />
      </View>
    </>
  );

  const containerStyle = [isLarge ? styles.cardLarge : styles.cardSmall, style];

  if (onPress) {
    return <Pressable style={containerStyle} onPress={onPress}>{content}</Pressable>;
  }
  return <View style={containerStyle}>{content}</View>;
}

CardEvent.sizes = ['large', 'small'];

const styles = StyleSheet.create({
  cardLarge: { flexDirection: 'column', gap: sizes.gapMedium, width: '100%' },
  cardSmall: { flexDirection: 'row', gap: sizes.gapMedium, alignItems: 'stretch', minHeight: 70 },

  imageWrapLarge: {
    width: '100%',
    aspectRatio: 398 / 254,
    borderRadius: sizes.cornerMedium,
    overflow: 'hidden',
  },
  imageWrapSmall: {
    width: 91,
    alignSelf: 'stretch',
    borderRadius: sizes.cornerMedium,
    overflow: 'hidden',
  },
  image: { width: '100%', height: '100%' },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizes.padXsmall,
  },
  overlayText: {
    fontFamily: fonts.headline,
    fontSize: sizes.fontDisplay,
    lineHeight: sizes.fontDisplay,
    color: '#ffffff',
    textAlign: 'center',
  },

  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    minWidth: 0,
    gap: sizes.gapSmall,
  },
  contentCol: { flex: 1, justifyContent: 'space-between', gap: sizes.gapXsmall, minWidth: 0 },
  title: { fontFamily: fonts.sansMedium, fontSize: sizes.fontLarge, lineHeight: sizes.fontLarge * 1.3 },
  location: { fontFamily: fonts.mono, fontSize: sizes.fontSmall, lineHeight: 18 },
  meta: { flexDirection: 'row', alignItems: 'center', gap: sizes.gapSmall },
  people: { flexDirection: 'row', alignItems: 'center', gap: sizes.gapXsmall },
  metaText: { fontFamily: fonts.mono, fontSize: sizes.fontSmall, lineHeight: 18 },
  dot: { width: 2, height: 2, borderRadius: 1 },
});
