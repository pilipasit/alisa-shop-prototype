import * as React from 'react';

export interface IconButtonProps {
  /** The icon — a Lucide (or any) <svg>. */
  children?: React.ReactNode;
  /** @default "ghost" */
  variant?: 'solid' | 'soft' | 'ghost' | 'outline';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Required for accessibility. */
  'aria-label': string;
  onClick?: (e: React.MouseEvent) => void;
}

/** Circular icon-only button — toolbar actions, favorite, close, nav. */
export function IconButton(props: IconButtonProps): JSX.Element;
