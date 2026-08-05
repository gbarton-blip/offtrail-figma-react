import { View, Text, StyleSheet } from 'react-native';
import Button from '../Button/Button';
import useTheme from '../../theme/useTheme';
import { sizes, fonts } from '../../theme/tokens';

// Ported from src/components/EventNav/EventNav.jsx.
export default function EventNav({
  price = 'Free',
  time = '8:30PM–12:00AM',
  location = 'Los Angeles, CA',
  buttonLabel = 'REGISTER',
  onPress,
}) {
  const t = useTheme();

  return (
    <View style={[styles.nav, { backgroundColor: t.bgBrandSecondary, borderTopColor: t.colorDim }]}>
      <View style={styles.info}>
        <Text style={[styles.price, { color: t.colorPrimary }]}>{String(price).toUpperCase()}</Text>
        <Text style={[styles.line, { color: t.colorSecondary }]}>{String(time).toUpperCase()}</Text>
        <Text style={[styles.line, { color: t.colorSecondary }]}>{String(location).toUpperCase()}</Text>
      </View>
      <Button label={buttonLabel} colour="brand" size="large" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: '100%',
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: sizes.padMedium,
    paddingHorizontal: sizes.padMedium,
    paddingBottom: sizes.padXlarge,
  },
  info: { gap: sizes.gapXsmall, alignItems: 'flex-start' },
  price: { fontFamily: fonts.mono, fontSize: sizes.fontSmall, lineHeight: 18 },
  line: { fontFamily: fonts.mono, fontSize: sizes.fontSmall, lineHeight: 18 },
});
