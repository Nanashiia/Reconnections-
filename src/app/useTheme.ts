import { useEffect } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { DEFAULT_SETTINGS, db } from '../db/db';

/** Applique le thème (auto = suit le réglage du téléphone, clair, sombre). */
export function useTheme() {
  const mode = useLiveQuery(async () => (await db.settings.get('app'))?.theme, []) ?? DEFAULT_SETTINGS.theme;

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const dark = mode === 'dark' || (mode === 'auto' && media.matches);
      document.documentElement.classList.toggle('dark', dark);
    };
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, [mode]);
}
