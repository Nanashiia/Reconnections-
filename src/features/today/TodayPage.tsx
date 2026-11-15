import { useEffect, useState } from 'react';
import { Card, ComingSoon, Page } from '../../components/Page';
import { ThemeToggle } from '../../components/ThemeToggle';
import { formatLongDate, greetingFor } from '../../lib/date';

/** Se met à jour chaque minute pour que le message suive l'heure. */
function useNow(intervalMs = 60_000) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(t);
  }, [intervalMs]);
  return now;
}

export function TodayPage() {
  const now = useNow();
  return (
    <Page title={greetingFor(now)} subtitle={formatLongDate(now)} action={<ThemeToggle />}>
      <Card tone="sage" className="mb-4">
        <p className="font-serif text-lg leading-relaxed text-ink">
          Prends un instant. Respire. Tu es là, c'est déjà beaucoup.
        </p>
      </Card>
      <ComingSoon items={['Check-in du jour', 'Intention du jour', 'Habitudes', 'Hydratation']} />
    </Page>
  );
}
