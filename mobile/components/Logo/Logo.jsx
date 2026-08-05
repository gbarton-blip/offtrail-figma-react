import Svg, { Path, Circle } from 'react-native-svg';
import useTheme from '../../theme/useTheme';

// Ported from src/components/Logo/Logo.jsx — the Offtrail wordmark/brandmark.
// `fill="currentColor"` becomes an explicit color (defaults to theme primary).
export default function Logo({ color, width = 58, height = 27 }) {
  const t = useTheme();
  const c = color ?? t.colorPrimary;

  return (
    <Svg width={width} height={height} viewBox="0 0 58 27" fill="none">
      {/* Brand mark ring */}
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.42 26.84a13.42 13.42 0 1 0 0-26.84 13.42 13.42 0 0 0 0 26.84Zm0-4.89a8.53 8.53 0 1 0 0-17.06 8.53 8.53 0 0 0 0 17.06Z"
        fill={c}
      />
      {/* Dot pattern */}
      <Circle cx={34.57} cy={3.49} r={3.405} fill={c} />
      <Circle cx={44.58} cy={3.49} r={3.405} fill={c} />
      <Circle cx={44.58} cy={13.5} r={3.405} fill={c} />
      <Circle cx={44.58} cy={23.51} r={3.405} fill={c} />
      <Circle cx={54.59} cy={3.49} r={3.405} fill={c} />
    </Svg>
  );
}
