import type { ReactNode } from 'react';

/** Mise en page commune : colonne centrée, marges confortables, place pour la barre du bas. */
export function Page({ title, subtitle, children, action }: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <main
      className="mx-auto max-w-md animate-fade-in px-5 pb-28"
      style={{ paddingTop: 'max(2rem, env(safe-area-inset-top))' }}
    >
      <header className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl leading-tight text-ink">{title}</h1>
          {subtitle && <p className="mt-1 text-ink-soft">{subtitle}</p>}
        </div>
        {action}
      </header>
      {children}
    </main>
  );
}

/** Carte douce, réutilisable par toutes les fonctionnalités. */
const tones = {
  default: 'bg-surface shadow-sm ring-1 ring-line',
  sage: 'bg-sage-soft',
  clay: 'bg-clay-soft',
  sky: 'bg-sky-soft',
};

export function Card({ children, className = '', tone = 'default' }: {
  children: ReactNode;
  className?: string;
  tone?: keyof typeof tones;
}) {
  return <section className={`rounded-3xl p-5 ${tones[tone]} ${className}`}>{children}</section>;
}

/** Placeholder pour les pages pas encore développées. */
export function ComingSoon({ items }: { items: string[] }) {
  return (
    <Card>
      <p className="mb-3 text-ink-soft">Bientôt ici :</p>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-3 text-ink">
            <span className="h-2 w-2 rounded-full bg-sage" />
            {i}
          </li>
        ))}
      </ul>
    </Card>
  );
}
