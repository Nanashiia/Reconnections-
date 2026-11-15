/** Date locale au format YYYY-MM-DD (clé utilisée partout dans la base). */
export function toDateKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/** « Bonjour », « Bon après-midi » ou « Bonsoir » selon l'heure. */
export function greetingFor(d: Date = new Date()): string {
  const h = d.getHours();
  if (h >= 5 && h < 12) return 'Bonjour';
  if (h >= 12 && h < 18) return 'Bon après-midi';
  return 'Bonsoir';
}

/** Ex. « Dimanche 15 novembre » */
export function formatLongDate(d: Date = new Date()): string {
  const s = d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  return s.charAt(0).toUpperCase() + s.slice(1);
}
