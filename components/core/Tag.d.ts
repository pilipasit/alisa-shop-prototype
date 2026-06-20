import * as React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  /** Accent color. @default "pink" */
  color?: 'pink' | 'blue' | 'green' | 'yellow' | 'neutral';
  /** Leading color dot. @default false */
  dot?: boolean;
  /** Pressed/selected state (when used as a filter). @default false */
  selected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** When provided, renders a removable × control. */
  onRemove?: (e: React.MouseEvent) => void;
}

/** Color-coded category chip — categories, filters, attributes. */
export function Tag(props: TagProps): JSX.Element;
