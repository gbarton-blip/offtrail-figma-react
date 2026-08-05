# Offtrail — Mobile (React Native / Expo)

A React Native port of the Screentime Offtrail web prototype, built with [Expo](https://expo.dev/). It mirrors the web app's five screens — Landing, Home, Map, Profile, and Event Detail — reusing the same image assets and event data from the web project's `../src/assets` and a ported OTDS design-token theme.

## Relationship to the web app

This `mobile/` folder is a standalone Expo app that lives alongside the original Vite web app. It is independent (its own `package.json` / `node_modules`) but **reuses the web app's images** from `../src/assets/images` — Metro is configured (see `metro.config.js`) to watch that folder, and `data/events.js` / the screens `require()` the PNGs directly. The web app is unaffected by anything here.

## Prerequisites

- Node.js
- The [Expo Go](https://expo.dev/go) app on a physical iOS/Android device, **or** an iOS Simulator / Android Emulator.

## Install

```sh
cd mobile
npm install
```

## Run

```sh
npx expo start
```

Then:
- Scan the QR code with **Expo Go** (Android) or the Camera app (iOS), or
- press `i` to open the iOS Simulator, or `a` for the Android Emulator.

## Architecture / how it maps to the web app

| Web (Vite) | Mobile (Expo) |
| --- | --- |
| `react-router-dom` routes (`src/main.jsx`) | React Navigation native stack (`App.js`) |
| `src/App.jsx`, `Home/Map/Profile/EventDetail.jsx` | `screens/*Screen.jsx` |
| `src/components/*` (CSS) | `components/*` (`StyleSheet`) |
| CSS custom properties in `src/index.css` | `theme/tokens.js` (+ `useTheme`) |
| `useSystemMode` via `matchMedia` | `useColorScheme()` (`hooks/useSystemMode.js`) |
| inline SVG / `<img>` | `react-native-svg` / `<Image>` |
| `react-map-gl` + MapLibre | `react-native-maps` (`components/MapView`) |
| `backdrop-filter: blur` | `expo-blur` |
| CSS gradients | `expo-linear-gradient` |

Only the components used by the five navigable screens were ported (~23 components). Unused web design-system components (form inputs, Dropdown, Toast, the compass widget, the design overview, etc.) were intentionally left out.

## Notes & known limitations

- **Map:** uses `react-native-maps` — Apple Maps on iOS (no key), Google Maps on Android. It runs in Expo Go; if the map ever fails to load there, create a development build instead (`npx expo run:ios` / `npx expo run:android`). A standalone Android build also needs a Google Maps API key in `app.json`.
- **Fonts:** the web's `Workbench` (headline) / `Inter` (sans) / `Geist Mono` (mono) families are loaded via `@expo-google-fonts` + `expo-font` in `App.js` and applied through `theme/tokens.js` (`fonts`). Since RN custom fonts don't synthesize weight, each weight is its own family (`Inter_400Regular`, `Inter_500Medium`, `Inter_600SemiBold`).
- **Radar rings (TileLocation):** uses the PNG radar layers from the shared assets; the per-mode `.svg` radar layer is skipped because RN's `Image` can't render SVG files without a transformer.
- **BottomSheet:** static (no drag gestures), matching the current web implementation.
