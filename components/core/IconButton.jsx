import React from 'react';
import { useAlisaStyles } from './alisaStyles.jsx';

const CSS = `
.alisa-iconbtn{
  display:inline-flex;align-items:center;justify-content:center;
  border:2px solid transparent;border-radius:var(--radius-pill);
  cursor:pointer;background:transparent;color:var(--ink-700);
  transition:background-color .15s ease,color .15s ease,transform .12s ease,border-color .15s ease;
}
.alisa-iconbtn:active{transform:scale(.92)}
.alisa-iconbtn:focus-visible{outline:none;box-shadow:0 0 0 3px var(--pink-200)}
.alisa-iconbtn:disabled{opacity:.45;cursor:not-allowed}
.alisa-iconbtn svg{width:55%;height:55%;display:block}
.alisa-iconbtn--sm{width:36px;height:36px}
.alisa-iconbtn--md{width:44px;height:44px}
.alisa-iconbtn--lg{width:52px;height:52px}
.alisa-iconbtn--solid{background:var(--pink-500);color:#fff}
.alisa-iconbtn--solid:hover{background:var(--pink-600)}
.alisa-iconbtn--soft{background:var(--pink-100);color:var(--pink-600)}
.alisa-iconbtn--soft:hover{background:var(--pink-200)}
.alisa-iconbtn--ghost:hover{background:var(--ink-100)}
.alisa-iconbtn--outline{border-color:var(--ink-200);color:var(--ink-700)}
.alisa-iconbtn--outline:hover{border-color:var(--pink-400);color:var(--pink-600)}
`;

/** Circular icon-only button. Pass a Lucide (or any) <svg> as children. Always set aria-label. */
export function IconButton({ children, variant = 'ghost', size = 'md', disabled = false, 'aria-label': ariaLabel, onClick, ...rest }) {
  useAlisaStyles('alisa-iconbtn', CSS);
  const cls = ['alisa-iconbtn', `alisa-iconbtn--${variant}`, `alisa-iconbtn--${size}`].join(' ');
  return (
    <button className={cls} disabled={disabled} aria-label={ariaLabel} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
