import useSystemMode from '../hooks/useSystemMode';
import { themes } from './tokens';

// Resolves the active OTDS token object based on the OS light/dark setting.
// Returns the flat token map (sizes + colors) with a `mode` field ('Light'|'Dark').
export default function useTheme() {
  const mode = useSystemMode();
  return themes[mode];
}
