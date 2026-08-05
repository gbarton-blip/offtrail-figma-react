import { useState } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import useTheme from '../../theme/useTheme';
import { sizes, fonts } from '../../theme/tokens';

// Ported from src/components/Chip/Chip.jsx (<button> -> Pressable). Inactive
// chips sit over the map with a CSS backdrop-filter blur -> BlurView.
export default function Chip({ label = 'Tag', active: initialActive = false }) {
  const t = useTheme();
  const [active, setActive] = useState(initialActive);

  return (
    <Pressable
      onPress={() => setActive((a) => !a)}
      style={[
        styles.chip,
        { borderColor: t.colorDim },
        active
          ? { backgroundColor: t.colorBrandPrimary }
          : { backgroundColor: t.colorDim },
      ]}
    >
      {!active ? (
        <BlurView
          intensity={30}
          tint={t.mode === 'Dark' ? 'dark' : 'light'}
          style={StyleSheet.absoluteFill}
        />
      ) : null}
      <Text style={[styles.label, { color: active ? t.colorOnReverse : t.colorPrimary }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: 40,
    paddingHorizontal: sizes.padMedium,
    borderWidth: 1,
    borderRadius: sizes.cornerFull,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  label: { fontFamily: fonts.sansSemiBold, fontSize: sizes.fontMedium, lineHeight: sizes.fontMedium * 1.4 },
});
