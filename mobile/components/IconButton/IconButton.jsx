import { Pressable, StyleSheet } from 'react-native';
import BrandIcon from '../BrandIcon/BrandIcon';
import useTheme from '../../theme/useTheme';
import { sizes } from '../../theme/tokens';

// Ported from src/components/IconButton/IconButton.jsx (<button> -> Pressable).
// `flip` mirrors the glyph horizontally (used for the back caret on EventDetail).
export default function IconButton({
  glyph = 'caret',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  flip = false,
  onPress,
  style,
}) {
  const t = useTheme();

  const variantStyle = {
    primary: { backgroundColor: t.colorBrandPrimary, color: t.colorOnReverse, borderColor: 'transparent', borderWidth: 0 },
    outline: { backgroundColor: 'transparent', color: t.colorBrandPrimary, borderColor: t.colorBrandPrimary, borderWidth: sizes.adsBorder },
    neutral: { backgroundColor: t.colorDim, color: t.colorPrimary, borderColor: t.colorDim, borderWidth: sizes.sdsBorder },
  }[variant];

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      style={[
        styles.base,
        size === 'medium' ? styles.medium : styles.small,
        {
          backgroundColor: variantStyle.backgroundColor,
          borderColor: variantStyle.borderColor,
          borderWidth: variantStyle.borderWidth,
        },
        disabled && styles.disabled,
        style,
      ]}
    >
      <BrandIcon glyph={glyph} color={variantStyle.color} size={size === 'medium' ? 24 : 20} flip={flip} />
    </Pressable>
  );
}

IconButton.variants = ['primary', 'outline', 'neutral'];
IconButton.sizes = ['medium', 'small'];

const styles = StyleSheet.create({
  base: { alignItems: 'center', justifyContent: 'center', borderRadius: sizes.cornerFull, overflow: 'hidden' },
  medium: { width: 40, height: 40 },
  small: { width: 32, height: 32 },
  disabled: { opacity: 0.2 },
});
