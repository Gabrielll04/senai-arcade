import type { ReactElement } from 'react';

/** Ícones locais desenhados para o SENAI Arcade (sem bibliotecas nem CDN). */
const ICONS = {
  code: (
    <>
      <polyline points="8 6 2 12 8 18" />
      <polyline points="16 6 22 12 16 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" />
      <circle cx="12" cy="12" r="6.5" />
    </>
  ),
  zap: <polygon points="13 2 4 14 11 14 10 22 20 9 13 9 13 2" />,
  package: (
    <>
      <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
      <polyline points="3 7 12 12 21 7" />
      <line x1="12" y1="12" x2="12" y2="22" />
    </>
  ),
  'clipboard-list': (
    <>
      <rect x="5" y="4" width="14" height="18" rx="2" />
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <line x1="9" y1="11" x2="16" y2="11" />
      <line x1="9" y1="15" x2="16" y2="15" />
      <line x1="9" y1="19" x2="13" y2="19" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="8.2" y1="8.2" x2="20" y2="19" />
      <line x1="8.2" y1="15.8" x2="20" y2="5" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 3h10v6a5 5 0 0 1-10 0z" />
      <path d="M7 5H3v2a4 4 0 0 0 4 4M17 5h4v2a4 4 0 0 1-4 4" />
      <line x1="12" y1="14" x2="12" y2="18" />
      <rect x="8" y="18" width="8" height="3" rx="1" />
    </>
  ),
  'graduation-cap': (
    <>
      <polygon points="12 4 22 9 12 14 2 9 12 4" />
      <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
      <line x1="22" y1="9" x2="22" y2="15" />
    </>
  ),
  gamepad: (
    <>
      <rect x="2" y="7" width="20" height="11" rx="5" />
      <line x1="7" y1="10.5" x2="7" y2="14.5" />
      <line x1="5" y1="12.5" x2="9" y2="12.5" />
      <circle cx="15.5" cy="11.5" r="1" />
      <circle cx="18" cy="13.8" r="1" />
    </>
  ),
  keyboard: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </>
  ),
  'arrow-left': (
    <>
      <line x1="20" y1="12" x2="4" y2="12" />
      <polyline points="10 6 4 12 10 18" />
    </>
  ),
  alert: (
    <>
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2 21v-1.5A5.5 5.5 0 0 1 7.5 14h3a5.5 5.5 0 0 1 5.5 5.5V21" />
      <path d="M16 4.3a3.5 3.5 0 0 1 0 7.4M22 21v-1.5a5.5 5.5 0 0 0-4-5.3" />
    </>
  ),
} satisfies Record<string, ReactElement>;

export type IconName = keyof typeof ICONS;

interface IconProps {
  name: IconName;
  className?: string;
  title?: string;
}

export function Icon({ name, className, title }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {ICONS[name]}
    </svg>
  );
}
