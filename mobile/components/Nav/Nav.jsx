import { View, StyleSheet } from 'react-native';
import NavTab from '../NavTab/NavTab';
import useTheme from '../../theme/useTheme';
import { sizes } from '../../theme/tokens';

// Ported from src/components/Nav/Nav.jsx. Dropped react-router-dom — the active
// tab and navigation are driven by props from the hosting screen.
const navItems = [
  { key: 'Home', icon: 'home' },
  { key: 'Map', icon: 'location' },
  { key: 'Profile', icon: 'user' },
];

export default function Nav({ active = 'Home', onNavigate }) {
  const t = useTheme();

  return (
    <View style={[styles.nav, { backgroundColor: t.bgBrandPrimary, borderTopColor: t.colorDim }]}>
      <View style={styles.items}>
        {navItems.map((item) => (
          <NavTab
            key={item.key}
            icon={item.icon}
            active={active === item.key}
            onPress={() => onNavigate?.(item.key)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: '100%',
    height: 64,
    borderTopWidth: 1,
    alignItems: 'center',
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizes.gapXxlarge,
  },
});
