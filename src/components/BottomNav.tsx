import { NavLink } from 'react-router-dom';
import { BodyIcon, ChartIcon, MindIcon, SunIcon } from './icons';

const tabs = [
  { to: '/', label: "Aujourd'hui", Icon: SunIcon },
  { to: '/mental', label: 'Mental', Icon: MindIcon },
  { to: '/corps', label: 'Corps', Icon: BodyIcon },
  { to: '/bilan', label: 'Bilan', Icon: ChartIcon },
];

export function BottomNav() {
  return (
    <nav
      aria-label="Navigation principale"
      className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-surface/90 backdrop-blur-md"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <ul className="mx-auto grid max-w-md grid-cols-4">
        {tabs.map(({ to, label, Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex min-h-16 flex-col items-center justify-center gap-1 text-xs transition-colors duration-500 ${
                  isActive ? 'text-sage font-semibold' : 'text-ink-soft'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex h-8 w-14 items-center justify-center rounded-full transition-colors duration-500 ${
                      isActive ? 'bg-sage-soft' : ''
                    }`}
                  >
                    <Icon />
                  </span>
                  {label}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
