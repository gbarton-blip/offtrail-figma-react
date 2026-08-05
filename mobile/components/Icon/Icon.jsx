import Svg, { Path, Circle } from 'react-native-svg';
import useTheme from '../../theme/useTheme';

// Ported from src/components/Icon/Icon.jsx. The web version used inline SVG with
// `stroke="currentColor"`; here each glyph is a function of `color` so callers
// can tint it (defaults to the theme's primary text color).
const glyphs = {
  x: (c) => (
    <Path d="M12.5 8l-4 4m0-4l4 4" stroke={c} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  ),
  check: (c) => (
    <Path d="M5.5 8.5l2.5 2.5 4-5" stroke={c} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  info: (c) => (
    <>
      <Circle cx={8} cy={8} r={6} stroke={c} strokeWidth={1.25} fill="none" />
      <Path d="M8 7.5v3.5" stroke={c} strokeWidth={1.5} strokeLinecap="round" />
      <Circle cx={8} cy={5.5} r={0.75} fill={c} />
    </>
  ),
  warning: (c) => (
    <>
      <Path d="M8 2.5L1.5 13.5h13L8 2.5z" stroke={c} strokeWidth={1.25} strokeLinejoin="round" fill="none" />
      <Path d="M8 6.5v3" stroke={c} strokeWidth={1.5} strokeLinecap="round" />
      <Circle cx={8} cy={11.5} r={0.75} fill={c} />
    </>
  ),
  plus: (c) => <Path d="M8 4v8M4 8h8" stroke={c} strokeWidth={1.5} strokeLinecap="round" />,
  out: (c) => (
    <>
      <Path d="M6 4H4v8h8v-2" stroke={c} strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Path d="M8 8l4-4" stroke={c} strokeWidth={1.25} strokeLinecap="round" />
      <Path d="M9.5 4H12v2.5" stroke={c} strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  question: (c) => (
    <>
      <Path d="M6 5.5a2 2 0 1 1 2.5 1.936V9" stroke={c} strokeWidth={1.25} strokeLinecap="round" fill="none" />
      <Circle cx={8} cy={11.5} r={0.75} fill={c} />
    </>
  ),
  'caret-down': (c) => (
    <Path d="M4 6l4 4 4-4" stroke={c} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  'caret-up': (c) => (
    <Path d="M4 10l4-4 4 4" stroke={c} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  person: (c) => (
    <>
      <Circle cx={8} cy={5} r={2.25} stroke={c} strokeWidth={1.25} fill="none" />
      <Path d="M3.5 13.5c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5" stroke={c} strokeWidth={1.25} strokeLinecap="round" fill="none" />
    </>
  ),
};

export default function Icon({ glyph = 'x', color, size = 16 }) {
  const t = useTheme();
  const render = glyphs[glyph];
  if (!render) return null;
  const c = color ?? t.colorPrimary;

  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      {render(c)}
    </Svg>
  );
}

Icon.glyphs = Object.keys(glyphs);
