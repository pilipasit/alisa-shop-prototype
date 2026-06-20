import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label rendered above the input. */
  label?: string;
  id?: string;
  /** Leading icon (a <svg>). */
  icon?: React.ReactNode;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — turns the field red and overrides hint. */
  error?: string;
  required?: boolean;
}

/** Labelled text input with optional icon, hint and error state. */
export function Input(props: InputProps): JSX.Element;
