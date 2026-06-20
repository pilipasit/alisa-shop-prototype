import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Inner padding. @default "md" */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Lift on hover (use for clickable product cards). @default false */
  hover?: boolean;
  /** Drop the shadow. @default false */
  flat?: boolean;
}

/** Soft rounded surface container — product cards, panels, info blocks. */
export function Card(props: CardProps): JSX.Element;
