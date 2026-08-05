import { View, Text, StyleSheet } from 'react-native';
import useTheme from '../../theme/useTheme';
import { sizes, fonts } from '../../theme/tokens';

// Ported from src/components/TileDate/TileDate.jsx.
export default function TileDate({ day = '28', month = 'Jun' }) {
  const t = useTheme();

  return (
    <View
      style={[
        styles.tile,
        { backgroundColor: t.bgBrandSecondary, borderColor: t.borderSecondary, borderBottomWidth: sizes.borderBottom },
      ]}
    >
      <Text style={[styles.month, { color: t.colorAlt }]}>{String(month).toUpperCase()}</Text>
      <Text style={[styles.day, { color: t.colorAlt }]}>{String(day).toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    gap: sizes.padXxsmall,
    alignItems: 'center',
    width: 54,
    paddingVertical: sizes.padSmall,
    paddingHorizontal: sizes.padXsmall,
    borderWidth: sizes.border,
    borderRadius: sizes.cornerMedium,
  },
  month: { fontFamily: fonts.mono, fontSize: sizes.fontSmall, lineHeight: 18 },
  day: { fontFamily: fonts.headline, fontSize: sizes.fontXl, lineHeight: sizes.fontXl },
});
