import * as React from 'react';

export interface PriceTagProps {
  /** Current price. Number or string; "," / "." splits kopecks. */
  price: number | string;
  /** Original price — when set, shows struck-through + switches to sale styling. */
  oldPrice?: number | string;
  /** @default "₴" */
  currency?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Force sale styling without an old price. @default false */
  sale?: boolean;
}

/** Hryvnia price display for shelf labels, product cards and posters. */
export function PriceTag(props: PriceTagProps): JSX.Element;
