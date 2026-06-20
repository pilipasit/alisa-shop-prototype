import React from 'react';
import { useAlisaStyles } from './alisaStyles.jsx';

const CSS = `
.alisa-notice{
  font-family:var(--font-body);display:flex;gap:13px;
  border-radius:var(--radius-md);padding:16px 18px;
  border:2px solid transparent;align-items:flex-start;
}
.alisa-notice__icon{width:24px;height:24px;flex:none;margin-top:1px}
.alisa-notice__icon svg{width:100%;height:100%}
.alisa-notice__body{display:flex;flex-direction:column;gap:3px}
.alisa-notice__title{font-weight:800;font-size:16px;color:var(--ink-900);line-height:1.25}
.alisa-notice__text{font-size:15px;color:var(--ink-700);line-height:1.5}
.alisa-notice--info{background:var(--blue-100);border-color:var(--blue-300)}
.alisa-notice--info .alisa-notice__icon{color:var(--blue-600)}
.alisa-notice--success{background:var(--green-100);border-color:var(--green-300)}
.alisa-notice--success .alisa-notice__icon{color:var(--green-600)}
.alisa-notice--warning{background:var(--yellow-100);border-color:var(--yellow-500)}
.alisa-notice--warning .alisa-notice__icon{color:var(--yellow-600)}
.alisa-notice--sale{background:var(--pink-100);border-color:var(--pink-300)}
.alisa-notice--sale .alisa-notice__icon{color:var(--pink-600)}
`;

const ICONS = {
  info: 'M12 16v-5M12 8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  success: 'M20 6L9 17l-5-5',
  warning: 'M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L14.4 3.9a2 2 0 00-3.4 0z',
  sale: 'M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8zM7.5 7.5h.01',
};

/** Customer-facing notice / callout for stores: opening hours, promos, instructions. */
export function Notice({ children, tone = 'info', title, icon, ...rest }) {
  useAlisaStyles('alisa-notice', CSS);
  const path = ICONS[tone] || ICONS.info;
  return (
    <div className={`alisa-notice alisa-notice--${tone}`} role="note" {...rest}>
      <span className="alisa-notice__icon">
        {icon || <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d={path}/></svg>}
      </span>
      <div className="alisa-notice__body">
        {title && <div className="alisa-notice__title">{title}</div>}
        {children && <div className="alisa-notice__text">{children}</div>}
      </div>
    </div>
  );
}
