import { ComingSoon, Page } from '../../components/Page';

export function BodyPage() {
  return (
    <Page title="Corps" subtitle="Écouter et bouger son corps">
      <ComingSoon items={['Sommeil', 'Hydratation', 'Bouger', 'Grease the Groove', 'Scan corporel']} />
    </Page>
  );
}
