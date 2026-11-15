/**
 * Types des données stockées localement.
 * `date` = jour concerné au format YYYY-MM-DD ; `createdAt` = horodatage (ms).
 */

export type Score = 1 | 2 | 3 | 4 | 5;

// ---------- Réglages ----------
export type ThemeMode = 'auto' | 'light' | 'dark';

export interface Settings {
  id: 'app'; // une seule ligne
  theme: ThemeMode;
  hydrationGoal: number; // verres par jour
  gtg: {
    startHour: number; // début de la plage (ex. 9)
    endHour: number; // fin de la plage (ex. 20)
    intervalMinutes: number; // espacement des séries (60 par défaut)
    intensity: number; // part du max par série (0.5 par défaut)
    maxTestIntervalDays: number; // test du max tous les X jours (14 par défaut)
  };
}

// ---------- Mental ----------
export interface JournalEntry {
  id?: number;
  date: string;
  promptId: string; // identifiant de la question du jour
  prompt: string; // texte de la question (conservé tel quel)
  answer: string;
  createdAt: number;
  updatedAt: number;
}

export interface GratitudeEntry {
  date: string; // une entrée par soir
  items: [string, string, string];
  updatedAt: number;
}

export type BreathingExercise = 'coherence-5-5' | 'carre-4-4-4-4' | '4-7-8';

export interface BreathingSession {
  id?: number;
  date: string;
  exercise: BreathingExercise;
  durationSec: number;
  createdAt: number;
}

export interface MeditationSession {
  id?: number;
  date: string;
  durationSec: number;
  completed: boolean;
  createdAt: number;
}

export interface BrainDump {
  id?: number;
  date: string;
  text: string;
  createdAt: number;
}

// ---------- Corps ----------
export interface SleepLog {
  date: string; // jour du réveil
  bedtime: string; // HH:mm
  wakeTime: string; // HH:mm
  quality: Score;
  updatedAt: number;
}

export interface HydrationLog {
  date: string;
  glasses: number;
  goal: number; // objectif en vigueur ce jour-là
  updatedAt: number;
}

export interface Activity {
  id?: number;
  date: string;
  type: string; // marche, étirements, salle de sport…
  durationMin: number;
  note?: string;
  createdAt: number;
}

// Grease the Groove
export interface GtgExercise {
  id?: number;
  name: string; // pompes, tractions, squats, gainage…
  unit: 'reps' | 'seconds'; // gainage = secondes
  currentMax: number;
  active: 0 | 1; // 0/1 pour pouvoir l'indexer
  createdAt: number;
}

export interface GtgSet {
  id?: number;
  exerciseId: number;
  date: string;
  reps: number;
  createdAt: number;
}

export interface GtgMaxTest {
  id?: number;
  exerciseId: number;
  date: string;
  max: number;
  createdAt: number;
}

// ---------- Lien corps / esprit ----------
export interface CheckIn {
  date: string;
  mood: Score;
  energy: Score;
  stress: Score;
  word: string;
  updatedAt: number;
}

export interface BodyScan {
  id?: number;
  date: string;
  zones: string[]; // identifiants des zones touchées (ex. 'nuque', 'epaule-g')
  note?: string;
  createdAt: number;
}

export interface Intention {
  date: string;
  text: string; // posée le matin
  kept?: 'oui' | 'en-partie' | 'non'; // répondu le soir
  updatedAt: number;
}

export interface Habit {
  id?: number;
  name: string;
  order: number;
  archived: 0 | 1;
  createdAt: number;
}

export interface HabitCheck {
  habitId: number;
  date: string;
  createdAt: number;
}
