// OTDS design tokens, ported from the web app's src/index.css.
// Size tokens are mode-independent; color tokens have Light/Dark variants.
// px values become plain numbers (React Native uses density-independent points).
//
// Font families: the web app uses 'Workbench' (headline), 'Inter' (sans) and
// 'Geist Mono' (mono). The matching Google Fonts are loaded in App.js via
// @expo-google-fonts; since RN custom fonts don't synthesize weight, each weight
// is its own family. Reference these names directly as `fontFamily` (and omit
// `fontWeight`, which custom fonts ignore).
export const fonts = {
  headline: 'Workbench_400Regular',
  sans: 'Inter_400Regular',
  sansMedium: 'Inter_500Medium',
  sansSemiBold: 'Inter_600SemiBold',
  mono: 'GeistMono_400Regular',
};

// --- Mode-independent sizing tokens ---
export const sizes = {
  // Font sizes
  font10xl: 88,
  font7xl: 58,
  fontDisplay: 40,
  font3xl: 28,
  fontXl: 24,
  fontLarge: 18,
  fontMedium: 16,
  fontSmall: 14,
  fontBody: 16,
  fontHeading: 24,

  // Padding
  padXxsmall: 4,
  padXsmall: 8,
  padSmall: 12,
  padMedium: 16,
  padLarge: 24,
  padXlarge: 32,
  padXxlarge: 56,

  // Gap
  gapXsmall: 4,
  gapSmall: 8,
  gapMedium: 16,
  gapLarge: 24,
  gapXlarge: 40,
  gapXxlarge: 56,

  // Letter spacing
  letterSpacingSnug: -2,

  // Corner radius
  cornerSmall: 4,
  cornerMedium: 8,
  cornerLarge: 12,
  cornerFull: 999,
  adsCorner: 32,

  // Borders
  border: 0.5,
  borderBottom: 1,
  adsBorder: 1,
  sdsBorder: 1,
};

// --- Semantic + palette colors, Light ---
const lightColors = {
  colorPrimary: '#2c3039',
  colorSecondary: 'rgba(16, 7, 27, 0.6)',
  colorTertiary: 'rgba(16, 7, 27, 0.4)',
  colorDim: 'rgba(16, 7, 27, 0.09)',
  colorBrandPrimary: '#e76f00',
  colorBrandSecondary: '#ffbf58',
  colorBrandTertiary: '#e76f00',
  colorAlt: '#5f788e',
  colorOnReverse: '#ffffff',
  colorOnReverseSecondary: 'rgba(255, 255, 255, 0.2)',

  borderPrimary: '#e76f00',
  borderSecondary: '#86a8c0',

  bgBrandPrimary: '#ffffff',
  bgBrandSecondary: '#d2edff',
  bgOnBrand: 'rgba(16, 7, 27, 0.09)',
  bgMap: '#8497a8',

  black100: '#10071b',
  black200: 'rgba(16, 7, 27, 0.8)',
  black300: 'rgba(16, 7, 27, 0.6)',
  black400: 'rgba(16, 7, 27, 0.4)',
  black500: 'rgba(16, 7, 27, 0.2)',
  black600: 'rgba(16, 7, 27, 0.09)',

  white100: '#ffffff',
  white200: 'rgba(255, 255, 255, 0.8)',
  white300: 'rgba(255, 255, 255, 0.6)',
  white400: 'rgba(255, 255, 255, 0.4)',
  white500: 'rgba(255, 255, 255, 0.2)',
  white600: 'rgba(255, 255, 255, 0.1)',

  grey100: '#353535',
  grey200: '#5a5a5a',
  grey300: '#848484',
  grey400: '#aaaaaa',
  grey500: '#d4d4d4',
  grey600: '#e8e8e8',

  orange100: '#732c00',
  orange200: '#9e4700',
  orange300: '#e76f00',
  orange400: '#ff932e',
  orange500: '#ffbf58',
  orange600: '#efe5cd',

  blue100: '#2c3039',
  blue200: '#424857',
  blue300: '#5f788e',
  blue400: '#86a8c0',
  blue500: '#bbe4ff',
  blue600: '#d2edff',
};

// --- Semantic colors, Dark (palette colors are shared) ---
const darkColors = {
  ...lightColors,
  colorPrimary: '#ffffff',
  colorSecondary: 'rgba(255, 255, 255, 0.6)',
  colorTertiary: 'rgba(255, 255, 255, 0.4)',
  colorDim: 'rgba(255, 255, 255, 0.1)',
  colorBrandPrimary: '#ff932e',
  colorBrandSecondary: '#9e4700',
  colorBrandTertiary: '#ffbf58',
  colorAlt: '#d2edff',
  colorOnReverse: '#2c3039',
  colorOnReverseSecondary: 'rgba(16, 7, 27, 0.2)',

  borderPrimary: '#ffbf58',
  borderSecondary: '#bbe4ff',

  bgBrandPrimary: '#10071b',
  bgBrandSecondary: '#424857',
  bgOnBrand: 'rgba(255, 255, 255, 0.1)',
  bgMap: '#595360',
};

// Returns the full token object for a mode: all sizing tokens + the mode's colors.
export function makeTheme(mode) {
  const colors = mode === 'Dark' ? darkColors : lightColors;
  return { ...sizes, ...colors, mode, fonts };
}

export const themes = {
  Light: makeTheme('Light'),
  Dark: makeTheme('Dark'),
};
