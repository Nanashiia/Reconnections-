import Dexie, { type EntityTable } from 'dexie';
import type {
  Activity,
  BodyScan,
  BrainDump,
  BreathingSession,
  CheckIn,
  GratitudeEntry,
  GtgExercise,
  GtgMaxTest,
  GtgSet,
  Habit,
  HabitCheck,
  HydrationLog,
  Intention,
  JournalEntry,
  MeditationSession,
  Settings,
  SleepLog,
} from './types';

/**
 * Base de données locale (IndexedDB), tout reste sur l'appareil.
 * Pour faire évoluer le schéma : ajouter une nouvelle `this.version(N)`,
 * ne jamais modifier une version déjà publiée.
 */
export class ReconnexionDB extends Dexie {
  settings!: EntityTable<Settings, 'id'>;

  journal!: EntityTable<JournalEntry, 'id'>;
  gratitude!: EntityTable<GratitudeEntry, 'date'>;
  breathing!: EntityTable<BreathingSession, 'id'>;
  meditation!: EntityTable<MeditationSession, 'id'>;
  brainDumps!: EntityTable<BrainDump, 'id'>;

  sleep!: EntityTable<SleepLog, 'date'>;
  hydration!: EntityTable<HydrationLog, 'date'>;
  activities!: EntityTable<Activity, 'id'>;
  gtgExercises!: EntityTable<GtgExercise, 'id'>;
  gtgSets!: EntityTable<GtgSet, 'id'>;
  gtgMaxTests!: EntityTable<GtgMaxTest, 'id'>;

  checkins!: EntityTable<CheckIn, 'date'>;
  bodyScans!: EntityTable<BodyScan, 'id'>;
  intentions!: EntityTable<Intention, 'date'>;
  habits!: EntityTable<Habit, 'id'>;
  habitChecks!: Dexie.Table<HabitCheck, [number, string]>;

  constructor() {
    super('reconnexion');
    this.version(1).stores({
      settings: 'id',

      journal: '++id, date',
      gratitude: 'date',
      breathing: '++id, date',
      meditation: '++id, date',
      brainDumps: '++id, date, createdAt',

      sleep: 'date',
      hydration: 'date',
      activities: '++id, date, type',
      gtgExercises: '++id, active',
      gtgSets: '++id, date, exerciseId, [exerciseId+date]',
      gtgMaxTests: '++id, exerciseId, date, [exerciseId+date]',

      checkins: 'date',
      bodyScans: '++id, date',
      intentions: 'date',
      habits: '++id, order, archived',
      habitChecks: '[habitId+date], date, habitId',
    });
  }
}

export const db = new ReconnexionDB();

export const DEFAULT_SETTINGS: Settings = {
  id: 'app',
  theme: 'auto',
  hydrationGoal: 8,
  gtg: {
    startHour: 9,
    endHour: 20,
    intervalMinutes: 60,
    intensity: 0.5,
    maxTestIntervalDays: 14,
  },
};

/** Lit les réglages, en complétant avec les valeurs par défaut. */
export async function getSettings(): Promise<Settings> {
  const s = await db.settings.get('app');
  return { ...DEFAULT_SETTINGS, ...s, gtg: { ...DEFAULT_SETTINGS.gtg, ...s?.gtg } };
}

export async function updateSettings(patch: Partial<Omit<Settings, 'id'>>): Promise<void> {
  const current = await getSettings();
  await db.settings.put({ ...current, ...patch, id: 'app' });
}
