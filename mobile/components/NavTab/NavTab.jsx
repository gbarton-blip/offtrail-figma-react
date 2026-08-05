import { Pressable, View, StyleSheet } from 'react-native';
import BrandIcon from '../BrandIcon/BrandIcon';
import useTheme from '../../theme/useTheme';

// Ported from src/components/NavTab/NavTab.jsx (<button> -> Pressable).
export default function NavTab({ icon = 'home', active = false, onPress }) {
  const t = useTheme();

  return (
    <Pressable style={styles.tab} onPress={onPress}>
      <View
        style={[styles.indicator, { backgroundColor: t.colorBrandPrimary, opacity: active ? 1 : 0 }]}
      />
      <BrandIcon glyph={icon} color={active ? t.colorBrandPrimary : t.colorPrimary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 48,
    height: 52,
    paddingBottom: 8,
  },
  indicator: { width: '100%', height: 2 },
});
