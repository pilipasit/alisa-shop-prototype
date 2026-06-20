import React from 'react';
import { useAlisaStyles } from '../core/alisaStyles.jsx';

const CSS = `
.alisa-price{
  font-family:var(--font-display);display:inline-flex;align-items:baseline;gap:4px;
  color:var(--ink-900);line-height:1;font-weight:700;
}
.alisa-price--sale{color:var(--pink-600)}
.alisa-price__cur{font-weight:600;color:inherit;margin-left:.06em}
.alisa-price__int{letter-spacing:-0.01em}
.alisa-price__frac{font-weight:600;align-self:flex-start;margin-top:.15em}
.alisa-price--sm{font-size:22px}
.alisa-price--sm .alisa-price__cur{font-size:.6em}
.alisa-price--sm .alisa-price__frac{font-size:.55em}
.alisa-price--md{font-size:34px}
.alisa-price--md .alisa-price__cur{font-size:.55em}
.alisa-price--md .alisa-price__frac{font-size:.5em}
.alisa-price--lg{font-size:52px}
.alisa-price--lg .alisa-price__cur{font-size:.5em}
.alisa-price--lg .alisa-price__frac{font-size:.45em}
.alisa-pricegroup{font-family:var(--font-body);display:flex;flex-direction:column;gap:2px}
.alisa-pricegroup__old{font-family:var(--font-body);font-weight:700;color:var(--ink-400);text-decoration:line-through;text-decoration-color:var(--pink-400);font-size:.5em}
.alisa-pricegroup__row{display:flex;align-items:baseline;gap:10px}
`;

function splitPrice(value) {
  const [int, frac] = String(value).split(/[.,]/);
  return { int, frac };
}

/**
 * Price display in hryvnia. Use on shelf labels, product cards, posters.
 * Shows a struck-through old price + sale styling when `oldPrice` is given.
 */
export function PriceTag({ price, oldPrice, currency = '₴', size = 'md', sale = false }) {
  useAlisaStyles('alisa-price', CSS);
  const isSale = sale || oldPrice != null;
  const { int, frac } = splitPrice(price);
  return (
    <span className="alisa-pricegroup">
      {oldPrice != null && (
        <span className={`alisa-pricegroup__old alisa-price--${size}`}>{oldPrice} {currency}</span>
      )}
      <span className={`alisa-price alisa-price--${size} ${isSale ? 'alisa-price--sale' : ''}`}>
        <span className="alisa-price__int">{int}</span>
        {frac != null && <span className="alisa-price__frac">,{frac}</span>}
        <span className="alisa-price__cur">{currency}</span>
      </span>
    </span>
  );
}
