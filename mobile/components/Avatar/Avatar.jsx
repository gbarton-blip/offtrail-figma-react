import { View, Image, StyleSheet } from 'react-native';
import { sizes } from '../../theme/tokens';

// Ported from src/components/Avatar/Avatar.jsx (<img> -> Image).
export default function Avatar({ src, size = 80, style }) {
  return (
    <View style={[styles.avatar, { width: size, height: size }, style]}>
      <Image source={src} style={styles.image} resizeMode="cover" />
    </View>
  );
}

Avatar.sizes = [80, 56, 40, 32];

const styles = StyleSheet.create({
  avatar: { overflow: 'hidden', borderRadius: sizes.cornerFull },
  image: { width: '100%', height: '100%' },
});
