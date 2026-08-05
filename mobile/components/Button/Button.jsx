import { Pressable, Text, StyleSheet, View } from 'react-native';
import Icon from '../Icon/Icon';
import useTheme from '../../theme/useTheme';
import { sizes, fonts } from '../../theme/tokens';

// Ported from src/components/Button/Button.jsx (<button> -> Pressable).
export default function Button({
  label = 'Button',
  colour = 'brand',
  size = 'large',
  icon = false,
  onPress,
  style,
}) {
  const t = useTheme();

  const colourStyle = {
    brand: { backgroundColor: t.colorBrandPrimary, textColor: t.colorOnReverse },
    'transparent-white': { backgroundColor: t.bgOnBrand, textColor: t.colorPrimary },
    'transparent-black': { backgroundColor: t.colorOnReverseSecondary, textColor: t.colorPrimary },
  }[colour];

  const isCenteredMedium = colour === 'transparent-white' && size === 'medium';

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        size === 'large' ? styles.large : styles.medium,
        isCenteredMedium && styles.mediumCentered,
        { backgroundColor: colourStyle.backgroundColor },
        style,
      ]}
    >
      <Text style={[styles.label, { color: colourStyle.textColor }]}>{label.toUpperCase()}</Text>
      {icon && (
        <View style={styles.icon}>
          <Icon glyph="out" color={colourStyle.textColor} />
        </View>
      )}
    </Pressable>
  );
}

Button.colours = ['brand', 'transparent-white', 'transparent-black'];
Button.sizes = ['large', 'medium'];

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    borderRadius: sizes.cornerMedium,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  large: { width: 140, height: 70, padding: sizes.padSmall },
  medium: {
    paddingVertical: sizes.padSmall,
    paddingHorizontal: sizes.padMedium,
    flexDirection: 'row',
    gap: sizes.gapSmall,
    alignSelf: 'flex-start',
  },
  mediumCentered: { alignItems: 'center', justifyContent: 'center' },
  label: { fontFamily: fonts.mono, fontSize: sizes.fontSmall, lineHeight: 18 },
  icon: { position: 'absolute', top: sizes.padXsmall, right: sizes.padXsmall },
});
