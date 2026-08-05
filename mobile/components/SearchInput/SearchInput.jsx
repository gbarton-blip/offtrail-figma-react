import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import BrandIcon from '../BrandIcon/BrandIcon';
import useTheme from '../../theme/useTheme';
import { sizes, fonts } from '../../theme/tokens';

// Ported from src/components/SearchInput/SearchInput.jsx (<input> -> TextInput;
// CSS backdrop-filter blur -> BlurView).
export default function SearchInput({
  value,
  defaultValue = '',
  placeholder = 'Find things to do...',
  onChangeText,
  style,
}) {
  const t = useTheme();
  const [internal, setInternal] = useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  function handleChange(text) {
    if (!isControlled) setInternal(text);
    onChangeText?.(text);
  }

  return (
    <View style={[styles.wrap, { backgroundColor: t.bgOnBrand, borderColor: t.colorDim }, style]}>
      <BlurView intensity={30} tint={t.mode === 'Dark' ? 'dark' : 'light'} style={StyleSheet.absoluteFill} />
      <BrandIcon glyph="search" size={20} color={t.colorSecondary} />
      <TextInput
        style={[styles.input, { color: t.colorPrimary }]}
        value={current}
        placeholder={placeholder}
        placeholderTextColor={t.colorSecondary}
        onChangeText={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    gap: sizes.padSmall,
    alignItems: 'center',
    width: 320,
    maxWidth: '100%',
    paddingVertical: sizes.padSmall,
    paddingHorizontal: sizes.padMedium,
    borderWidth: 1,
    borderRadius: sizes.cornerFull,
    overflow: 'hidden',
  },
  input: { flex: 1, fontFamily: fonts.sans, fontSize: sizes.fontMedium, padding: 0, minWidth: 0 },
});
