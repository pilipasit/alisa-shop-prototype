import React from 'react';
import { useAlisaStyles } from './alisaStyles.jsx';

const CSS = `
.alisa-card{
  font-family:var(--font-body);background:var(--surface-card);
  border-radius:var(--radius-lg);overflow:hidden;
  box-shadow:var(--shadow-sm);border:1px solid var(--ink-100);
  transition:box-shadow .18s ease,transform .18s ease;
  display:flex;flex-direction:column;
}
.alisa-card--hover:hover{box-shadow:var(--shadow-md);transform:translateY(-3px)}
.alisa-card--flat{box-shadow:none}
.alisa-card--pad-sm{padding:14px}
.alisa-card--pad-md{padding:20px}
.alisa-card--pad-lg{padding:28px}
.alisa-card--pad-none{padding:0}
`;

/** Soft rounded surface container. Product cards, panels, info blocks. */
export function Card({ children, padding = 'md', hover = false, flat = false, style, ...rest }) {
  useAlisaStyles('alisa-card', CSS);
  const cls = [
    'alisa-card',
    `alisa-card--pad-${padding}`,
    hover ? 'alisa-card--hover' : '',
    flat ? 'alisa-card--flat' : '',
  ].filter(Boolean).join(' ');
  return <div className={cls} style={style} {...rest}>{children}</div>;
}
