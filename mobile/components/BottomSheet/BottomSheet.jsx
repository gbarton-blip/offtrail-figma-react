import { View, StyleSheet } from 'react-native';
import useTheme from '../../theme/useTheme';
import { sizes } from '../../theme/tokens';

// Ported from src/components/BottomSheet/BottomSheet.jsx. Static (no drag
// gestures), matching the web implementation — just a rounded top container
// with a grab handle.
export default function BottomSheet({ size = 'Default', children, style }) {
  const t = useTheme();

  return (
    <View
      style={[
        styles.sheet,
        { backgroundColor: t.bgBrandPrimary },
        size === 'Tall' ? styles.tall : styles.default,
        style,
      ]}
    >
      <View style={styles.handleBar}>
        <View style={[styles.handle, { backgroundColor: t.colorTertiary }]} />
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

BottomSheet.sizes = ['Default', 'Tall'];

const styles = StyleSheet.create({
  sheet: {
    width: '100%',
    alignItems: 'center',
    borderTopLeftRadius: sizes.cornerLarge,
    borderTopRightRadius: sizes.cornerLarge,
  },
  default: { height: 320 },
  tall: { height: 520 },
  handleBar: { alignItems: 'center', justifyContent: 'center', width: '100%', height: 28 },
  handle: { width: 40, height: 5, borderRadius: sizes.cornerFull },
  content: { flex: 1, width: '100%' },
});
