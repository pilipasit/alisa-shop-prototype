import * as React from 'react';

/**
 * Pill-shaped primary action for Alisa Kids Store — buttons, promos, calls to action.
 * @startingPoint section="Core" subtitle="Pill buttons in every variant & size" viewport="700x200"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'sale';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to fill its container. @default false */
  fullWidth?: boolean;
  /** Leading icon (e.g. a Lucide <svg>). */
  icon?: React.ReactNode;
  /** Trailing icon. */
  iconRight?: React.ReactNode;
  disabled?: boolean;
  /** Render as an <a> with this href instead of a <button>. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button(props: ButtonProps): JSX.Element;
