import { ComingSoon, Page } from '../../components/Page';

export function ReviewPage() {
  return (
    <Page title="Bilan" subtitle="Voir les liens entre corps et esprit">
      <ComingSoon items={['Graphiques', 'Bilan de la semaine', 'Sauvegarde (export / import)']} />
    </Page>
  );
}
