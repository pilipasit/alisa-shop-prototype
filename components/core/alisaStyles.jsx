import React from 'react';

/* Shared one-time stylesheet injector used by Alisa components.
   Keeps hover / active / focus states working while styling stays
   anchored to the design-system CSS custom properties. */
const injected = new Set();
export function useAlisaStyles(id, css) {
  if (typeof document === 'undefined' || injected.has(id)) return;
  injected.add(id);
  const el = document.createElement('style');
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
