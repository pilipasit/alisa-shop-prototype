import * as React from 'react';

/**
 * In-store category / department sign — big friendly label with a soft blob accent.
 * @startingPoint section="Retail" subtitle="Color-coded department signs" viewport="700x140"
 */
export interface CategorySignProps {
  /** Department / category name, e.g. "Іграшки". */
  title: React.ReactNode;
  /** Optional supporting line, e.g. "0–3 роки". */
  subtitle?: React.ReactNode;
  /** Icon (a <svg>) shown in the tile. */
  icon?: React.ReactNode;
  /** @default "pink" */
  color?: 'pink' | 'blue' | 'green' | 'yellow';
  style?: React.CSSProperties;
}

export function CategorySign(props: CategorySignProps): JSX.Element;
