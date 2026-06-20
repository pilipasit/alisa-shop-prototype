import React from 'react';
import { useAlisaStyles } from './alisaStyles.jsx';

const CSS = `
.alisa-tag{
  font-family:var(--font-body);font-weight:700;font-size:14px;line-height:1;
  display:inline-flex;align-items:center;gap:7px;
  padding:9px 14px;border-radius:var(--radius-pill);
  border:2px solid transparent;cursor:default;
  transition:background-color .15s ease,border-color .15s ease;
}
.alisa-tag--clickable{cursor:pointer}
.alisa-tag__dot{width:9px;height:9px;border-radius:50%}
.alisa-tag--pink{background:var(--pink-100);color:var(--pink-600)}
.alisa-tag--pink .alisa-tag__dot{background:var(--pink-500)}
.alisa-tag--blue{background:var(--blue-100);color:var(--blue-600)}
.alisa-tag--blue .alisa-tag__dot{background:var(--blue-500)}
.alisa-tag--green{background:var(--green-100);color:var(--green-600)}
.alisa-tag--green .alisa-tag__dot{background:var(--green-500)}
.alisa-tag--yellow{background:var(--yellow-100);color:var(--yellow-600)}
.alisa-tag--yellow .alisa-tag__dot{background:var(--yellow-500)}
.alisa-tag--neutral{background:var(--ink-100);color:var(--ink-700)}
.alisa-tag--neutral .alisa-tag__dot{background:var(--ink-500)}
.alisa-tag[aria-pressed="true"]{border-color:currentColor}
.alisa-tag--clickable:hover{filter:brightness(.97)}
.alisa-tag__x{display:inline-flex;width:14px;height:14px;opacity:.65;cursor:pointer}
.alisa-tag__x:hover{opacity:1}
.alisa-tag__x svg{width:100%;height:100%}
`;

/** Category chip — filter, product category, or label. Color-coded to the accent set. */
export function Tag({ children, color = 'pink', dot = false, selected = false, onClick, onRemove, ...rest }) {
  useAlisaStyles('alisa-tag', CSS);
  const clickable = !!onClick;
  const cls = ['alisa-tag', `alisa-tag--${color}`, clickable ? 'alisa-tag--clickable' : ''].filter(Boolean).join(' ');
  return (
    <span className={cls} onClick={onClick} aria-pressed={clickable ? selected : undefined} {...rest}>
      {dot && <span className="alisa-tag__dot" />}
      {children}
      {onRemove && (
        <span className="alisa-tag__x" onClick={(e) => { e.stopPropagation(); onRemove(e); }} aria-label="remove">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg>
        </span>
      )}
    </span>
  );
}
