import * as React from 'react';

export interface SaleBurstProps {
  /** Small eyebrow above the main number, e.g. "знижка". */
  top?: React.ReactNode;
  /** The headline, e.g. "−50%" or "АКЦІЯ". */
  main: React.ReactNode;
  /** Small line below. */
  sub?: React.ReactNode;
  /** @default "pink" */
  color?: 'pink' | 'blue' | 'green' | 'yellow';
  /** @default "blob" */
  shape?: 'blob' | 'circle';
  /** Diameter in px. @default 140 */
  size?: number;
  style?: React.CSSProperties;
}

/** Playful sale sticker / burst for posters and shelf edges. */
export function SaleBurst(props: SaleBurstProps): JSX.Element;
