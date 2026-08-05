import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { sizes, fonts } from '../../theme/tokens';

// Ported from src/components/CardGuide/CardGuide.jsx. The CSS bottom scrim
// (linear-gradient transparent -> black, 0.76 opacity) becomes a LinearGradient.
export default function CardGuide({ src, name = 'Amelia B.', category = 'SURFING', style }) {
  return (
    <View style={[styles.card, style]}>
      <Image source={src} style={styles.image} resizeMode="cover" />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.76)']}
        style={styles.scrim}
        pointerEvents="none"
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{String(category).toUpperCase()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: 162,
    aspectRatio: 162 / 221,
    padding: sizes.padSmall,
    borderRadius: sizes.cornerMedium,
    overflow: 'hidden',
  },
  image: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' },
  scrim: { position: 'absolute', left: 0, right: 0, bottom: 0, height: 110 },
  info: { width: '100%' },
  name: { fontFamily: fonts.sansMedium, fontSize: sizes.fontLarge, lineHeight: sizes.fontLarge * 1.3, color: '#ffffff' },
  category: { fontFamily: fonts.mono, fontSize: sizes.fontSmall, lineHeight: 18, color: 'rgba(255,255,255,0.6)' },
});
