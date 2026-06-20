import React from 'react';
import { useAlisaStyles } from '../core/alisaStyles.jsx';

const CSS = `
.alisa-catsign{
  font-family:var(--font-display);position:relative;overflow:hidden;
  border-radius:var(--radius-lg);padding:22px 24px;color:#fff;
  display:flex;align-items:center;gap:16px;box-shadow:var(--shadow-md);
  min-height:96px;box-sizing:border-box;
}
.alisa-catsign--pink{background:var(--pink-500)}
.alisa-catsign--blue{background:var(--blue-500)}
.alisa-catsign--green{background:var(--green-500)}
.alisa-catsign--yellow{background:var(--yellow-400);color:var(--ink-900)}
.alisa-catsign__blob{position:absolute;right:-28px;bottom:-40px;width:140px;height:140px;border-radius:var(--radius-blob);background:rgba(255,255,255,.16)}
.alisa-catsign__icon{position:relative;width:48px;height:48px;flex:none;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.2);border-radius:var(--radius-md)}
.alisa-catsign--yellow .alisa-catsign__icon{background:rgba(46,26,38,.12)}
.alisa-catsign__icon svg{width:60%;height:60%}
.alisa-catsign__txt{position:relative;display:flex;flex-direction:column;gap:2px}
.alisa-catsign__title{font-size:28px;font-weight:700;line-height:1.05;letter-spacing:-0.01em}
.alisa-catsign__sub{font-family:var(--font-body);font-weight:600;font-size:14px;opacity:.92}
`;

/** Store category sign / department header. Big friendly label with a soft blob accent. */
export function CategorySign({ title, subtitle, icon, color = 'pink', style, ...rest }) {
  useAlisaStyles('alisa-catsign', CSS);
  return (
    <div className={`alisa-catsign alisa-catsign--${color}`} style={style} {...rest}>
      <span className="alisa-catsign__blob" aria-hidden="true" />
      {icon && <span className="alisa-catsign__icon">{icon}</span>}
      <span className="alisa-catsign__txt">
        <span className="alisa-catsign__title">{title}</span>
        {subtitle && <span className="alisa-catsign__sub">{subtitle}</span>}
      </span>
    </div>
  );
}
