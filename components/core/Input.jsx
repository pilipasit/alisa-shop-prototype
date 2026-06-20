import React from 'react';
import { useAlisaStyles } from './alisaStyles.jsx';

const CSS = `
.alisa-field{font-family:var(--font-body);display:flex;flex-direction:column;gap:6px}
.alisa-field__label{font-weight:700;font-size:14px;color:var(--ink-900)}
.alisa-field__req{color:var(--pink-500)}
.alisa-field__wrap{position:relative;display:flex;align-items:center}
.alisa-field__icon{position:absolute;left:14px;width:20px;height:20px;color:var(--ink-400);pointer-events:none}
.alisa-field__icon svg{width:100%;height:100%}
.alisa-input{
  font-family:var(--font-body);font-size:16px;font-weight:600;color:var(--ink-900);
  width:100%;box-sizing:border-box;background:#fff;
  border:2px solid var(--ink-200);border-radius:var(--radius-md);
  padding:12px 14px;transition:border-color .15s ease,box-shadow .15s ease;
}
.alisa-input::placeholder{color:var(--ink-400);font-weight:500}
.alisa-input--icon{padding-left:42px}
.alisa-input:hover{border-color:var(--ink-300)}
.alisa-input:focus{outline:none;border-color:var(--pink-500);box-shadow:0 0 0 3px var(--pink-200)}
.alisa-input:disabled{background:var(--ink-100);color:var(--ink-400);cursor:not-allowed}
.alisa-field--error .alisa-input{border-color:var(--red-500)}
.alisa-field--error .alisa-input:focus{box-shadow:0 0 0 3px var(--red-100)}
.alisa-field__hint{font-size:13px;color:var(--ink-500)}
.alisa-field__hint--error{color:var(--red-500);font-weight:600}
`;

/** Labelled text input with optional leading icon, hint and error state. */
export function Input({ label, id, icon = null, hint, error, required = false, type = 'text', ...rest }) {
  useAlisaStyles('alisa-input', CSS);
  const fid = id || `f-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div className={['alisa-field', error ? 'alisa-field--error' : ''].filter(Boolean).join(' ')}>
      {label && (
        <label className="alisa-field__label" htmlFor={fid}>
          {label}{required && <span className="alisa-field__req"> *</span>}
        </label>
      )}
      <div className="alisa-field__wrap">
        {icon && <span className="alisa-field__icon">{icon}</span>}
        <input id={fid} type={type} className={['alisa-input', icon ? 'alisa-input--icon' : ''].filter(Boolean).join(' ')} {...rest} />
      </div>
      {(error || hint) && (
        <span className={['alisa-field__hint', error ? 'alisa-field__hint--error' : ''].filter(Boolean).join(' ')}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
