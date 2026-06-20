import React from 'react';
import { useAlisaStyles } from './alisaStyles.jsx';

const CSS = `
.alisa-badge{
  font-family:var(--font-body);font-weight:800;font-size:12px;line-height:1;
  display:inline-flex;align-items:center;gap:5px;
  padding:5px 10px;border-radius:var(--radius-pill);
  letter-spacing:.01em;white-space:nowrap;
}
.alisa-badge--lg{font-size:14px;padding:7px 13px}
.alisa-badge__dot{width:7px;height:7px;border-radius:50%;background:currentColor;opacity:.9}
/* solid */
.alisa-badge.solid.sale{background:var(--pink-600);color:#fff}
.alisa-badge.solid.new{background:var(--green-500);color:#fff}
.alisa-badge.solid.info{background:var(--blue-500);color:#fff}
.alisa-badge.solid.warning{background:var(--yellow-400);color:var(--ink-900)}
.alisa-badge.solid.neutral{background:var(--ink-700);color:#fff}
/* soft */
.alisa-badge.soft.sale{background:var(--pink-100);color:var(--pink-600)}
.alisa-badge.soft.new{background:var(--green-100);color:var(--green-600)}
.alisa-badge.soft.info{background:var(--blue-100);color:var(--blue-600)}
.alisa-badge.soft.warning{background:var(--yellow-100);color:var(--yellow-600)}
.alisa-badge.soft.neutral{background:var(--ink-100);color:var(--ink-700)}
`;

/** Small status / label pill: "Новинка", "−30%", "Хіт", etc. */
export function Badge({ children, tone = 'sale', variant = 'solid', size = 'md', dot = false, ...rest }) {
  useAlisaStyles('alisa-badge', CSS);
  const cls = ['alisa-badge', variant, tone, size === 'lg' ? 'alisa-badge--lg' : ''].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot && <span className="alisa-badge__dot" />}
      {children}
    </span>
  );
}
