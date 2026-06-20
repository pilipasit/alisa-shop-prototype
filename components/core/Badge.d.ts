import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** Semantic color. @default "sale" */
  tone?: 'sale' | 'new' | 'info' | 'warning' | 'neutral';
  /** Filled or tinted. @default "solid" */
  variant?: 'solid' | 'soft';
  /** @default "md" */
  size?: 'md' | 'lg';
  /** Show a leading status dot. @default false */
  dot?: boolean;
}

/** Tiny status / label pill — "Новинка", discounts, "Хіт продажів". */
export function Badge(props: BadgeProps): JSX.Element;
