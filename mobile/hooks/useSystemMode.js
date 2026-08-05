import { useColorScheme } from 'react-native';

// RN port of the web hook (src/hooks/useSystemMode.js), which read
// window.matchMedia('(prefers-color-scheme: dark)'). Here useColorScheme()
// tracks the OS appearance and returns 'dark' | 'light' | null.
export default function useSystemMode() {
  const scheme = useColorScheme();
  return scheme === 'dark' ? 'Dark' : 'Light';
}
