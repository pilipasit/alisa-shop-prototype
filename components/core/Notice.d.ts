import * as React from 'react';

export interface NoticeProps {
  children?: React.ReactNode;
  /** @default "info" */
  tone?: 'info' | 'success' | 'warning' | 'sale';
  /** Bold heading line. */
  title?: string;
  /** Override the default tone icon. */
  icon?: React.ReactNode;
}

/** Customer-facing callout box — store hours, promo terms, instructions, alerts. */
export function Notice(props: NoticeProps): JSX.Element;
