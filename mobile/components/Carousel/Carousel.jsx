import { View, Text, ScrollView, StyleSheet } from 'react-native';
import useTheme from '../../theme/useTheme';
import { sizes, fonts } from '../../theme/tokens';

// Ported from src/components/Carousel/Carousel.jsx. The horizontal overflow
// track becomes a horizontal ScrollView; the CSS negative margins that let the
// track bleed to the screen edges become a negative marginHorizontal with
// matching content padding.
export default function Carousel({ title, linkLabel = 'View all', children, style }) {
  const t = useTheme();

  return (
    <View style={[styles.carousel, style]}>
      {title ? (
        <View style={styles.header}>
          <Text style={[styles.title, { color: t.colorPrimary }]}>{title}</Text>
          <Text style={[styles.link, { color: t.colorSecondary }]}>{String(linkLabel).toUpperCase()}</Text>
        </View>
      ) : null}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.track}
        contentContainerStyle={styles.trackContent}
      >
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: { gap: sizes.gapMedium },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontFamily: fonts.sansMedium, fontSize: sizes.fontLarge, lineHeight: sizes.fontLarge * 1.3 },
  link: { fontFamily: fonts.mono, fontSize: sizes.fontSmall, lineHeight: 18 },
  track: { marginHorizontal: -sizes.padMedium },
  trackContent: { gap: sizes.gapSmall, paddingHorizontal: sizes.padMedium, alignItems: 'flex-start' },
});
