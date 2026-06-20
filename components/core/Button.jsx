import React from 'react';
import { useAlisaStyles } from './alisaStyles.jsx';

const CSS = `
.alisa-btn{
  font-family:var(--font-display);font-weight:600;
  display:inline-flex;align-items:center;justify-content:center;gap:.5em;
  border:2px solid transparent;border-radius:var(--radius-pill);
  cursor:pointer;text-decoration:none;white-space:nowrap;
  transition:transform .12s ease, box-shadow .15s ease, background-color .15s ease, color .15s ease, border-color .15s ease;
  line-height:1;user-select:none;
}
.alisa-btn:focus-visible{outline:none;box-shadow:0 0 0 3px var(--pink-200)}
.alisa-btn:active{transform:translateY(1px) scale(.985)}
.alisa-btn[aria-disabled="true"],.alisa-btn:disabled{opacity:.5;cursor:not-allowed;transform:none;box-shadow:none}

/* sizes */
.alisa-btn--sm{font-size:14px;padding:9px 16px}
.alisa-btn--md{font-size:16px;padding:12px 22px}
.alisa-btn--lg{font-size:19px;padding:16px 30px}
.alisa-btn--full{width:100%}

/* variants */
.alisa-btn--primary{background:var(--pink-500);color:#fff;box-shadow:var(--shadow-pink)}
.alisa-btn--primary:hover{background:var(--pink-600);box-shadow:0 12px 28px rgba(223,3,128,.34)}
.alisa-btn--sale{background:var(--pink-600);color:#fff;box-shadow:var(--shadow-pink)}
.alisa-btn--sale:hover{background:#9c025c}
.alisa-btn--secondary{background:#fff;color:var(--pink-600);border-color:var(--pink-400)}
.alisa-btn--secondary:hover{background:var(--pink-100);border-color:var(--pink-500)}
.alisa-btn--ghost{background:transparent;color:var(--ink-700)}
.alisa-btn--ghost:hover{background:var(--ink-100)}
.alisa-btn__icon{display:inline-flex;width:1.15em;height:1.15em}
.alisa-btn__icon svg{width:100%;height:100%;display:block}
`;

/**
 * Alisa primary action button. Pill-shaped, rounded display type, warm pink lift.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon = null,
  iconRight = null,
  disabled = false,
  href,
  onClick,
  type = 'button',
  ...rest
}) {
  useAlisaStyles('alisa-btn', CSS);
  const cls = [
    'alisa-btn',
    `alisa-btn--${variant}`,
    `alisa-btn--${size}`,
    fullWidth ? 'alisa-btn--full' : '',
  ].filter(Boolean).join(' ');

  const inner = (
    <>
      {icon && <span className="alisa-btn__icon">{icon}</span>}
      {children}
      {iconRight && <span className="alisa-btn__icon">{iconRight}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <a className={cls} href={href} onClick={onClick} {...rest}>{inner}</a>
    );
  }
  return (
    <button className={cls} type={type} disabled={disabled}
      aria-disabled={disabled} onClick={onClick} {...rest}>
      {inner}
    </button>
  );
}
