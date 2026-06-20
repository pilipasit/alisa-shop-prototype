import React from 'react';
import { useAlisaStyles } from '../core/alisaStyles.jsx';

const CSS = `
.alisa-burst{
  font-family:var(--font-display);display:inline-flex;flex-direction:column;
  align-items:center;justify-content:center;text-align:center;
  color:#fff;background:var(--pink-500);
  box-shadow:var(--shadow-md);line-height:1;font-weight:700;
  border:4px solid #fff;outline:3px solid var(--pink-500);
}
.alisa-burst--blob{border-radius:var(--radius-blob)}
.alisa-burst--circle{border-radius:50%}
.alisa-burst--pink{background:var(--pink-500);outline-color:var(--pink-500)}
.alisa-burst--blue{background:var(--blue-500);outline-color:var(--blue-500)}
.alisa-burst--green{background:var(--green-500);outline-color:var(--green-500)}
.alisa-burst--yellow{background:var(--yellow-400);color:var(--ink-900);outline-color:var(--yellow-400)}
.alisa-burst__top{font-family:var(--font-body);font-weight:800;font-size:.32em;text-transform:uppercase;letter-spacing:.04em;opacity:.92}
.alisa-burst__main{font-size:1em;letter-spacing:-0.01em}
.alisa-burst__sub{font-family:var(--font-body);font-weight:700;font-size:.26em;opacity:.92;margin-top:.15em}
`;

/**
 * Playful sale sticker for posters & shelf edges. Soft organic "blob" or circle,
 * white keyline + colored outline. Drop a big "−50%" or "АКЦІЯ" inside.
 */
export function SaleBurst({ top, main, sub, color = 'pink', shape = 'blob', size = 140, style, ...rest }) {
  useAlisaStyles('alisa-burst', CSS);
  const cls = `alisa-burst alisa-burst--${shape} alisa-burst--${color}`;
  return (
    <span className={cls} style={{ width: size, height: size, fontSize: size * 0.42, ...style }} {...rest}>
      {top && <span className="alisa-burst__top">{top}</span>}
      <span className="alisa-burst__main">{main}</span>
      {sub && <span className="alisa-burst__sub">{sub}</span>}
    </span>
  );
}
