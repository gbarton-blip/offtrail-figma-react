import { View, Text, StyleSheet } from 'react-native';
import useTheme from '../../theme/useTheme';
import { sizes, fonts } from '../../theme/tokens';

// Ported from src/components/TileCallout/TileCallout.jsx.
export default function TileCallout({ label = 'Label', value = 'Value', variant = 'Subtle', style }) {
  const t = useTheme();
  const bg = variant === 'Highlight' ? t.bgBrandSecondary : t.bgOnBrand;

  return (
    <View
      style={[
        styles.tile,
        { backgroundColor: bg, borderColor: t.borderSecondary, borderBottomWidth: sizes.borderBottom },
        style,
      ]}
    >
      <Text style={[styles.label, { color: t.colorAlt }]}>{String(label).toUpperCase()}</Text>
      <Text style={[styles.value, { color: t.colorAlt }]} numberOfLines={1}>{value}</Text>
    </View>
  );
}

TileCallout.variants = ['Subtle', 'Highlight'];

const styles = StyleSheet.create({
  tile: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: 170,
    height: 96,
    padding: sizes.padSmall,
    borderWidth: sizes.border,
    borderRadius: sizes.cornerMedium,
    overflow: 'hidden',
  },
  label: { fontFamily: fonts.mono, fontSize: sizes.fontSmall, lineHeight: 18, width: '100%' },
  value: { fontFamily: fonts.headline, fontSize: sizes.fontXl, lineHeight: sizes.fontXl, width: '100%' },
});
