import Svg, { Path, G } from 'react-native-svg';
import useTheme from '../../theme/useTheme';
import glyphs from './glyphs.json';

// Ported from src/components/BrandIcon/BrandIcon.jsx. Glyph path data lives in
// glyphs.json (extracted from the web source). Each glyph has its own viewBox;
// the web version centers it inside a 24x24 box via a translate transform —
// replicated here with <G>. `fill="currentColor"` becomes an explicit color.
export default function BrandIcon({ glyph = 'home', color, size = 24, flip = false }) {
  const t = useTheme();
  const icon = glyphs[glyph];
  if (!icon) return null;

  const c = color ?? t.colorPrimary;
  const [, , wStr, hStr] = icon.viewBox.split(' ');
  const dx = (24 - parseFloat(wStr)) / 2;
  const dy = (24 - parseFloat(hStr)) / 2;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={flip ? { transform: [{ scaleX: -1 }] } : undefined}
    >
      <G translateX={dx} translateY={dy}>
        <Path d={icon.d} fill={c} />
      </G>
    </Svg>
  );
}

BrandIcon.glyphs = Object.keys(glyphs);
