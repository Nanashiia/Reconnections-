import { useLiveQuery } from 'dexie-react-hooks';
import { DEFAULT_SETTINGS, db, updateSettings } from '../db/db';
import type { ThemeMode } from '../db/types';
import { AutoIcon, MoonIcon, SunIcon } from './icons';

const next: Record<ThemeMode, ThemeMode> = { auto: 'light', light: 'dark', dark: 'auto' };
const labels: Record<ThemeMode, string> = { auto: 'Thème automatique', light: 'Thème clair', dark: 'Thème sombre' };

/** Bouton rond qui alterne automatique → clair → sombre. */
export function ThemeToggle() {
  const mode = useLiveQuery(async () => (await db.settings.get('app'))?.theme, []) ?? DEFAULT_SETTINGS.theme;
  const Icon = mode === 'auto' ? AutoIcon : mode === 'light' ? SunIcon : MoonIcon;
  return (
    <button
      type="button"
      onClick={() => updateSettings({ theme: next[mode] })}
      aria-label={`${labels[mode]} — toucher pour changer`}
      title={labels[mode]}
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-ink-soft ring-1 ring-line transition-colors duration-500 active:bg-surface-2"
    >
      <Icon />
    </button>
  );
}
