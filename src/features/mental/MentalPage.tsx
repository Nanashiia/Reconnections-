import { ComingSoon, Page } from '../../components/Page';

export function MentalPage() {
  return (
    <Page title="Mental" subtitle="Prendre soin de son esprit">
      <ComingSoon items={['Journal guidé', 'Gratitude', 'Respiration guidée', 'Méditation', 'Vide-tête']} />
    </Page>
  );
}
