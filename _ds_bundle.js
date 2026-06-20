/* @ds-bundle: {"format":3,"namespace":"AlisaKidsStoreDesignSystem_194dcf","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Notice","sourcePath":"components/core/Notice.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CategorySign","sourcePath":"components/retail/CategorySign.jsx"},{"name":"PriceTag","sourcePath":"components/retail/PriceTag.jsx"},{"name":"SaleBurst","sourcePath":"components/retail/SaleBurst.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"cd6c073e27b9","components/core/Button.jsx":"79730be18ff5","components/core/Card.jsx":"41d25fd988ee","components/core/IconButton.jsx":"978af85c9873","components/core/Input.jsx":"76f55241b236","components/core/Notice.jsx":"afc1bdd24f13","components/core/Tag.jsx":"fd5f77239f9b","components/core/alisaStyles.jsx":"c7e3bf581050","components/retail/CategorySign.jsx":"ee265e84d476","components/retail/PriceTag.jsx":"8fe123d1cd1b","components/retail/SaleBurst.jsx":"02b94a3da565","sales-promo-kit/image-slot.js":"9309434cb09c","ui_kits/presentation/slides.jsx":"8157d044f909","ui_kits/retail-materials/PromoPoster.jsx":"9b23f667b8fa","ui_kits/retail-materials/ShelfLabel.jsx":"77bf8760e682","ui_kits/social/SocialPost.jsx":"0c08d0bcd129","ui_kits/webshop/app.jsx":"a92c1c9225c5","ui_kits/webshop/data.jsx":"bd2745e3af99","ui_kits/webshop/desktop.jsx":"5e4990f7b81c","ui_kits/webshop/screens1.jsx":"f10477452c14","ui_kits/webshop/screens2.jsx":"b755449ba244","ui_kits/webshop/ui.jsx":"c641beb7ceea"},"inlinedExternals":[],"unexposedExports":[{"name":"useAlisaStyles","sourcePath":"components/core/alisaStyles.jsx"}]} */

(() => {

const __ds_ns = (window.AlisaKidsStoreDesignSystem_194dcf = window.AlisaKidsStoreDesignSystem_194dcf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/alisaStyles.jsx
try { (() => {
/* Shared one-time stylesheet injector used by Alisa components.
   Keeps hover / active / focus states working while styling stays
   anchored to the design-system CSS custom properties. */
const injected = new Set();
function useAlisaStyles(id, css) {
  if (typeof document === 'undefined' || injected.has(id)) return;
  injected.add(id);
  const el = document.createElement('style');
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
Object.assign(__ds_scope, { useAlisaStyles });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/alisaStyles.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Badge({
  children,
  tone = 'sale',
  variant = 'solid',
  size = 'md',
  dot = false,
  ...rest
}) {
  __ds_scope.useAlisaStyles('alisa-badge', CSS);
  const cls = ['alisa-badge', variant, tone, size === 'lg' ? 'alisa-badge--lg' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "alisa-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  __ds_scope.useAlisaStyles('alisa-btn', CSS);
  const cls = ['alisa-btn', `alisa-btn--${variant}`, `alisa-btn--${size}`, fullWidth ? 'alisa-btn--full' : ''].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement("span", {
    className: "alisa-btn__icon"
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "alisa-btn__icon"
  }, iconRight));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href,
      onClick: onClick
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled,
    "aria-disabled": disabled,
    onClick: onClick
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.alisa-card{
  font-family:var(--font-body);background:var(--surface-card);
  border-radius:var(--radius-lg);overflow:hidden;
  box-shadow:var(--shadow-sm);border:1px solid var(--ink-100);
  transition:box-shadow .18s ease,transform .18s ease;
  display:flex;flex-direction:column;
}
.alisa-card--hover:hover{box-shadow:var(--shadow-md);transform:translateY(-3px)}
.alisa-card--flat{box-shadow:none}
.alisa-card--pad-sm{padding:14px}
.alisa-card--pad-md{padding:20px}
.alisa-card--pad-lg{padding:28px}
.alisa-card--pad-none{padding:0}
`;

/** Soft rounded surface container. Product cards, panels, info blocks. */
function Card({
  children,
  padding = 'md',
  hover = false,
  flat = false,
  style,
  ...rest
}) {
  __ds_scope.useAlisaStyles('alisa-card', CSS);
  const cls = ['alisa-card', `alisa-card--pad-${padding}`, hover ? 'alisa-card--hover' : '', flat ? 'alisa-card--flat' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  'aria-label': ariaLabel,
  onClick,
  ...rest
}) {
  __ds_scope.useAlisaStyles('alisa-iconbtn', CSS);
  const cls = ['alisa-iconbtn', `alisa-iconbtn--${variant}`, `alisa-iconbtn--${size}`].join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled,
    "aria-label": ariaLabel,
    onClick: onClick
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Input({
  label,
  id,
  icon = null,
  hint,
  error,
  required = false,
  type = 'text',
  ...rest
}) {
  __ds_scope.useAlisaStyles('alisa-input', CSS);
  const fid = id || `f-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    className: ['alisa-field', error ? 'alisa-field--error' : ''].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "alisa-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "alisa-field__req"
  }, " *")), /*#__PURE__*/React.createElement("div", {
    className: "alisa-field__wrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "alisa-field__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    className: ['alisa-input', icon ? 'alisa-input--icon' : ''].filter(Boolean).join(' ')
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: ['alisa-field__hint', error ? 'alisa-field__hint--error' : ''].filter(Boolean).join(' ')
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Notice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  sale: 'M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8zM7.5 7.5h.01'
};

/** Customer-facing notice / callout for stores: opening hours, promos, instructions. */
function Notice({
  children,
  tone = 'info',
  title,
  icon,
  ...rest
}) {
  __ds_scope.useAlisaStyles('alisa-notice', CSS);
  const path = ICONS[tone] || ICONS.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `alisa-notice alisa-notice--${tone}`,
    role: "note"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "alisa-notice__icon"
  }, icon || /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: path
  }))), /*#__PURE__*/React.createElement("div", {
    className: "alisa-notice__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "alisa-notice__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "alisa-notice__text"
  }, children)));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Notice.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Tag({
  children,
  color = 'pink',
  dot = false,
  selected = false,
  onClick,
  onRemove,
  ...rest
}) {
  __ds_scope.useAlisaStyles('alisa-tag', CSS);
  const clickable = !!onClick;
  const cls = ['alisa-tag', `alisa-tag--${color}`, clickable ? 'alisa-tag--clickable' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    onClick: onClick,
    "aria-pressed": clickable ? selected : undefined
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "alisa-tag__dot"
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "alisa-tag__x",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "remove"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 5l14 14M19 5L5 19"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/retail/CategorySign.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function CategorySign({
  title,
  subtitle,
  icon,
  color = 'pink',
  style,
  ...rest
}) {
  __ds_scope.useAlisaStyles('alisa-catsign', CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `alisa-catsign alisa-catsign--${color}`,
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "alisa-catsign__blob",
    "aria-hidden": "true"
  }), icon && /*#__PURE__*/React.createElement("span", {
    className: "alisa-catsign__icon"
  }, icon), /*#__PURE__*/React.createElement("span", {
    className: "alisa-catsign__txt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "alisa-catsign__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    className: "alisa-catsign__sub"
  }, subtitle)));
}
Object.assign(__ds_scope, { CategorySign });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/retail/CategorySign.jsx", error: String((e && e.message) || e) }); }

// components/retail/PriceTag.jsx
try { (() => {
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
  return {
    int,
    frac
  };
}

/**
 * Price display in hryvnia. Use on shelf labels, product cards, posters.
 * Shows a struck-through old price + sale styling when `oldPrice` is given.
 */
function PriceTag({
  price,
  oldPrice,
  currency = '₴',
  size = 'md',
  sale = false
}) {
  __ds_scope.useAlisaStyles('alisa-price', CSS);
  const isSale = sale || oldPrice != null;
  const {
    int,
    frac
  } = splitPrice(price);
  return /*#__PURE__*/React.createElement("span", {
    className: "alisa-pricegroup"
  }, oldPrice != null && /*#__PURE__*/React.createElement("span", {
    className: `alisa-pricegroup__old alisa-price--${size}`
  }, oldPrice, " ", currency), /*#__PURE__*/React.createElement("span", {
    className: `alisa-price alisa-price--${size} ${isSale ? 'alisa-price--sale' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "alisa-price__int"
  }, int), frac != null && /*#__PURE__*/React.createElement("span", {
    className: "alisa-price__frac"
  }, ",", frac), /*#__PURE__*/React.createElement("span", {
    className: "alisa-price__cur"
  }, currency)));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/retail/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/retail/SaleBurst.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function SaleBurst({
  top,
  main,
  sub,
  color = 'pink',
  shape = 'blob',
  size = 140,
  style,
  ...rest
}) {
  __ds_scope.useAlisaStyles('alisa-burst', CSS);
  const cls = `alisa-burst alisa-burst--${shape} alisa-burst--${color}`;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      width: size,
      height: size,
      fontSize: size * 0.42,
      ...style
    }
  }, rest), top && /*#__PURE__*/React.createElement("span", {
    className: "alisa-burst__top"
  }, top), /*#__PURE__*/React.createElement("span", {
    className: "alisa-burst__main"
  }, main), sub && /*#__PURE__*/React.createElement("span", {
    className: "alisa-burst__sub"
  }, sub));
}
Object.assign(__ds_scope, { SaleBurst });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/retail/SaleBurst.jsx", error: String((e && e.message) || e) }); }

// sales-promo-kit/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "sales-promo-kit/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/presentation/slides.jsx
try { (() => {
/* Presentation slides for Alisa Kids Store — 1280×720, 16:9.
   TitleSlide + ContentSlide, composed from brand assets + components. */
const {
  Badge,
  CategorySign
} = window.AlisaKidsStoreDesignSystem_194dcf;
const SLIDE = {
  width: 1280,
  height: 720,
  fontFamily: 'var(--font-body)',
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box'
};
const blob = o => ({
  position: 'absolute',
  borderRadius: 'var(--radius-blob)',
  ...o
});
function TitleSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...SLIDE,
      background: 'var(--pink-500)',
      color: '#fff',
      padding: 96,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: blob({
      width: 560,
      height: 560,
      background: 'rgba(255,255,255,.10)',
      top: -180,
      right: -160
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: blob({
      width: 360,
      height: 360,
      background: 'rgba(255,255,255,.08)',
      bottom: -150,
      left: -120
    })
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mono-white.svg",
    style: {
      height: 70,
      position: 'relative',
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      opacity: .85
    }
  }, "\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u044F \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0456\u044F \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 92,
      lineHeight: 1,
      margin: '18px 0 0',
      letterSpacing: '-0.02em'
    }
  }, "\u041F\u0456\u0434\u0441\u0443\u043C\u043A\u0438 \u0441\u0435\u0437\u043E\u043D\u0443", /*#__PURE__*/React.createElement("br", null), "\u0442\u0430 \u043F\u043B\u0430\u043D\u0438 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0443"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 28,
      fontWeight: 600,
      opacity: .92,
      marginTop: 28,
      maxWidth: 760
    }
  }, "\u041C\u0435\u0440\u0435\u0436\u0430 \u0434\u0438\u0442\u044F\u0447\u0438\u0445 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456\u0432 \xAB\u0410\u043B\u0456\u0441\u0430\xBB \u2014 \u0442\u0440\u0438 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0438 \u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0456.")));
}
function ContentSlide() {
  const I = n => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...SLIDE,
      background: 'var(--cream)',
      color: 'var(--ink-900)',
      padding: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 56,
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, "\u0429\u043E \u0434\u043E\u0431\u0440\u0435 \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u043B\u043E\u0441\u044C"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-primary.svg",
    style: {
      height: 40
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      width: 90,
      background: 'var(--pink-500)',
      borderRadius: 99,
      marginTop: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(CategorySign, {
    title: "\u041E\u0434\u044F\u0433",
    subtitle: "+18% \u0434\u043E \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0441\u0435\u0437\u043E\u043D\u0443",
    color: "blue",
    icon: I('shirt')
  }), /*#__PURE__*/React.createElement(CategorySign, {
    title: "\u0406\u0433\u0440\u0430\u0448\u043A\u0438",
    subtitle: "+12% \u2014 \u043B\u0456\u0434\u0435\u0440 \u043D\u043E\u0432\u0438\u043D\u043E\u043A",
    color: "green",
    icon: I('blocks')
  }), /*#__PURE__*/React.createElement(CategorySign, {
    title: "\u0412\u0437\u0443\u0442\u0442\u044F",
    subtitle: "\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u0438\u0439 \u043F\u043E\u043F\u0438\u0442",
    color: "pink",
    icon: I('footprints')
  }), /*#__PURE__*/React.createElement(CategorySign, {
    title: "\u0421\u0435\u0437\u043E\u043D\u043D\u0435",
    subtitle: "\u043F\u0456\u043A \u0443 \u0433\u0440\u0443\u0434\u043D\u0456",
    color: "yellow",
    icon: I('sun')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "new",
    size: "lg"
  }, "\u0412\u0438\u0441\u043D\u043E\u0432\u043E\u043A"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--ink-700)'
    }
  }, "\u0420\u043E\u0437\u0448\u0438\u0440\u044E\u0454\u043C\u043E \u0430\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442 \u0456\u0433\u0440\u0430\u0448\u043E\u043A \u0442\u0430 \u0437\u0438\u043C\u043E\u0432\u043E\u0433\u043E \u043E\u0434\u044F\u0433\u0443.")));
}
window.TitleSlide = TitleSlide;
window.ContentSlide = ContentSlide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/presentation/slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/retail-materials/PromoPoster.jsx
try { (() => {
/* PromoPoster — A-format sale poster for Alisa Kids Store.
   Composes brand logo + SaleBurst + PriceTag + Button. ~600×800. */
function PromoPoster({
  season = 'winter'
}) {
  const {
    SaleBurst,
    PriceTag,
    Button,
    Badge
  } = window.AlisaKidsStoreDesignSystem_194dcf;
  const themes = {
    winter: {
      bg: 'var(--blue-100)',
      accent: 'blue',
      kicker: 'Зимовий розпродаж',
      head: 'Тепло\nдля малечі',
      burst: '−50%'
    },
    summer: {
      bg: 'var(--yellow-100)',
      accent: 'yellow',
      kicker: 'Літній сезон',
      head: 'Сонячні\nновинки',
      burst: 'NEW'
    },
    spring: {
      bg: 'var(--green-100)',
      accent: 'green',
      kicker: 'Весняна колекція',
      head: 'Свіжі\nфарби весни',
      burst: '−30%'
    }
  };
  const t = themes[season] || themes.winter;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 600,
      height: 800,
      background: t.bg,
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      padding: 40,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 260,
      height: 260,
      borderRadius: 'var(--radius-blob)',
      background: 'rgba(255,255,255,.5)',
      top: -70,
      right: -60
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 180,
      height: 180,
      borderRadius: 'var(--radius-blob)',
      background: 'rgba(255,255,255,.4)',
      bottom: 120,
      left: -60
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-primary.svg",
    alt: "alisa",
    style: {
      height: 54
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "sale",
    size: "lg"
  }, t.kicker)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 76,
      lineHeight: .98,
      margin: 0,
      color: 'var(--ink-900)',
      whiteSpace: 'pre-line',
      letterSpacing: '-0.02em'
    }
  }, t.head)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      marginTop: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '78%',
      height: '88%',
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      color: 'var(--ink-300)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image",
    style: {
      width: 56,
      height: 56
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "\u0424\u043E\u0442\u043E \u0442\u043E\u0432\u0430\u0440\u0443")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 4,
      right: 8
    }
  }, /*#__PURE__*/React.createElement(SaleBurst, {
    top: "\u0437\u043D\u0438\u0436\u043A\u0430",
    main: t.burst,
    color: t.accent,
    size: 150,
    style: {
      transform: 'rotate(-8deg)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: '12px 22px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    price: "249",
    oldPrice: "499",
    size: "lg"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "sale",
    size: "lg"
  }, "\u0417\u0430\u0432\u0456\u0442\u0430\u0439\u0442\u0435 \u0434\u043E \u043D\u0430\u0441")));
}
window.PromoPoster = PromoPoster;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/retail-materials/PromoPoster.jsx", error: String((e && e.message) || e) }); }

// ui_kits/retail-materials/ShelfLabel.jsx
try { (() => {
/* ShelfLabel — printable shelf-edge price label. Composes PriceTag + Badge.
   Standard small retail label ~300×170. */
function ShelfLabel({
  name = 'Назва товару',
  sku = '000000',
  price = '199',
  oldPrice,
  accent = 'pink'
}) {
  const {
    PriceTag,
    Badge
  } = window.AlisaKidsStoreDesignSystem_194dcf;
  const bar = `var(--${accent}-500)`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 320,
      height: 170,
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--ink-100)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: bar
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 16,
      color: 'var(--ink-900)',
      lineHeight: 1.2
    }
  }, name), oldPrice && /*#__PURE__*/React.createElement(Badge, {
    tone: "sale"
  }, "\u0410\u041A\u0426\u0406\u042F")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ink-400)',
      fontWeight: 700,
      marginTop: 2
    }
  }, "\u0410\u0440\u0442\u0438\u043A\u0443\u043B ", sku), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    price: price,
    oldPrice: oldPrice,
    size: "md"
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mono-pink.svg",
    alt: "alisa",
    style: {
      height: 20,
      opacity: .9
    }
  }))));
}
window.ShelfLabel = ShelfLabel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/retail-materials/ShelfLabel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/SocialPost.jsx
try { (() => {
/* SocialPost — 1080×1080 square post for Instagram / Facebook.
   Three layouts: sale, arrival, announce. Composed from brand + SaleBurst + Badge + PriceTag. */
const {
  SaleBurst,
  Badge,
  PriceTag,
  Button
} = window.AlisaKidsStoreDesignSystem_194dcf;
function SocialPost({
  kind = 'sale',
  scale = 0.42
}) {
  const S = 1080;
  const frame = {
    width: S,
    height: S,
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    fontFamily: 'var(--font-body)',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 28,
    boxSizing: 'border-box'
  };
  const blob = o => ({
    position: 'absolute',
    borderRadius: 'var(--radius-blob)',
    ...o
  });
  if (kind === 'sale') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...frame,
        background: 'var(--pink-500)',
        color: '#fff',
        padding: 72
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: blob({
        width: 460,
        height: 460,
        background: 'rgba(255,255,255,.12)',
        top: -120,
        right: -120
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: blob({
        width: 320,
        height: 320,
        background: 'rgba(255,255,255,.10)',
        bottom: -110,
        left: -90
      })
    }), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mono-white.svg",
      style: {
        height: 78,
        position: 'relative'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        marginTop: 64
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 150,
        lineHeight: .92,
        letterSpacing: '-0.02em'
      }
    }, "\u0420\u041E\u0417\xAD\u041F\u0420\u041E\u0414\u0410\u0416"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 40,
        fontWeight: 700,
        opacity: .95,
        margin: '24px 0 0',
        maxWidth: 620
      }
    }, "\u0417\u043D\u0438\u0436\u043A\u0438 \u043D\u0430 \u0437\u0438\u043C\u043E\u0432\u0443 \u043A\u043E\u043B\u0435\u043A\u0446\u0456\u044E \u0434\u043B\u044F \u0434\u0456\u0442\u0435\u0439 \u0443 \u0432\u0441\u0456\u0445 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u0445 \xAB\u0410\u043B\u0456\u0441\u0430\xBB.")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 70,
        bottom: 200
      }
    }, /*#__PURE__*/React.createElement(SaleBurst, {
      top: "\u0434\u043E",
      main: "\u221250%",
      color: "yellow",
      size: 300,
      style: {
        transform: 'rotate(-8deg)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 72,
        bottom: 72,
        background: '#fff',
        borderRadius: 24,
        padding: '20px 38px'
      }
    }, /*#__PURE__*/React.createElement(PriceTag, {
      price: "249",
      oldPrice: "499",
      size: "lg"
    })));
  }
  if (kind === 'arrival') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...frame,
        background: 'var(--blue-100)',
        color: 'var(--ink-900)',
        padding: 72
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: blob({
        width: 520,
        height: 520,
        background: '#fff',
        bottom: -140,
        right: -120
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-primary.svg",
      style: {
        height: 72
      }
    }), /*#__PURE__*/React.createElement(Badge, {
      tone: "new",
      size: "lg"
    }, "\u041D\u043E\u0432\u0438\u043D\u043A\u0438")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 124,
        lineHeight: .96,
        marginTop: 80,
        position: 'relative',
        letterSpacing: '-0.02em'
      }
    }, "\u041D\u043E\u0432\u0430", /*#__PURE__*/React.createElement("br", null), "\u043A\u043E\u043B\u0435\u043A\u0446\u0456\u044F", /*#__PURE__*/React.createElement("br", null), "\u0432\u0435\u0441\u043D\u0438"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 96,
        bottom: 110,
        width: 360,
        height: 360,
        background: '#fff',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        color: 'var(--ink-300)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "image",
      style: {
        width: 90,
        height: 90
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 26
      }
    }, "\u0424\u043E\u0442\u043E \u0442\u043E\u0432\u0430\u0440\u0443")), /*#__PURE__*/React.createElement("p", {
      style: {
        position: 'absolute',
        left: 72,
        bottom: 80,
        fontSize: 36,
        fontWeight: 700,
        color: 'var(--blue-600)',
        margin: 0
      }
    }, "\u0412\u0436\u0435 \u0443 \u043F\u0440\u043E\u0434\u0430\u0436\u0443 \u2726 \u0437\u0430\u0445\u043E\u0434\u044C\u0442\u0435"));
  }
  // announce
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...frame,
      background: 'var(--cream)',
      color: 'var(--ink-900)',
      padding: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: blob({
      width: 380,
      height: 380,
      background: 'var(--green-100)',
      top: -100,
      left: -90
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: blob({
      width: 300,
      height: 300,
      background: 'var(--yellow-100)',
      bottom: -90,
      right: -70
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-primary.svg",
    style: {
      height: 96
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 96,
      lineHeight: 1,
      marginTop: 56,
      letterSpacing: '-0.01em'
    }
  }, "\u0412\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0454\u043C\u043E", /*#__PURE__*/React.createElement("br", null), "\u0442\u0440\u0435\u0442\u0456\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 40,
      fontWeight: 600,
      color: 'var(--ink-500)',
      marginTop: 28
    }
  }, "\u0427\u0435\u043A\u0430\u0454\u043C\u043E \u043D\u0430 \u0432\u0430\u0441 \u0443 \u0441\u0443\u0431\u043E\u0442\u0443 \u043E 10:00"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "\u0414\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044C \u0430\u0434\u0440\u0435\u0441\u0443"))));
}
window.SocialPost = SocialPost;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/SocialPost.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webshop/app.jsx
try { (() => {
/* IIFE */
;
(function () {
  /* Alisa webshop — app shell, router, overlays. */
  const DS = window.AlisaKidsStoreDesignSystem_194dcf;
  const {
    Button: AB,
    Badge: ABg,
    Input: AIn,
    IconButton: AIb
  } = DS;
  const Sd = window.AlisaShop;
  const Ud = window.AlisaUI;
  const Scr = window.AlisaScreens;
  const I = Ud.Icon;
  const TAB_ROUTES = {
    home: 'home',
    catalog: 'search',
    cart: 'cart',
    stores: 'stores',
    linkbio: 'user'
  };
  function App() {
    const [stack, setStack] = React.useState([{
      r: 'home',
      p: {}
    }]);
    const cur = stack[stack.length - 1];
    const [cart, setCart] = React.useState([]);
    const [overlay, setOverlay] = React.useState(null); // 'filters'|'dm'|'search'|'menu'
    const [toast, setToast] = React.useState(null);
    const scrollRef = React.useRef(null);
    React.useEffect(() => {
      if (window.lucide) window.lucide.createIcons();
    });
    React.useEffect(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, [stack.length, cur.r, cur.p.id]);
    const nav = (r, p = {}) => setStack(s => [...s, {
      r,
      p
    }]);
    const back = () => setStack(s => s.length > 1 ? s.slice(0, -1) : s);
    const tabNav = r => setStack([{
      r,
      p: {}
    }]);
    const cartCount = cart.reduce((s, i) => s + i.qty, 0);
    const addToCart = (p, size = null, qty = 1) => {
      setCart(c => {
        const k = c.findIndex(i => i.p.id === p.id && i.size === size);
        if (k >= 0) {
          const n = [...c];
          n[k] = {
            ...n[k],
            qty: n[k].qty + qty
          };
          return n;
        }
        return [...c, {
          p,
          size,
          qty
        }];
      });
      setToast(`Додано: ${p.name}`);
      setTimeout(() => setToast(null), 1800);
    };
    const setQty = (idx, v) => setCart(c => {
      const n = [...c];
      n[idx] = {
        ...n[idx],
        qty: v
      };
      return n;
    });
    const removeItem = idx => setCart(c => c.filter((_, i) => i !== idx));
    const placeOrder = () => {
      nav('confirm');
      setCart([]);
    };
    const TITLES = {
      catalog: 'Каталог',
      product: 'Товар',
      cart: 'Кошик',
      checkout: 'Оформлення',
      confirm: 'Готово',
      stores: 'Магазини',
      sale: 'Розпродаж',
      linkbio: 'Аліса',
      sizeguide: 'Таблиця розмірів'
    };
    const showLogo = cur.r === 'home';
    const canBack = stack.length > 1;
    let screen;
    if (cur.r === 'home') screen = /*#__PURE__*/React.createElement(Scr.HomeScreen, {
      nav: nav,
      addToCart: addToCart
    });else if (cur.r === 'catalog') screen = /*#__PURE__*/React.createElement(Scr.CatalogScreen, {
      nav: nav,
      addToCart: addToCart,
      params: cur.p,
      openFilters: () => setOverlay('filters')
    });else if (cur.r === 'product') screen = /*#__PURE__*/React.createElement(Scr.ProductScreen, {
      nav: nav,
      addToCart: addToCart,
      params: cur.p,
      openDM: () => setOverlay('dm')
    });else if (cur.r === 'cart') screen = /*#__PURE__*/React.createElement(Scr.CartScreen, {
      nav: nav,
      cart: cart,
      setQty: setQty,
      removeItem: removeItem
    });else if (cur.r === 'checkout') screen = /*#__PURE__*/React.createElement(Scr.CheckoutScreen, {
      nav: nav,
      cart: cart,
      placeOrder: placeOrder
    });else if (cur.r === 'confirm') screen = /*#__PURE__*/React.createElement(Scr.ConfirmScreen, {
      nav: tabNav
    });else if (cur.r === 'stores') screen = /*#__PURE__*/React.createElement(Scr.StoresScreen, {
      nav: nav
    });else if (cur.r === 'sale') screen = /*#__PURE__*/React.createElement(Scr.SaleScreen, {
      nav: nav,
      addToCart: addToCart
    });else if (cur.r === 'linkbio') screen = /*#__PURE__*/React.createElement(Scr.LinkBioScreen, {
      nav: nav
    });else if (cur.r === 'sizeguide') screen = /*#__PURE__*/React.createElement(SizeGuide, null);
    const isBio = cur.r === 'linkbio';
    return /*#__PURE__*/React.createElement("div", {
      className: "phone"
    }, /*#__PURE__*/React.createElement("div", {
      className: "statusbar"
    }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 5,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "signal",
      style: {
        width: 15,
        height: 15
      }
    }), /*#__PURE__*/React.createElement("i", {
      "data-lucide": "wifi",
      style: {
        width: 15,
        height: 15
      }
    }), /*#__PURE__*/React.createElement("i", {
      "data-lucide": "battery-full",
      style: {
        width: 19,
        height: 15
      }
    }))), !isBio && /*#__PURE__*/React.createElement("header", {
      className: "appbar"
    }, canBack ? /*#__PURE__*/React.createElement(AIb, {
      "aria-label": "\u041D\u0430\u0437\u0430\u0434",
      variant: "ghost",
      onClick: back
    }, I('arrow-left')) : /*#__PURE__*/React.createElement(AIb, {
      "aria-label": "\u041C\u0435\u043D\u044E",
      variant: "ghost",
      onClick: () => setOverlay('menu')
    }, I('menu')), showLogo ? /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-primary.svg",
      style: {
        height: 30
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 18,
        color: 'var(--ink-900)'
      }
    }, TITLES[cur.r] || ''), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement(AIb, {
      "aria-label": "\u041F\u043E\u0448\u0443\u043A",
      variant: "ghost",
      onClick: () => setOverlay('search')
    }, I('search')), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(AIb, {
      "aria-label": "\u041A\u043E\u0448\u0438\u043A",
      variant: "ghost",
      onClick: () => nav('cart')
    }, I('shopping-bag')), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
      className: "cartdot"
    }, cartCount)))), /*#__PURE__*/React.createElement("main", {
      className: "appscroll",
      ref: scrollRef,
      style: isBio ? {
        padding: '18px 18px 90px'
      } : {}
    }, screen), /*#__PURE__*/React.createElement("nav", {
      className: "bottomnav"
    }, [['home', 'Головна', 'home'], ['catalog', 'Каталог', 'layout-grid'], ['cart', 'Кошик', 'shopping-bag'], ['stores', 'Магазини', 'map-pin'], ['linkbio', 'Контакти', 'phone']].map(t => {
      const active = cur.r === t[0] || t[0] === 'catalog' && ['product', 'sale'].includes(cur.r) || t[0] === 'cart' && ['checkout', 'confirm'].includes(cur.r);
      return /*#__PURE__*/React.createElement("button", {
        key: t[0],
        className: 'navbtn' + (active ? ' on' : ''),
        onClick: () => tabNav(t[0] === 'catalog' ? 'catalog' : t[0])
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'relative'
        }
      }, /*#__PURE__*/React.createElement("i", {
        "data-lucide": t[2],
        style: {
          width: 22,
          height: 22
        }
      }), t[0] === 'cart' && cartCount > 0 && /*#__PURE__*/React.createElement("span", {
        className: "navdot"
      }, cartCount)), /*#__PURE__*/React.createElement("span", null, t[1]));
    })), toast && /*#__PURE__*/React.createElement("div", {
      className: "toast"
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check-circle",
      style: {
        width: 18,
        height: 18
      }
    }), toast), overlay === 'filters' && /*#__PURE__*/React.createElement(FiltersDrawer, {
      onClose: () => setOverlay(null),
      nav: (r, p) => {
        setOverlay(null);
        nav(r, p);
      }
    }), overlay === 'dm' && /*#__PURE__*/React.createElement(DMSheet, {
      onClose: () => setOverlay(null)
    }), overlay === 'search' && /*#__PURE__*/React.createElement(SearchOverlay, {
      onClose: () => setOverlay(null),
      nav: (r, p) => {
        setOverlay(null);
        nav(r, p);
      },
      addToCart: addToCart
    }), overlay === 'menu' && /*#__PURE__*/React.createElement(MenuDrawer, {
      onClose: () => setOverlay(null),
      nav: (r, p) => {
        setOverlay(null);
        tabNav(r === 'catalog' ? 'catalog' : r);
        if (p) setStack([{
          r,
          p
        }]);
      }
    }));
  }

  /* ---------- overlays ---------- */
  function Sheet({
    children,
    onClose,
    side
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ovl",
      onClick: onClose
    }, /*#__PURE__*/React.createElement("div", {
      className: 'sheet ' + (side || 'bottom'),
      onClick: e => e.stopPropagation()
    }, children));
  }
  function FiltersDrawer({
    onClose,
    nav
  }) {
    const [sel, setSel] = React.useState({
      cat: null,
      age: null,
      store: null,
      sale: false
    });
    const t = (k, v) => setSel(s => ({
      ...s,
      [k]: s[k] === v ? null : v
    }));
    const Chip = Ud.FilterChip;
    const grp = (title, children) => /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 13,
        color: 'var(--ink-900)',
        marginBottom: 8
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, children));
    return /*#__PURE__*/React.createElement(Sheet, {
      onClose: onClose,
      side: "right"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 20
      }
    }, "\u0424\u0456\u043B\u044C\u0442\u0440\u0438"), /*#__PURE__*/React.createElement(AIb, {
      "aria-label": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
      variant: "ghost",
      onClick: onClose
    }, I('x'))), grp('Категорія', Sd.CATS.filter(c => c.id !== 'sale').map(c => /*#__PURE__*/React.createElement(Chip, {
      key: c.id,
      label: c.uk,
      color: c.color,
      active: sel.cat === c.id,
      onClick: () => t('cat', c.id)
    }))), grp('Вік', ['0–2', '3–5', '6–9', '10–12'].map(a => /*#__PURE__*/React.createElement(Chip, {
      key: a,
      label: a + ' р',
      active: sel.age === a,
      onClick: () => t('age', a)
    }))), grp('Розмір (зріст)', Sd.SIZES_CLOTHING.map(s => /*#__PURE__*/React.createElement(Chip, {
      key: s,
      label: s,
      active: sel.size === s,
      onClick: () => setSel(x => ({
        ...x,
        size: x.size === s ? null : s
      }))
    }))), grp('Стать', ['Дівчатам', 'Хлопцям', 'Унісекс'].map(g => /*#__PURE__*/React.createElement(Chip, {
      key: g,
      label: g,
      active: sel.gender === g,
      onClick: () => setSel(x => ({
        ...x,
        gender: x.gender === g ? null : g
      }))
    }))), grp('Сезон', ['Літо', 'Зима', 'Демісезон'].map(g => /*#__PURE__*/React.createElement(Chip, {
      key: g,
      label: g,
      active: sel.season === g,
      onClick: () => setSel(x => ({
        ...x,
        season: x.season === g ? null : g
      }))
    }))), grp('Наявність у магазині', Sd.STORES.map(s => /*#__PURE__*/React.createElement(Chip, {
      key: s.id,
      label: s.id,
      active: sel.store === s.id,
      onClick: () => t('store', s.id)
    }))), grp('Особливе', [['Зі знижкою', 'sale'], ['Новинки', 'new'], ['Останні розміри', 'last']].map(o => /*#__PURE__*/React.createElement(Chip, {
      key: o[1],
      label: o[0],
      color: "pink",
      active: sel[o[1]],
      onClick: () => setSel(x => ({
        ...x,
        [o[1]]: !x[o[1]]
      }))
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        position: 'sticky',
        bottom: 0,
        background: '#fff',
        paddingTop: 10
      }
    }, /*#__PURE__*/React.createElement(AB, {
      variant: "ghost",
      onClick: () => setSel({})
    }, "\u0421\u043A\u0438\u043D\u0443\u0442\u0438"), /*#__PURE__*/React.createElement(AB, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      onClick: () => nav('catalog', sel.cat ? {
        cat: sel.cat
      } : {})
    }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0442\u043E\u0432\u0430\u0440\u0438")));
  }
  function DMSheet({
    onClose
  }) {
    const opts = [['Instagram Direct', 'instagram', 'var(--pink-500)', 'Відповідаємо щодня 9:00–21:00'], ['Viber', 'phone', 'var(--info)', 'Швидка відповідь'], ['Telegram', 'send', 'var(--blue-500)', 'Зручно з телефона'], ['Зателефонувати', 'phone-call', 'var(--green-600)', '+380 67 000 11 02']];
    return /*#__PURE__*/React.createElement(Sheet, {
      onClose: onClose
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 5,
        borderRadius: 99,
        background: 'var(--ink-200)',
        margin: '0 auto 16px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 20,
        marginBottom: 4
      }
    }, "\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043D\u0430\u043C"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--ink-500)',
        fontWeight: 600,
        margin: '0 0 16px'
      }
    }, "\u041F\u0456\u0434\u043A\u0430\u0436\u0435\u043C\u043E \u043D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C, \u0440\u043E\u0437\u043C\u0456\u0440 \u0456 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0435\u043C\u043E \u0456\u0437 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F\u043C."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, opts.map(o => /*#__PURE__*/React.createElement("button", {
      key: o[0],
      onClick: onClose,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        background: '#fff',
        border: '2px solid var(--ink-200)',
        borderRadius: 'var(--radius-md)',
        padding: '13px 16px',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": o[1],
      style: {
        width: 24,
        height: 24,
        color: o[2]
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 16,
        color: 'var(--ink-900)'
      }
    }, o[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink-500)',
        fontWeight: 600
      }
    }, o[3])), /*#__PURE__*/React.createElement("i", {
      "data-lucide": "chevron-right",
      style: {
        width: 18,
        height: 18,
        color: 'var(--ink-300)'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8
      }
    }));
  }
  function SearchOverlay({
    onClose,
    nav,
    addToCart
  }) {
    const [q, setQ] = React.useState('');
    const res = q.trim() ? Sd.PRODUCTS.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.id.includes(q)) : [];
    const popular = ['Комбінезон', 'Кросівки', 'Іграшки', 'Шапка', 'Рюкзак'];
    return /*#__PURE__*/React.createElement("div", {
      className: "ovl-full"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        padding: '14px 16px',
        borderBottom: '1px solid var(--ink-100)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "search",
      style: {
        position: 'absolute',
        left: 14,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 18,
        height: 18,
        color: 'var(--ink-400)'
      }
    }), /*#__PURE__*/React.createElement("input", {
      autoFocus: true,
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: "\u041F\u043E\u0448\u0443\u043A \u0442\u043E\u0432\u0430\u0440\u0456\u0432\u2026",
      style: {
        width: '100%',
        boxSizing: 'border-box',
        padding: '12px 14px 12px 42px',
        borderRadius: 'var(--radius-pill)',
        border: '2px solid var(--ink-200)',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 15,
        outline: 'none'
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        background: 'none',
        border: 0,
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--pink-600)',
        cursor: 'pointer'
      }
    }, "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        overflowY: 'auto'
      }
    }, !q.trim() && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 13,
        color: 'var(--ink-500)',
        marginBottom: 10
      }
    }, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456 \u0437\u0430\u043F\u0438\u0442\u0438"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, popular.map(t => /*#__PURE__*/React.createElement(Ud.FilterChip, {
      key: t,
      label: t,
      onClick: () => setQ(t)
    })))), q.trim() && res.length === 0 && /*#__PURE__*/React.createElement(Scr.EmptyState, {
      nav: nav
    }), res.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, res.map(p => /*#__PURE__*/React.createElement(Ud.ProductCard, {
      key: p.id,
      p: p,
      cat: Sd.catById(p.cat),
      onOpen: () => nav('product', {
        id: p.id
      }),
      onAdd: () => addToCart(p)
    })))));
  }
  function MenuDrawer({
    onClose,
    nav
  }) {
    const links = [['Головна', 'home', 'home'], ['Каталог', 'layout-grid', 'catalog'], ['Розпродаж', 'badge-percent', 'sale'], ['Новинки', 'sparkles', 'catalog'], ['Іграшки', 'blocks', 'catalog'], ['Магазини', 'map-pin', 'stores'], ['Контакти / Direct', 'phone', 'linkbio']];
    const info = ['Доставка і оплата', 'Обмін і повернення', 'Таблиця розмірів', 'Про нас'];
    return /*#__PURE__*/React.createElement(Sheet, {
      onClose: onClose,
      side: "left"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-primary.svg",
      style: {
        height: 30
      }
    }), /*#__PURE__*/React.createElement(AIb, {
      "aria-label": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
      variant: "ghost",
      onClick: onClose
    }, I('x'))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, links.map(l => /*#__PURE__*/React.createElement("button", {
      key: l[0],
      onClick: () => nav(l[2]),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 4px',
        background: 'none',
        border: 0,
        borderBottom: '1px solid var(--ink-100)',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": l[1],
      style: {
        width: 22,
        height: 22,
        color: 'var(--pink-500)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 17,
        color: 'var(--ink-900)'
      }
    }, l[0])))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        fontWeight: 800,
        fontSize: 12,
        color: 'var(--ink-400)',
        textTransform: 'uppercase',
        letterSpacing: '.05em'
      }
    }, "\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        marginTop: 8
      }
    }, info.map(t => /*#__PURE__*/React.createElement("a", {
      key: t,
      onClick: onClose,
      style: {
        padding: '8px 4px',
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--ink-600)',
        cursor: 'pointer'
      }
    }, t))));
  }
  function SizeGuide() {
    const rows = [['80', '9–12 міс', '11–12 кг'], ['86', '1–1,5 р', '12–13 кг'], ['92', '2 р', '13–14 кг'], ['98', '3 р', '14–15 кг'], ['104', '4 р', '15–17 кг'], ['110', '5 р', '17–19 кг'], ['116', '6 р', '19–22 кг'], ['122', '7 р', '22–25 кг']];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 26,
        margin: '0 0 12px'
      }
    }, "\u0422\u0430\u0431\u043B\u0438\u0446\u044F \u0440\u043E\u0437\u043C\u0456\u0440\u0456\u0432"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--ink-500)',
        fontWeight: 600,
        marginBottom: 16
      }
    }, "\u0420\u043E\u0437\u043C\u0456\u0440 \u043E\u0434\u044F\u0433\u0443 = \u0437\u0440\u0456\u0441\u0442 \u0434\u0438\u0442\u0438\u043D\u0438 \u0443 \u0441\u0430\u043D\u0442\u0438\u043C\u0435\u0442\u0440\u0430\u0445. \u042F\u043A\u0449\u043E \u0432\u0430\u0433\u0430\u0454\u0442\u0435\u0441\u044C \u2014 \u043E\u0431\u0435\u0440\u0456\u0442\u044C \u0431\u0456\u043B\u044C\u0448\u0438\u0439."), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--ink-100)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        background: 'var(--pink-500)',
        color: '#fff',
        fontWeight: 800,
        fontSize: 13
      }
    }, ['Розмір', 'Вік', 'Вага'].map(h => /*#__PURE__*/React.createElement("span", {
      key: h,
      style: {
        padding: '11px 14px'
      }
    }, h))), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        background: i % 2 ? 'var(--cream)' : '#fff',
        fontSize: 14
      }
    }, r.map((c, j) => /*#__PURE__*/React.createElement("span", {
      key: j,
      style: {
        padding: '11px 14px',
        fontWeight: j === 0 ? 800 : 600,
        color: j === 0 ? 'var(--ink-900)' : 'var(--ink-600)'
      }
    }, c))))));
  }
  ReactDOM.createRoot(document.getElementById('app')).render(/*#__PURE__*/React.createElement(App, null));
  setTimeout(() => window.lucide && window.lucide.createIcons(), 100);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webshop/data.jsx
try { (() => {
/* IIFE */
;
(function () {
  /* Alisa webshop — sample data, categories, stores. Shared via window.AlisaShop. */

  const CATS = [{
    id: 'clothing',
    uk: 'Одяг',
    color: 'blue',
    icon: 'shirt',
    desc: 'Зручний та якісний одяг для дітей від народження до 12 років.'
  }, {
    id: 'shoes',
    uk: 'Взуття',
    color: 'pink',
    icon: 'footprints',
    desc: 'Взуття на кожен сезон — від першого кроку до школи.'
  }, {
    id: 'toys',
    uk: 'Іграшки',
    color: 'green',
    icon: 'blocks',
    desc: 'Розвивальні та улюблені іграшки для будь-якого віку.'
  }, {
    id: 'seasonal',
    uk: 'Сезонне',
    color: 'yellow',
    icon: 'sun',
    desc: 'Все за погодою — від літніх панам до зимових комбінезонів.'
  }, {
    id: 'baby',
    uk: 'Малюкам',
    color: 'pink',
    icon: 'baby',
    desc: 'Найнеобхідніше для малюків 0–2 роки.'
  }, {
    id: 'school',
    uk: 'Школа',
    color: 'blue',
    icon: 'backpack',
    desc: 'Все для школи та садочка — до 1 вересня.'
  }, {
    id: 'sale',
    uk: 'Розпродаж',
    color: 'pinkDeep',
    icon: 'badge-percent',
    desc: 'Знижки на сезонні товари та останні розміри.'
  }];
  const STORES = [{
    id: 'A-1',
    name: 'Аліса А-1',
    city: 'Кам’янське',
    area: 'Лівий берег',
    addr: 'вул. Центральна, 14',
    hours: 'Пн–Нд 9:00–20:00',
    phone: '+380 67 000 11 01'
  }, {
    id: 'A-2',
    name: 'Аліса А-2',
    city: 'Кам’янське',
    area: 'Правий берег · ТРЦ «Дніпро Плаза»',
    addr: 'пр. Свободи, 51, 2 поверх',
    hours: 'Пн–Нд 10:00–21:00',
    phone: '+380 67 000 11 02'
  }, {
    id: 'A-3',
    name: 'Аліса А-3',
    city: 'Дніпро',
    area: 'Центр',
    addr: 'пр. Олександра Поля, 33',
    hours: 'Пн–Нд 9:00–21:00',
    phone: '+380 67 000 11 03'
  }];

  // availability helper: 'in' | 'last' | 'out'
  const P = (id, name, cat, price, oldPrice, ages, badge, av, hit) => ({
    id,
    name,
    cat,
    price,
    oldPrice,
    ages,
    badge,
    av,
    hit
  });
  const PRODUCTS = [P('104223', 'Комбінезон зимовий «Сніжинка»', 'clothing', 649, 999, '80–110', 'sale', {
    'A-1': 'in',
    'A-2': 'in',
    'A-3': 'last'
  }, true), P('118540', 'Шапка з помпоном', 'clothing', 149, 229, '1–4 р', 'sale', {
    'A-1': 'out',
    'A-2': 'in',
    'A-3': 'in'
  }, false), P('401290', 'Сукня святкова «Зірочка»', 'clothing', 549, null, '92–122', 'new', {
    'A-1': 'in',
    'A-2': 'in',
    'A-3': 'in'
  }, true), P('132201', 'Світшот з начосом', 'clothing', 399, null, '98–128', null, {
    'A-1': 'in',
    'A-2': 'last',
    'A-3': 'in'
  }, false), P('309845', 'Кросівки дитячі «Біг»', 'shoes', 449, 699, '27–33', 'sale', {
    'A-1': 'last',
    'A-2': 'in',
    'A-3': 'in'
  }, true), P('305112', 'Гумові чоботи', 'shoes', 299, null, '24–30', null, {
    'A-1': 'in',
    'A-2': 'in',
    'A-3': 'out'
  }, false), P('311777', 'Черевики демісезонні', 'shoes', 699, 899, '28–34', 'last', {
    'A-1': 'out',
    'A-2': 'last',
    'A-3': 'in'
  }, false), P('220871', 'Набір кубиків «Будуємо разом»', 'toys', 199, null, '1–5 р', 'new', {
    'A-1': 'in',
    'A-2': 'in',
    'A-3': 'in'
  }, true), P('221054', 'Пазл 100 деталей', 'toys', 159, 219, '4–8 р', 'sale', {
    'A-1': 'in',
    'A-2': 'in',
    'A-3': 'in'
  }, false), P('223410', 'Плюшевий ведмедик', 'toys', 349, null, '0+', 'hit', {
    'A-1': 'in',
    'A-2': 'last',
    'A-3': 'in'
  }, true), P('224901', 'Конструктор «Місто»', 'toys', 529, 749, '5–10 р', 'sale', {
    'A-1': 'last',
    'A-2': 'in',
    'A-3': 'in'
  }, false), P('601233', 'Панама літня', 'seasonal', 129, null, '1–6 р', 'new', {
    'A-1': 'in',
    'A-2': 'in',
    'A-3': 'in'
  }, false), P('602810', 'Купальник дитячий', 'seasonal', 219, 299, '92–122', 'sale', {
    'A-1': 'in',
    'A-2': 'in',
    'A-3': 'last'
  }, false), P('502118', 'Рюкзак шкільний «Старт»', 'school', 599, 849, 'one', 'sale', {
    'A-1': 'in',
    'A-2': 'in',
    'A-3': 'in'
  }, true), P('503277', 'Пенал на блискавці', 'school', 99, null, 'one', 'new', {
    'A-1': 'in',
    'A-2': 'in',
    'A-3': 'in'
  }, false), P('701055', 'Бодік для немовлят (3 шт)', 'baby', 279, 359, '56–74', 'sale', {
    'A-1': 'in',
    'A-2': 'in',
    'A-3': 'in'
  }, true)];

  // price buckets for sale page
  const BUCKETS = [{
    uk: 'до 199 ₴',
    max: 199,
    color: 'green'
  }, {
    uk: 'до 299 ₴',
    max: 299,
    color: 'blue'
  }, {
    uk: 'до 499 ₴',
    max: 499,
    color: 'yellow'
  }];
  const SIZES_CLOTHING = ['80', '86', '92', '98', '104', '110', '116', '122'];
  const SIZES_SHOES = ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33'];
  const AV_LABEL = {
    in: {
      uk: 'В наявності',
      tone: 'green'
    },
    last: {
      uk: 'Останній розмір',
      tone: 'yellow'
    },
    out: {
      uk: 'Немає',
      tone: 'gray'
    }
  };
  window.AlisaShop = {
    CATS,
    STORES,
    PRODUCTS,
    BUCKETS,
    SIZES_CLOTHING,
    SIZES_SHOES,
    AV_LABEL,
    catById: id => CATS.find(c => c.id === id),
    byId: id => PRODUCTS.find(p => p.id === id),
    inCat: id => PRODUCTS.filter(p => p.cat === id),
    onSale: () => PRODUCTS.filter(p => p.oldPrice),
    isNew: () => PRODUCTS.filter(p => p.badge === 'new'),
    popular: () => PRODUCTS.filter(p => p.hit)
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webshop/desktop.jsx
try { (() => {
/* Alisa webshop — desktop homepage. Reuses window.AlisaShop + window.AlisaUI. */
;
(function () {
  const DS = window.AlisaKidsStoreDesignSystem_194dcf;
  const {
    Button,
    Badge,
    IconButton,
    Input
  } = DS;
  const S = window.AlisaShop;
  const U = window.AlisaUI;
  const {
    Photo,
    ProductCard,
    PromoBanner,
    C500
  } = U;
  const go = () => {
    window.location.href = 'index.html';
  };
  const NAV = ['Каталог', 'Одяг', 'Взуття', 'Іграшки', 'Сезонне', 'Школа', 'Розпродаж'];
  function Header() {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: '#fff',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--pink-500)',
        color: '#fff',
        fontSize: 13,
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '7px 24px',
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "truck",
      style: {
        width: 15,
        height: 15
      }
    }), "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u041D\u043E\u0432\u043E\u044E \u043F\u043E\u0448\u0442\u043E\u044E \xB7 \u0441\u0430\u043C\u043E\u0432\u0438\u0432\u0456\u0437 \u0437 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0443 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "map-pin",
      style: {
        width: 14,
        height: 14
      }
    }), "3 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0438"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "phone",
      style: {
        width: 14,
        height: 14
      }
    }), "+380 67 000 11 02")))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 26
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-primary.svg",
      style: {
        height: 40,
        cursor: 'pointer'
      },
      onClick: go
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        position: 'relative',
        maxWidth: 520
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "search",
      style: {
        position: 'absolute',
        left: 16,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 19,
        height: 19,
        color: 'var(--ink-400)'
      }
    }), /*#__PURE__*/React.createElement("input", {
      placeholder: "\u041F\u043E\u0448\u0443\u043A \u0442\u043E\u0432\u0430\u0440\u0456\u0432 \u2014 \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \xAB\u043A\u043E\u043C\u0431\u0456\u043D\u0435\u0437\u043E\u043D\xBB",
      onClick: go,
      style: {
        width: '100%',
        boxSizing: 'border-box',
        padding: '13px 16px 13px 46px',
        border: '2px solid var(--ink-200)',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 15,
        outline: 'none'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      "aria-label": "\u0411\u0430\u0436\u0430\u043D\u0435",
      variant: "ghost",
      onClick: go
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "heart"
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "shopping-bag"
      }),
      onClick: go
    }, "\u041A\u043E\u0448\u0438\u043A \xB7 2"))), /*#__PURE__*/React.createElement("nav", {
      style: {
        borderTop: '1px solid var(--ink-100)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        gap: 4
      }
    }, NAV.map((n, i) => /*#__PURE__*/React.createElement("a", {
      key: n,
      onClick: go,
      style: {
        cursor: 'pointer',
        padding: '13px 16px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 15,
        color: i === 6 ? 'var(--pink-600)' : 'var(--ink-700)',
        display: 'flex',
        alignItems: 'center',
        gap: 7
      }
    }, i === 0 && /*#__PURE__*/React.createElement("i", {
      "data-lucide": "layout-grid",
      style: {
        width: 17,
        height: 17
      }
    }), n)))));
  }
  function Hero() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 24,
        marginBottom: 36
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--pink-500)',
        color: '#fff',
        borderRadius: 'var(--radius-xl)',
        padding: '48px 44px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: 'var(--radius-blob)',
        background: 'rgba(255,255,255,.13)',
        right: -90,
        top: -110
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "warning",
      size: "lg"
    }, "\u0417\u0438\u043C\u043E\u0432\u0438\u0439 \u0441\u0435\u0437\u043E\u043D"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 54,
        lineHeight: .98,
        margin: '16px 0 12px',
        letterSpacing: '-0.02em'
      }
    }, "\u0422\u0435\u043F\u043B\u043E \u0434\u043B\u044F", /*#__PURE__*/React.createElement("br", null), "\u043D\u0430\u0439\u043C\u0435\u043D\u0448\u0438\u0445"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        fontWeight: 600,
        opacity: .95,
        maxWidth: 380,
        margin: '0 0 24px'
      }
    }, "\u0417\u043D\u0438\u0436\u043A\u0438 \u0434\u043E 50% \u043D\u0430 \u0437\u0438\u043C\u043E\u0432\u0438\u0439 \u043E\u0434\u044F\u0433, \u0432\u0437\u0443\u0442\u0442\u044F \u0442\u0430 \u0430\u043A\u0441\u0435\u0441\u0443\u0430\u0440\u0438 \u0443 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u0445 \xAB\u0410\u043B\u0456\u0441\u0430\xBB."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "sale",
      size: "lg",
      onClick: go
    }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u0437\u043D\u0438\u0436\u043E\u043A"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: go,
      style: {
        background: '#fff'
      }
    }, "\u041D\u043E\u0432\u0438\u043D\u043A\u0438")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--blue-500)',
        color: '#fff',
        borderRadius: 'var(--radius-xl)',
        padding: '30px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 160,
        height: 160,
        borderRadius: 'var(--radius-blob)',
        background: 'rgba(255,255,255,.16)',
        right: -40,
        bottom: -50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 28
      }
    }, "\u041D\u043E\u0432\u0430 \u043A\u043E\u043B\u0435\u043A\u0446\u0456\u044F"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        fontWeight: 600,
        fontSize: 15,
        opacity: .95,
        margin: '2px 0 14px'
      }
    }, "\u0412\u0435\u0441\u043D\u0430 2026 \u0432\u0436\u0435 \u0443 \u043F\u0440\u043E\u0434\u0430\u0436\u0443"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: go,
      style: {
        background: '#fff'
      }
    }, "\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044F \u2192"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--green-500)',
        color: '#fff',
        borderRadius: 'var(--radius-xl)',
        padding: '30px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 160,
        height: 160,
        borderRadius: 'var(--radius-blob)',
        background: 'rgba(255,255,255,.16)',
        right: -40,
        bottom: -50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 28
      }
    }, "\u0406\u0433\u0440\u0430\u0448\u043A\u0430 \u0442\u0438\u0436\u043D\u044F"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        fontWeight: 600,
        fontSize: 15,
        opacity: .95,
        margin: '2px 0 14px'
      }
    }, "\u221230% \u043D\u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u0438"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: go,
      style: {
        background: '#fff'
      }
    }, "\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044F \u2192")))));
  }
  function Section({
    title,
    link,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 30,
        margin: 0,
        color: 'var(--ink-900)'
      }
    }, title), link && /*#__PURE__*/React.createElement("a", {
      onClick: go,
      style: {
        cursor: 'pointer',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--pink-600)'
      }
    }, link, " \u2192")), children);
  }
  function Grid({
    items
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5,1fr)',
        gap: 18
      }
    }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
      key: p.id,
      p: p,
      cat: S.catById(p.cat),
      onOpen: go,
      onAdd: go
    })));
  }
  function Footer() {
    const col = (title, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 15,
        color: 'var(--ink-900)',
        marginBottom: 14
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9
      }
    }, items.map(i => /*#__PURE__*/React.createElement("a", {
      key: i,
      onClick: go,
      style: {
        cursor: 'pointer',
        fontSize: 14,
        color: 'var(--ink-600)',
        fontWeight: 600
      }
    }, i))));
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: '#fff',
        borderTop: '1px solid var(--ink-100)',
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '44px 24px 28px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-primary.svg",
      style: {
        height: 36
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--ink-500)',
        fontWeight: 600,
        lineHeight: 1.6,
        margin: '14px 0 16px',
        maxWidth: 260
      }
    }, "\u0421\u0456\u043C\u0435\u0439\u043D\u0438\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0434\u0438\u0442\u044F\u0447\u043E\u0433\u043E \u043E\u0434\u044F\u0433\u0443, \u0432\u0437\u0443\u0442\u0442\u044F \u0442\u0430 \u0456\u0433\u0440\u0430\u0448\u043E\u043A. 3 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0438 \u0443 \u041A\u0430\u043C\u2019\u044F\u043D\u0441\u044C\u043A\u043E\u043C\u0443 \u0442\u0430 \u0414\u043D\u0456\u043F\u0440\u0456."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, ['instagram', 'facebook', 'send', 'phone'].map(s => /*#__PURE__*/React.createElement("span", {
      key: s,
      onClick: go,
      style: {
        cursor: 'pointer',
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--pink-100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": s,
      style: {
        width: 19,
        height: 19,
        color: 'var(--pink-600)'
      }
    }))))), col('Покупцям', ['Доставка і оплата', 'Обмін і повернення', 'Таблиця розмірів', 'Як замовити', 'Контакти']), col('Категорії', ['Одяг', 'Взуття', 'Іграшки', 'Сезонне', 'Школа', 'Розпродаж']), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 15,
        color: 'var(--ink-900)',
        marginBottom: 14
      }
    }, "\u041D\u0430\u0448\u0456 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0438"), S.STORES.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        marginBottom: 10,
        fontSize: 13.5
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--ink-900)'
      }
    }, s.id, " \xB7 ", s.city), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--ink-500)',
        fontWeight: 600
      }
    }, s.addr, " \xB7 ", s.hours))))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--ink-100)',
        marginTop: 28,
        paddingTop: 18,
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13,
        color: 'var(--ink-400)',
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \u041C\u0430\u0433\u0430\u0437\u0438\u043D \xAB\u0410\u043B\u0456\u0441\u0430\xBB. \u0423\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456."), /*#__PURE__*/React.createElement("span", null, "\u0417\u0440\u043E\u0431\u043B\u0435\u043D\u043E \u0437 \u2665 \u0434\u043B\u044F \u0440\u043E\u0434\u0438\u043D"))));
  }
  function Desktop() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '32px 24px 0'
      }
    }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7,1fr)',
        gap: 14,
        marginBottom: 42
      }
    }, S.CATS.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.id,
      onClick: go,
      style: {
        cursor: 'pointer',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '1/1',
        background: C500[c.color],
        color: c.color === 'yellow' ? 'var(--ink-900)' : '#fff',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 'var(--radius-blob)',
        background: 'rgba(255,255,255,.18)',
        right: -14,
        bottom: -18
      }
    }), /*#__PURE__*/React.createElement("i", {
      "data-lucide": c.icon,
      style: {
        width: 34,
        height: 34,
        position: 'relative'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 15,
        color: 'var(--ink-900)'
      }
    }, c.uk)))), /*#__PURE__*/React.createElement(Section, {
      title: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0435",
      link: "\u0423\u0441\u0456 \u0442\u043E\u0432\u0430\u0440\u0438"
    }, /*#__PURE__*/React.createElement(Grid, {
      items: S.popular()
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 42
      }
    }, /*#__PURE__*/React.createElement(PromoBanner, {
      color: "pinkDeep",
      kicker: "\u0422\u0456\u043B\u044C\u043A\u0438 \u0434\u043E \u043D\u0435\u0434\u0456\u043B\u0456",
      title: "\u0417\u0438\u043C\u043E\u0432\u0438\u0439 \u0440\u043E\u0437\u043F\u0440\u043E\u0434\u0430\u0436 \u2014 \u0437\u043D\u0438\u0436\u043A\u0438 \u0434\u043E 50%",
      sub: "\u0417\u0432\u0456\u043B\u044C\u043D\u044F\u0454\u043C\u043E \u043C\u0456\u0441\u0446\u0435 \u0434\u043B\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u0441\u0435\u0437\u043E\u043D\u0443",
      cta: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u0440\u043E\u0437\u043F\u0440\u043E\u0434\u0430\u0436\u0443",
      onClick: go
    })), /*#__PURE__*/React.createElement(Section, {
      title: "\u0417\u043D\u0438\u0436\u043A\u0438",
      link: "\u0420\u043E\u0437\u043F\u0440\u043E\u0434\u0430\u0436"
    }, /*#__PURE__*/React.createElement(Grid, {
      items: S.onSale().slice(0, 5)
    })), /*#__PURE__*/React.createElement(Section, {
      title: "\u041D\u043E\u0432\u0438\u043D\u043A\u0438",
      link: "\u0423\u0441\u0456 \u043D\u043E\u0432\u0438\u043D\u043A\u0438"
    }, /*#__PURE__*/React.createElement(Grid, {
      items: S.isNew().concat(S.PRODUCTS).slice(0, 5)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 18,
        marginBottom: 42
      }
    }, [['store', '3 магазини поруч', 'Кам’янське · Дніпро'], ['repeat', 'Легкий обмін', '14 днів із чеком'], ['message-circle', 'Прямий зв’язок', 'Direct · Viber · Telegram'], ['package-check', 'Самовивіз безкоштовно', 'з будь-якого магазину']].map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: '#fff',
        border: '1px solid var(--ink-100)',
        borderRadius: 'var(--radius-lg)',
        padding: 22,
        boxShadow: 'var(--ring-soft)',
        display: 'flex',
        gap: 14,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 50,
        height: 50,
        flex: 'none',
        borderRadius: 'var(--radius-md)',
        background: 'var(--pink-100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": b[0],
      style: {
        width: 24,
        height: 24,
        color: 'var(--pink-600)'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 15,
        color: 'var(--ink-900)'
      }
    }, b[1]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--ink-500)',
        fontWeight: 600
      }
    }, b[2]))))), /*#__PURE__*/React.createElement(Section, {
      title: "\u041C\u0438 \u0432 Instagram",
      link: "@alisa.store"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(6,1fr)',
        gap: 14
      }
    }, S.PRODUCTS.slice(0, 6).map(p => /*#__PURE__*/React.createElement("div", {
      key: p.id,
      onClick: go,
      style: {
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      cat: S.catById(p.cat)
    })))))), /*#__PURE__*/React.createElement(Footer, null));
  }
  ReactDOM.createRoot(document.getElementById('app')).render(/*#__PURE__*/React.createElement(Desktop, null));
  setTimeout(() => window.lucide && window.lucide.createIcons(), 150);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/desktop.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webshop/screens1.jsx
try { (() => {
/* IIFE */
;
(function () {
  /* Alisa webshop — screens 1: Home, Catalog, Product detail. window.AlisaScreens (part 1) */
  const {
    Button,
    Badge,
    Tag,
    IconButton,
    Input,
    Notice
  } = window.AlisaKidsStoreDesignSystem_194dcf;
  const S = window.AlisaShop;
  const U = window.AlisaUI;
  const {
    Icon,
    Photo,
    ProductCard,
    SectionHead,
    HScroll,
    PromoBanner,
    Breadcrumbs,
    Qty,
    StoreDots,
    Price,
    C500,
    C100,
    C600,
    disc
  } = U;

  /* ---------------- HOME ---------------- */
  function HomeScreen({
    nav,
    addToCart
  }) {
    const cats = S.CATS;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--pink-500)',
        color: '#fff',
        borderRadius: 'var(--radius-xl)',
        padding: '24px 22px 22px',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 'var(--radius-blob)',
        background: 'rgba(255,255,255,.14)',
        right: -60,
        top: -70
      }
    }), /*#__PURE__*/React.createElement(Badge, {
      tone: "warning",
      size: "lg"
    }, "\u0417\u0438\u043C\u043E\u0432\u0438\u0439 \u0441\u0435\u0437\u043E\u043D"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 34,
        lineHeight: 1.0,
        margin: '12px 0 8px',
        letterSpacing: '-0.02em',
        position: 'relative'
      }
    }, "\u0422\u0435\u043F\u043B\u043E \u0434\u043B\u044F", /*#__PURE__*/React.createElement("br", null), "\u043D\u0430\u0439\u043C\u0435\u043D\u0448\u0438\u0445"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        opacity: .95,
        margin: '0 0 16px',
        maxWidth: 240,
        position: 'relative'
      }
    }, "\u0417\u043D\u0438\u0436\u043A\u0438 \u0434\u043E 50% \u043D\u0430 \u0437\u0438\u043C\u043E\u0432\u0438\u0439 \u043E\u0434\u044F\u0433 \u0442\u0430 \u0432\u0437\u0443\u0442\u0442\u044F \u0443 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u0445 \xAB\u0410\u043B\u0456\u0441\u0430\xBB."), /*#__PURE__*/React.createElement(Button, {
      variant: "sale",
      onClick: () => nav('catalog', {
        cat: 'sale'
      })
    }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u0437\u043D\u0438\u0436\u043E\u043A")), /*#__PURE__*/React.createElement(SectionHead, {
      title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: 12,
        marginBottom: 24
      }
    }, cats.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.id,
      onClick: () => nav('catalog', {
        cat: c.id
      }),
      style: {
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        background: C500[c.color],
        color: c.color === 'yellow' ? 'var(--ink-900)' : '#fff',
        borderRadius: 'var(--radius-lg)',
        padding: '16px 16px 18px',
        minHeight: 84,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 90,
        height: 90,
        borderRadius: 'var(--radius-blob)',
        background: 'rgba(255,255,255,.18)',
        right: -22,
        bottom: -30
      }
    }), /*#__PURE__*/React.createElement("i", {
      "data-lucide": c.icon,
      style: {
        width: 30,
        height: 30,
        strokeWidth: 2,
        position: 'relative'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 19,
        position: 'relative'
      }
    }, c.uk)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement(PromoBanner, {
      color: "pinkDeep",
      kicker: "\u0420\u043E\u0437\u043F\u0440\u043E\u0434\u0430\u0436",
      title: "\u0417\u0438\u043C\u043E\u0432\u0438\u0439 \u0440\u043E\u0437\u043F\u0440\u043E\u0434\u0430\u0436",
      sub: "\u0417\u043D\u0438\u0436\u043A\u0438 \u0434\u043E \u221250%",
      cta: "\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044F",
      onClick: () => nav('sale')
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(PromoBanner, {
      color: "blue",
      title: "\u041D\u043E\u0432\u0430 \u043A\u043E\u043B\u0435\u043A\u0446\u0456\u044F",
      sub: "\u0412\u0435\u0441\u043D\u0430 2026",
      cta: "\u041D\u043E\u0432\u0438\u043D\u043A\u0438",
      onClick: () => nav('catalog', {
        filter: 'new'
      })
    }), /*#__PURE__*/React.createElement(PromoBanner, {
      color: "green",
      title: "\u0406\u0433\u0440\u0430\u0448\u043A\u0430 \u0442\u0438\u0436\u043D\u044F",
      sub: "\u221230%",
      cta: "\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044F",
      onClick: () => nav('catalog', {
        cat: 'toys'
      })
    }))), /*#__PURE__*/React.createElement(SectionHead, {
      title: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0435",
      action: "\u0423\u0441\u0456",
      onAction: () => nav('catalog', {})
    }), /*#__PURE__*/React.createElement(HScroll, null, S.popular().map(p => /*#__PURE__*/React.createElement(ProductCard, {
      key: p.id,
      p: p,
      cat: S.catById(p.cat),
      onOpen: () => nav('product', {
        id: p.id
      }),
      onAdd: () => addToCart(p)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 18
      }
    }), /*#__PURE__*/React.createElement(SectionHead, {
      title: "\u0417\u043D\u0438\u0436\u043A\u0438",
      action: "\u0423\u0441\u0456",
      onAction: () => nav('sale')
    }), /*#__PURE__*/React.createElement(HScroll, null, S.onSale().map(p => /*#__PURE__*/React.createElement(ProductCard, {
      key: p.id,
      p: p,
      cat: S.catById(p.cat),
      onOpen: () => nav('product', {
        id: p.id
      }),
      onAdd: () => addToCart(p)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 18
      }
    }), /*#__PURE__*/React.createElement(SectionHead, {
      title: "\u041D\u043E\u0432\u0438\u043D\u043A\u0438",
      action: "\u0423\u0441\u0456",
      onAction: () => nav('catalog', {
        filter: 'new'
      })
    }), /*#__PURE__*/React.createElement(HScroll, null, S.isNew().map(p => /*#__PURE__*/React.createElement(ProductCard, {
      key: p.id,
      p: p,
      cat: S.catById(p.cat),
      onOpen: () => nav('product', {
        id: p.id
      }),
      onAdd: () => addToCart(p)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 24
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--blue-100)',
        borderRadius: 'var(--radius-lg)',
        padding: 18,
        display: 'flex',
        gap: 14,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-md)',
        background: 'var(--blue-500)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "store",
      style: {
        width: 24,
        height: 24
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 15,
        color: 'var(--ink-900)'
      }
    }, "\u041C\u043E\u0436\u043D\u0430 \u0437\u0430\u0431\u0440\u0430\u0442\u0438 \u0443 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--blue-600)',
        fontWeight: 600
      }
    }, "3 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0438 \xB7 \u0410-1 \xB7 \u0410-2 \xB7 \u0410-3")), /*#__PURE__*/React.createElement(IconButton, {
      "aria-label": "\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u0438",
      variant: "soft",
      onClick: () => nav('stores')
    }, Icon('chevron-right'))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 24
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, [['store', '3 магазини', 'офлайн поруч'], ['repeat', 'Легкий обмін', '14 днів із чеком'], ['message-circle', 'Прямий зв’язок', 'Direct · Viber · Telegram'], ['package-check', 'Самовивіз', 'безкоштовно з магазину']].map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: '#fff',
        border: '1px solid var(--ink-100)',
        borderRadius: 'var(--radius-md)',
        padding: 14,
        boxShadow: 'var(--ring-soft)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": b[0],
      style: {
        width: 24,
        height: 24,
        color: 'var(--pink-500)',
        strokeWidth: 2
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        color: 'var(--ink-900)',
        marginTop: 8
      }
    }, b[1]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink-500)',
        fontWeight: 600
      }
    }, b[2])))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 24
      }
    }), /*#__PURE__*/React.createElement(SectionHead, {
      title: "\u041C\u0438 \u0432 Instagram",
      action: "@alisa.store",
      onAction: () => nav('linkbio')
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 8
      }
    }, S.PRODUCTS.slice(0, 6).map(p => /*#__PURE__*/React.createElement("div", {
      key: p.id,
      onClick: () => nav('product', {
        id: p.id
      }),
      style: {
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      cat: S.catById(p.cat)
    })))));
  }

  /* ---------------- CATALOG / LISTING ---------------- */
  function CatalogScreen({
    nav,
    addToCart,
    params,
    openFilters
  }) {
    const cat = params.cat ? S.catById(params.cat) : null;
    let list = cat ? S.inCat(cat.id) : params.cat === 'sale' ? S.onSale() : S.PRODUCTS;
    if (params.cat === 'sale') list = S.onSale();
    if (params.filter === 'new') list = S.isNew();
    const [sort, setSort] = React.useState('pop');
    const sorted = [...list].sort((a, b) => {
      if (sort === 'new') return (b.badge === 'new') - (a.badge === 'new');
      if (sort === 'lo') return a.price - b.price;
      if (sort === 'hi') return b.price - a.price;
      if (sort === 'disc') return disc(b) - disc(a);
      return (b.hit ? 1 : 0) - (a.hit ? 1 : 0);
    });
    const SORTS = [['pop', 'Популярні'], ['new', 'Новинки'], ['lo', 'Спочатку дешевші'], ['hi', 'Спочатку дорожчі'], ['disc', 'Найбільша знижка']];
    const title = cat ? cat.uk : params.cat === 'sale' ? 'Розпродаж' : params.filter === 'new' ? 'Новинки' : 'Усі товари';
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumbs, {
      items: [{
        label: 'Головна',
        onClick: () => nav('home')
      }, {
        label: 'Каталог',
        onClick: () => nav('catalog', {})
      }, {
        label: title
      }]
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 28,
        margin: '0 0 4px',
        color: 'var(--ink-900)'
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--ink-500)',
        margin: '0 0 16px',
        fontWeight: 600
      }
    }, cat ? cat.desc : 'Усе для дітей — одяг, взуття, іграшки та сезонні товари.'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      icon: Icon('sliders-horizontal'),
      onClick: openFilters
    }, "\u0424\u0456\u043B\u044C\u0442\u0440\u0438"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("select", {
      value: sort,
      onChange: e => setSort(e.target.value),
      style: {
        width: '100%',
        height: '100%',
        appearance: 'none',
        WebkitAppearance: 'none',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13.5,
        color: 'var(--ink-700)',
        background: '#fff',
        border: '2px solid var(--ink-200)',
        borderRadius: 'var(--radius-pill)',
        padding: '0 36px 0 16px'
      }
    }, SORTS.map(s => /*#__PURE__*/React.createElement("option", {
      key: s[0],
      value: s[0]
    }, s[1]))), /*#__PURE__*/React.createElement("i", {
      "data-lucide": "chevron-down",
      style: {
        position: 'absolute',
        right: 14,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
        color: 'var(--ink-400)',
        pointerEvents: 'none'
      }
    }))), /*#__PURE__*/React.createElement(PromoBanner, {
      color: "pinkDeep",
      kicker: "\u0422\u0456\u043B\u044C\u043A\u0438 \u0434\u043E \u043D\u0435\u0434\u0456\u043B\u0456",
      title: "\u0420\u043E\u0437\u043F\u0440\u043E\u0434\u0430\u0436 \u221250%",
      cta: "\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044F",
      onClick: () => nav('sale')
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 16
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--ink-400)',
        fontWeight: 700,
        marginBottom: 12
      }
    }, sorted.length, " \u0442\u043E\u0432\u0430\u0440\u0456\u0432"), sorted.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
      nav: nav
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, sorted.map(p => /*#__PURE__*/React.createElement(ProductCard, {
      key: p.id,
      p: p,
      cat: S.catById(p.cat),
      onOpen: () => nav('product', {
        id: p.id
      }),
      onAdd: () => addToCart(p)
    }))), sorted.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 8,
        margin: '22px 0 0'
      }
    }, [1, 2, 3].map(n => /*#__PURE__*/React.createElement("span", {
      key: n,
      style: {
        width: 38,
        height: 38,
        borderRadius: 'var(--radius-pill)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 800,
        fontSize: 14,
        background: n === 1 ? 'var(--pink-500)' : '#fff',
        color: n === 1 ? '#fff' : 'var(--ink-600)',
        border: '2px solid ' + (n === 1 ? 'var(--pink-500)' : 'var(--ink-200)'),
        cursor: 'pointer'
      }
    }, n)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 'var(--radius-pill)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        border: '2px solid var(--ink-200)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "chevron-right",
      style: {
        width: 16,
        height: 16
      }
    }))));
  }
  function EmptyState({
    nav
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '30px 20px',
        background: '#fff',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--ink-100)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 80,
        height: 80,
        margin: '0 auto 16px',
        borderRadius: 'var(--radius-blob)',
        background: 'var(--pink-100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "search-x",
      style: {
        width: 38,
        height: 38,
        color: 'var(--pink-500)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 20,
        color: 'var(--ink-900)'
      }
    }, "\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0448\u043B\u0438"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--ink-500)',
        fontWeight: 600,
        margin: '6px 0 16px'
      }
    }, "\u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u0444\u0456\u043B\u044C\u0442\u0440\u0438 \u0430\u0431\u043E \u043D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043D\u0430\u043C \u2014 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0435\u043C\u043E \u043F\u0456\u0434\u0456\u0431\u0440\u0430\u0442\u0438."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => nav('catalog', {})
    }, "\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0444\u0456\u043B\u044C\u0442\u0440\u0438"));
  }

  /* ---------------- PRODUCT DETAIL ---------------- */
  function ProductScreen({
    nav,
    addToCart,
    params,
    openDM
  }) {
    const p = S.byId(params.id) || S.PRODUCTS[0];
    const cat = S.catById(p.cat);
    const sizes = p.cat === 'shoes' ? S.SIZES_SHOES : p.cat === 'clothing' || p.cat === 'seasonal' ? S.SIZES_CLOTHING : null;
    const [size, setSize] = React.useState(null);
    const [qty, setQty] = React.useState(1);
    const [gallery, setGallery] = React.useState(0);
    const b = p.badge && U.PBADGE[p.badge];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumbs, {
      items: [{
        label: 'Головна',
        onClick: () => nav('home')
      }, {
        label: cat.uk,
        onClick: () => nav('catalog', {
          cat: cat.id
        })
      }, {
        label: p.name
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 12,
        left: 12,
        zIndex: 2,
        display: 'flex',
        gap: 6
      }
    }, b && /*#__PURE__*/React.createElement(Badge, {
      tone: b.t
    }, b.l), p.oldPrice && /*#__PURE__*/React.createElement(Badge, {
      tone: "sale"
    }, "\u2212", disc(p), "%")), /*#__PURE__*/React.createElement(Photo, {
      cat: cat,
      ratio: "1 / 1",
      radius: "var(--radius-lg)",
      big: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 10
      }
    }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => setGallery(i),
      style: {
        flex: '0 0 64px',
        border: '2px solid ' + (gallery === i ? 'var(--pink-500)' : 'var(--ink-200)'),
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      cat: cat
    }))))), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 25,
        margin: '4px 0 4px',
        color: 'var(--ink-900)',
        lineHeight: 1.1
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink-400)',
        fontWeight: 700,
        marginBottom: 12
      }
    }, "\u0410\u0440\u0442. ", p.id), /*#__PURE__*/React.createElement(Price, {
      p: p,
      size: 34
    }), sizes && /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '18px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        color: 'var(--ink-900)'
      }
    }, p.cat === 'shoes' ? 'Розмір' : 'Розмір (зріст)'), /*#__PURE__*/React.createElement("a", {
      onClick: () => nav('sizeguide'),
      style: {
        fontWeight: 700,
        fontSize: 13,
        color: 'var(--pink-600)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "ruler",
      style: {
        width: 14,
        height: 14
      }
    }), "\u0422\u0430\u0431\u043B\u0438\u0446\u044F \u0440\u043E\u0437\u043C\u0456\u0440\u0456\u0432")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, sizes.map(s => /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: () => setSize(s),
      style: {
        minWidth: 48,
        height: 44,
        padding: '0 12px',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 800,
        fontSize: 15,
        border: '2px solid ' + (size === s ? 'var(--pink-500)' : 'var(--ink-200)'),
        background: size === s ? 'var(--pink-100)' : '#fff',
        color: size === s ? 'var(--pink-600)' : 'var(--ink-700)'
      }
    }, s)))), !sizes && /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '18px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        color: 'var(--ink-900)'
      }
    }, "\u0412\u0456\u043A: "), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 14,
        color: 'var(--ink-600)'
      }
    }, p.ages)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '18px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        color: 'var(--ink-900)'
      }
    }, "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C"), /*#__PURE__*/React.createElement(Qty, {
      value: qty,
      onChange: setQty
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--ink-100)',
        borderRadius: 'var(--radius-lg)',
        padding: 16,
        margin: '18px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        color: 'var(--ink-900)',
        marginBottom: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "store",
      style: {
        width: 18,
        height: 18,
        color: 'var(--pink-500)'
      }
    }), "\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0443 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u0445"), S.STORES.map(s => {
      const st = p.av[s.id];
      const lbl = S.AV_LABEL[st];
      const c = st === 'in' ? 'var(--green-600)' : st === 'last' ? 'var(--yellow-600)' : 'var(--ink-400)';
      return /*#__PURE__*/React.createElement("div", {
        key: s.id,
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '9px 0',
          borderBottom: '1px solid var(--ink-100)'
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 800,
          fontSize: 14,
          color: 'var(--ink-900)'
        }
      }, s.id), " ", /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12.5,
          color: 'var(--ink-500)',
          fontWeight: 600
        }
      }, "\xB7 ", s.city, ", ", s.area.split('·')[0])), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 800,
          fontSize: 13,
          color: c,
          display: 'flex',
          alignItems: 'center',
          gap: 6
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: st === 'in' ? 'var(--green-500)' : st === 'last' ? 'var(--yellow-500)' : 'var(--ink-300)'
        }
      }), lbl.uk));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      icon: Icon('shopping-bag'),
      onClick: () => addToCart(p, size, qty)
    }, "\u0414\u043E\u0434\u0430\u0442\u0438 \u0432 \u043A\u043E\u0448\u0438\u043A"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      icon: Icon('phone-call'),
      onClick: openDM
    }, "\u0423\u0442\u043E\u0447\u043D\u0438\u0442\u0438 \u043D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 2
      }
    }, [['Direct', 'instagram', 'var(--pink-500)'], ['Viber', 'phone', 'var(--info)'], ['Telegram', 'send', 'var(--blue-500)']].map(m => /*#__PURE__*/React.createElement("button", {
      key: m[0],
      onClick: openDM,
      style: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 13.5,
        padding: '11px 0',
        borderRadius: 'var(--radius-pill)',
        border: '2px solid var(--ink-200)',
        background: '#fff',
        color: 'var(--ink-700)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": m[1],
      style: {
        width: 16,
        height: 16,
        color: m[2]
      }
    }), m[0])))), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '18px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        background: 'var(--green-100)',
        borderRadius: 'var(--radius-md)',
        padding: '13px 15px'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "truck",
      style: {
        width: 20,
        height: 20,
        color: 'var(--green-600)',
        flex: 'none',
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--ink-700)',
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--ink-900)'
      }
    }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"), " \u041D\u043E\u0432\u043E\u044E \u043F\u043E\u0448\u0442\u043E\u044E \u043F\u043E \u0432\u0441\u0456\u0439 \u0423\u043A\u0440\u0430\u0457\u043D\u0456. 1\u20133 \u0434\u043D\u0456.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        background: 'var(--blue-100)',
        borderRadius: 'var(--radius-md)',
        padding: '13px 15px'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "package-check",
      style: {
        width: 20,
        height: 20,
        color: 'var(--blue-600)',
        flex: 'none',
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--ink-700)',
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--ink-900)'
      }
    }, "\u0421\u0430\u043C\u043E\u0432\u0438\u0432\u0456\u0437 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E"), " \u0437 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0443 \u0410-1, \u0410-2 \u0430\u0431\u043E \u0410-3."))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8
      }
    }), /*#__PURE__*/React.createElement(SectionHead, {
      title: "\u041E\u043F\u0438\u0441"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--ink-700)',
        lineHeight: 1.6,
        fontWeight: 500,
        margin: '0 0 18px'
      }
    }, p.name, " \u2014 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u0438\u0439 \u0432\u0438\u0431\u0456\u0440 \u0434\u043B\u044F \u0449\u043E\u0434\u0435\u043D\u043D\u043E\u0433\u043E \u043D\u043E\u0441\u0456\u043D\u043D\u044F. \u041C\u2019\u044F\u043A\u0456 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0438, \u043F\u0440\u0438\u0454\u043C\u043D\u0456 \u0434\u043E \u0448\u043A\u0456\u0440\u0438, \u043F\u0440\u043E\u0441\u0442\u0456 \u0432 \u0434\u043E\u0433\u043B\u044F\u0434\u0456. \u0406\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u0456\u0434\u0445\u043E\u0434\u0438\u0442\u044C \u0434\u043B\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0445 \u043C\u0430\u043B\u044E\u043A\u0456\u0432."), /*#__PURE__*/React.createElement(SectionHead, {
      title: "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--ink-100)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        marginBottom: 8
      }
    }, [['Категорія', cat.uk], ['Вік / розмір', p.ages === 'one' ? 'Один розмір' : p.ages], ['Сезон', 'Демісезон / Зима'], ['Матеріал', 'Бавовна 90%, еластан 10%'], ['Догляд', 'Прання при 30°']].map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '11px 14px',
        background: i % 2 ? 'var(--cream)' : '#fff',
        fontSize: 13.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-500)',
        fontWeight: 600
      }
    }, r[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-900)',
        fontWeight: 700,
        textAlign: 'right'
      }
    }, r[1])))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 18
      }
    }), /*#__PURE__*/React.createElement(SectionHead, {
      title: "\u0421\u0445\u043E\u0436\u0456 \u0442\u043E\u0432\u0430\u0440\u0438"
    }), /*#__PURE__*/React.createElement(HScroll, null, S.inCat(p.cat).filter(x => x.id !== p.id).concat(S.PRODUCTS).slice(0, 6).map(x => /*#__PURE__*/React.createElement(ProductCard, {
      key: x.id,
      p: x,
      cat: S.catById(x.cat),
      onOpen: () => {
        nav('product', {
          id: x.id
        });
        window.scrollTo && 0;
      },
      onAdd: () => addToCart(x)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 14
      }
    }), /*#__PURE__*/React.createElement(SectionHead, {
      title: "\u0412\u0438 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0430\u043B\u0438"
    }), /*#__PURE__*/React.createElement(HScroll, null, S.popular().slice(0, 4).map(x => /*#__PURE__*/React.createElement(ProductCard, {
      key: x.id,
      p: x,
      cat: S.catById(x.cat),
      onOpen: () => nav('product', {
        id: x.id
      }),
      onAdd: () => addToCart(x)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 90
      }
    }));
  }
  window.AlisaScreens = Object.assign(window.AlisaScreens || {}, {
    HomeScreen,
    CatalogScreen,
    ProductScreen,
    EmptyState
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/screens1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webshop/screens2.jsx
try { (() => {
/* IIFE */
;
(function () {
  /* Alisa webshop — screens 2: Cart, Checkout, Confirm, Stores, Sale, Link-in-bio, overlays. */
  const {
    Button: B2,
    Badge: Bg2,
    Input: In2,
    Notice: No2,
    IconButton: Ib2
  } = window.AlisaKidsStoreDesignSystem_194dcf;
  const S2 = window.AlisaShop;
  const U2 = window.AlisaUI;
  const {
    Icon: Ic,
    Photo: Ph,
    ProductCard: PC2,
    SectionHead: SH2,
    HScroll: HS2,
    PromoBanner: PB2,
    StoreCard,
    Breadcrumbs: BC2,
    Qty: Qty2,
    Price: Pr2,
    C500: c5,
    C100: c1,
    C600: c6
  } = U2;

  /* ---------------- CART ---------------- */
  function CartScreen({
    nav,
    cart,
    setQty,
    removeItem
  }) {
    const total = cart.reduce((s, i) => s + i.p.price * i.qty, 0);
    const old = cart.reduce((s, i) => s + (i.p.oldPrice || i.p.price) * i.qty, 0);
    const saved = old - total;
    if (cart.length === 0) return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '40px 20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 96,
        height: 96,
        margin: '0 auto 18px',
        borderRadius: 'var(--radius-blob)',
        background: 'var(--pink-100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "shopping-bag",
      style: {
        width: 46,
        height: 46,
        color: 'var(--pink-500)'
      }
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 24,
        color: 'var(--ink-900)',
        margin: 0
      }
    }, "\u041A\u043E\u0448\u0438\u043A \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--ink-500)',
        fontWeight: 600,
        margin: '8px 0 18px'
      }
    }, "\u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u0442\u043E\u0432\u0430\u0440\u0438, \u044F\u043A\u0456 \u0432\u0430\u043C \u0441\u043F\u043E\u0434\u043E\u0431\u0430\u043B\u0438\u0441\u044C."), /*#__PURE__*/React.createElement(B2, {
      variant: "primary",
      size: "lg",
      onClick: () => nav('catalog', {})
    }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0443"));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 28,
        margin: '0 0 16px',
        color: 'var(--ink-900)'
      }
    }, "\u041A\u043E\u0448\u0438\u043A"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, cart.map((it, idx) => /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        display: 'flex',
        gap: 12,
        background: '#fff',
        border: '1px solid var(--ink-100)',
        borderRadius: 'var(--radius-lg)',
        padding: 12,
        boxShadow: 'var(--ring-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 84,
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Ph, {
      cat: S2.catById(it.p.cat)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14.5,
        color: 'var(--ink-900)',
        lineHeight: 1.2
      }
    }, it.p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-400)',
        fontWeight: 700,
        margin: '2px 0 8px'
      }
    }, "\u0410\u0440\u0442. ", it.p.id, it.size ? ` · розмір ${it.size}` : ''), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(Pr2, {
      p: it.p,
      size: 20
    }), /*#__PURE__*/React.createElement(Ib2, {
      "aria-label": "\u041F\u0440\u0438\u0431\u0440\u0430\u0442\u0438",
      variant: "ghost",
      size: "sm",
      onClick: () => removeItem(idx)
    }, Ic('trash-2'))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Qty2, {
      value: it.qty,
      onChange: v => setQty(idx, v)
    })))))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--ink-100)',
        borderRadius: 'var(--radius-lg)',
        padding: 16,
        margin: '16px 0'
      }
    }, /*#__PURE__*/React.createElement(Row, {
      k: "\u0421\u0443\u043C\u0430",
      v: `${old} ₴`
    }), saved > 0 && /*#__PURE__*/React.createElement(Row, {
      k: "\u0417\u043D\u0438\u0436\u043A\u0430",
      v: `−${saved} ₴`,
      accent: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: 'var(--ink-100)',
        margin: '10px 0'
      }
    }), /*#__PURE__*/React.createElement(Row, {
      k: "\u0414\u043E \u0441\u043F\u043B\u0430\u0442\u0438",
      v: `${total} ₴`,
      big: true
    })), /*#__PURE__*/React.createElement(No2, {
      tone: "info",
      title: "\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0443\u0454 \u043C\u0430\u0433\u0430\u0437\u0438\u043D"
    }, "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0437\u0432\u2019\u044F\u0436\u0435\u0442\u044C\u0441\u044F \u0437 \u0432\u0430\u043C\u0438 \u043F\u0456\u0441\u043B\u044F \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F, \u0449\u043E\u0431 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u043D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0442\u0430 \u0440\u043E\u0437\u043C\u0456\u0440."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(B2, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      onClick: () => nav('checkout')
    }, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"), /*#__PURE__*/React.createElement(B2, {
      variant: "ghost",
      fullWidth: true,
      onClick: () => nav('catalog', {})
    }, "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 20
      }
    }));
  }
  function Row({
    k,
    v,
    big,
    accent
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '3px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: big ? 16 : 14,
        fontWeight: big ? 800 : 600,
        color: big ? 'var(--ink-900)' : 'var(--ink-500)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: big ? 'var(--font-display)' : 'inherit',
        fontSize: big ? 24 : 14.5,
        fontWeight: big ? 700 : 800,
        color: accent ? 'var(--pink-600)' : 'var(--ink-900)'
      }
    }, v));
  }

  /* ---------------- CHECKOUT ---------------- */
  function CheckoutScreen({
    nav,
    cart,
    placeOrder
  }) {
    const [step, setStep] = React.useState(0);
    const [delivery, setDelivery] = React.useState('np');
    const [store, setStore] = React.useState('A-2');
    const [pay, setPay] = React.useState('cod');
    const total = cart.reduce((s, i) => s + i.p.price * i.qty, 0);
    const steps = ['Контакти', 'Доставка', 'Підтвердження'];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 26,
        margin: '0 0 16px',
        color: 'var(--ink-900)'
      }
    }, "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20
      }
    }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 800,
        fontSize: 14,
        background: i <= step ? 'var(--pink-500)' : '#fff',
        color: i <= step ? '#fff' : 'var(--ink-400)',
        border: '2px solid ' + (i <= step ? 'var(--pink-500)' : 'var(--ink-200)')
      }
    }, i < step ? '✓' : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: i <= step ? 'var(--ink-900)' : 'var(--ink-400)'
      }
    }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 2,
        background: i < step ? 'var(--pink-500)' : 'var(--ink-200)',
        margin: '0 6px',
        marginBottom: 18
      }
    })))), step === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(In2, {
      label: "\u0406\u043C\u2019\u044F \u0442\u0430 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435",
      placeholder: "\u041D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u041E\u043B\u0435\u043D\u0430 \u041A\u043E\u0432\u0430\u043B\u044C",
      required: true
    }), /*#__PURE__*/React.createElement(In2, {
      label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
      type: "tel",
      placeholder: "+380 __ ___ __ __",
      required: true,
      icon: Ic('phone')
    }), /*#__PURE__*/React.createElement(In2, {
      label: "\u041C\u0456\u0441\u0442\u043E",
      placeholder: "\u041A\u0430\u043C\u2019\u044F\u043D\u0441\u044C\u043A\u0435 / \u0414\u043D\u0456\u043F\u0440\u043E\u2026",
      icon: Ic('map-pin')
    }), /*#__PURE__*/React.createElement(B2, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      onClick: () => setStep(1)
    }, "\u0414\u0430\u043B\u0456")), step === 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        color: 'var(--ink-900)',
        marginBottom: 8
      }
    }, "\u0421\u043F\u043E\u0441\u0456\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"), [['np', 'Нова пошта', 'відділення / поштомат · 1–3 дні'], ['pickup', 'Самовивіз із магазину', 'безкоштовно · А-1 · А-2 · А-3'], ['courier', 'Кур’єр по місту', 'Кам’янське · Дніпро']].map(o => /*#__PURE__*/React.createElement(RadioRow, {
      key: o[0],
      active: delivery === o[0],
      onClick: () => setDelivery(o[0]),
      title: o[1],
      sub: o[2]
    }))), delivery === 'pickup' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        color: 'var(--ink-900)',
        marginBottom: 8
      }
    }, "\u042F\u043A\u0438\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, S2.STORES.map(s => /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => setStore(s.id),
      style: {
        flex: 1,
        padding: '10px 0',
        borderRadius: 'var(--radius-md)',
        fontWeight: 800,
        fontSize: 14,
        cursor: 'pointer',
        border: '2px solid ' + (store === s.id ? 'var(--pink-500)' : 'var(--ink-200)'),
        background: store === s.id ? 'var(--pink-100)' : '#fff',
        color: store === s.id ? 'var(--pink-600)' : 'var(--ink-700)'
      }
    }, s.id)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        color: 'var(--ink-900)',
        marginBottom: 8
      }
    }, "\u041E\u043F\u043B\u0430\u0442\u0430"), [['cod', 'При отриманні', 'готівка або картка'], ['card', 'Картка онлайн', 'скоро · поки недоступно']].map(o => /*#__PURE__*/React.createElement(RadioRow, {
      key: o[0],
      active: pay === o[0],
      onClick: () => o[0] === 'cod' && setPay(o[0]),
      title: o[1],
      sub: o[2],
      disabled: o[0] === 'card'
    }))), /*#__PURE__*/React.createElement(In2, {
      label: "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440 \u0434\u043E \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
      placeholder: "\u041D\u0430\u043F\u0440.: \u0437\u0430\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443\u0439\u0442\u0435 \u043F\u0456\u0441\u043B\u044F 18:00"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(B2, {
      variant: "ghost",
      onClick: () => setStep(0)
    }, "\u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/React.createElement(B2, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      onClick: () => setStep(2)
    }, "\u0414\u0430\u043B\u0456"))), step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--ink-100)',
        borderRadius: 'var(--radius-lg)',
        padding: 16,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 15,
        color: 'var(--ink-900)',
        marginBottom: 10
      }
    }, "\u0412\u0430\u0448\u0435 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"), cart.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13.5,
        padding: '5px 0',
        color: 'var(--ink-700)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, it.p.name, " ", it.size ? `(${it.size})` : '', " \xD7 ", it.qty), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        color: 'var(--ink-900)',
        whiteSpace: 'nowrap'
      }
    }, it.p.price * it.qty, " \u20B4"))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: 'var(--ink-100)',
        margin: '10px 0'
      }
    }), /*#__PURE__*/React.createElement(Row, {
      k: "\u0414\u043E \u0441\u043F\u043B\u0430\u0442\u0438",
      v: `${total} ₴`,
      big: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--ink-500)',
        fontWeight: 600,
        marginTop: 8
      }
    }, delivery === 'pickup' ? `Самовивіз · магазин ${store}` : delivery === 'np' ? 'Нова пошта' : 'Кур’єр по місту', " \xB7 ", pay === 'cod' ? 'Оплата при отриманні' : 'Картка онлайн')), /*#__PURE__*/React.createElement(No2, {
      tone: "info",
      title: "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u0432\u0456\u0434 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0443"
    }, "\u0426\u0435 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0454 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F. \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0437\u0432\u2019\u044F\u0436\u0435\u0442\u044C\u0441\u044F \u0437 \u0432\u0430\u043C\u0438 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C, \u0449\u043E\u0431 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u043D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0456 \u0434\u0435\u0442\u0430\u043B\u0456."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(B2, {
      variant: "ghost",
      onClick: () => setStep(1)
    }, "\u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/React.createElement(B2, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      onClick: placeOrder
    }, "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 20
      }
    }));
  }
  function RadioRow({
    active,
    onClick,
    title,
    sub,
    disabled
  }) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: disabled ? null : onClick,
      style: {
        opacity: disabled ? .55 : 1,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '13px 14px',
        borderRadius: 'var(--radius-md)',
        border: '2px solid ' + (active ? 'var(--pink-500)' : 'var(--ink-200)'),
        background: active ? 'var(--pink-100)' : '#fff',
        cursor: disabled ? 'not-allowed' : 'pointer',
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        flex: 'none',
        border: '2px solid ' + (active ? 'var(--pink-500)' : 'var(--ink-300)'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, active && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 11,
        height: 11,
        borderRadius: '50%',
        background: 'var(--pink-500)'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        color: 'var(--ink-900)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink-500)',
        fontWeight: 600
      }
    }, sub)));
  }

  /* ---------------- CONFIRMATION ---------------- */
  function ConfirmScreen({
    nav
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '30px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 104,
        height: 104,
        margin: '0 auto 20px',
        borderRadius: 'var(--radius-blob)',
        background: 'var(--green-100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check",
      style: {
        width: 54,
        height: 54,
        color: 'var(--green-600)',
        strokeWidth: 3
      }
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 28,
        color: 'var(--ink-900)',
        margin: 0
      }
    }, "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u043E!"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        color: 'var(--ink-600)',
        fontWeight: 600,
        margin: '10px auto 4px',
        maxWidth: 300,
        lineHeight: 1.5
      }
    }, "\u0414\u044F\u043A\u0443\u0454\u043C\u043E! \u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--ink-900)'
      }
    }, "#10472"), "."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--ink-500)',
        fontWeight: 600,
        margin: '0 auto 22px',
        maxWidth: 300,
        lineHeight: 1.5
      }
    }, "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0437\u0430\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443\u0454 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C, \u0449\u043E\u0431 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u043D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0456 \u0434\u0435\u0442\u0430\u043B\u0456 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        maxWidth: 320,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(B2, {
      variant: "secondary",
      fullWidth: true,
      icon: Ic('message-circle')
    }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u0438 \u043D\u0430\u043C \u0443 Direct"), /*#__PURE__*/React.createElement(B2, {
      variant: "primary",
      fullWidth: true,
      onClick: () => nav('home')
    }, "\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443")));
  }

  /* ---------------- STORES ---------------- */
  function StoresScreen({
    nav
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BC2, {
      items: [{
        label: 'Головна',
        onClick: () => nav('home')
      }, {
        label: 'Магазини'
      }]
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 28,
        margin: '0 0 4px',
        color: 'var(--ink-900)'
      }
    }, "\u041D\u0430\u0448\u0456 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0438"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--ink-500)',
        fontWeight: 600,
        margin: '0 0 18px'
      }
    }, "\u0417\u0430\u0432\u0456\u0442\u0430\u0439\u0442\u0435 \u0434\u043E \u043D\u0430\u0441 \u2014 \u043F\u0440\u0438\u043C\u0456\u0440\u044F\u0439\u0442\u0435 \u0442\u0430 \u0437\u0430\u0431\u0435\u0440\u0456\u0442\u044C \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0435\u0437 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, S2.STORES.map(s => /*#__PURE__*/React.createElement(StoreCard, {
      key: s.id,
      s: s
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 18
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--pink-500)',
        color: '#fff',
        borderRadius: 'var(--radius-lg)',
        padding: 20,
        display: 'flex',
        gap: 16,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 74,
        height: 74,
        flex: 'none',
        background: '#fff',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "qr-code",
      style: {
        width: 48,
        height: 48,
        color: 'var(--ink-900)'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 19
      }
    }, "\u0421\u043A\u0430\u043D\u0443\u0439\u0442\u0435 \u0443 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13.5,
        opacity: .95
      }
    }, "\u0414\u0438\u0432\u0456\u0442\u044C\u0441\u044F \u043D\u043E\u0432\u0438\u043D\u043A\u0438 \u0442\u0430 \u0430\u043A\u0446\u0456\u0457 \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u0440\u044F\u043C\u043E \u0437 \u043F\u043E\u043B\u0438\u0446\u0456."))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 20
      }
    }));
  }

  /* ---------------- SALE ---------------- */
  function SaleScreen({
    nav,
    addToCart
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--pink-600)',
        color: '#fff',
        borderRadius: 'var(--radius-xl)',
        padding: '24px 22px',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 180,
        height: 180,
        borderRadius: 'var(--radius-blob)',
        background: 'rgba(255,255,255,.14)',
        right: -50,
        bottom: -60
      }
    }), /*#__PURE__*/React.createElement(Bg2, {
      tone: "warning",
      size: "lg"
    }, "\u0420\u043E\u0437\u043F\u0440\u043E\u0434\u0430\u0436"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 32,
        margin: '12px 0 6px',
        letterSpacing: '-0.02em',
        position: 'relative'
      }
    }, "\u0417\u043D\u0438\u0436\u043A\u0438 \u0434\u043E \u221250%"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        fontWeight: 600,
        opacity: .95,
        margin: 0,
        maxWidth: 260,
        position: 'relative'
      }
    }, "\u0417\u0432\u0456\u043B\u044C\u043D\u044F\u0454\u043C\u043E \u043C\u0456\u0441\u0446\u0435 \u0434\u043B\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u0441\u0435\u0437\u043E\u043D\u0443. \u0413\u0430\u0440\u043D\u0456 \u0440\u0435\u0447\u0456 \u0437\u0430 \u043F\u0440\u0438\u0454\u043C\u043D\u0438\u043C\u0438 \u0446\u0456\u043D\u0430\u043C\u0438.")), /*#__PURE__*/React.createElement(SH2, {
      title: "\u0417\u0430 \u0446\u0456\u043D\u043E\u044E"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 10,
        marginBottom: 22
      }
    }, S2.BUCKETS.map(bk => /*#__PURE__*/React.createElement("div", {
      key: bk.uk,
      onClick: () => nav('catalog', {
        cat: 'sale'
      }),
      style: {
        cursor: 'pointer',
        background: c1[bk.color],
        borderRadius: 'var(--radius-lg)',
        padding: '18px 10px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        color: c6[bk.color]
      }
    }, bk.uk)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement(PB2, {
      color: "yellow",
      kicker: "\u0412\u0441\u0442\u0438\u0433\u043D\u0456\u0442\u044C",
      title: "\u041E\u0441\u0442\u0430\u043D\u043D\u0456 \u0440\u043E\u0437\u043C\u0456\u0440\u0438",
      sub: "\u0429\u043E \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C \u2014 \u0437\u0430 \u0437\u043D\u0438\u0436\u0435\u043D\u043E\u044E \u0446\u0456\u043D\u043E\u044E",
      cta: "\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044F",
      onClick: () => nav('catalog', {
        cat: 'sale'
      })
    }), /*#__PURE__*/React.createElement(PB2, {
      color: "blue",
      kicker: "\u0421\u0435\u0437\u043E\u043D",
      title: "\u0417\u0438\u043C\u043E\u0432\u0438\u0439 \u0440\u043E\u0437\u043F\u0440\u043E\u0434\u0430\u0436",
      sub: "\u041A\u0443\u0440\u0442\u043A\u0438, \u043A\u043E\u043C\u0431\u0456\u043D\u0435\u0437\u043E\u043D\u0438, \u0432\u0437\u0443\u0442\u0442\u044F",
      cta: "\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044F",
      onClick: () => nav('catalog', {
        cat: 'clothing'
      })
    })), /*#__PURE__*/React.createElement(SH2, {
      title: "\u0422\u043E\u0432\u0430\u0440\u0438 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, S2.onSale().map(p => /*#__PURE__*/React.createElement(PC2, {
      key: p.id,
      p: p,
      cat: S2.catById(p.cat),
      onOpen: () => nav('product', {
        id: p.id
      }),
      onAdd: () => addToCart(p)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 20
      }
    }));
  }

  /* ---------------- LINK-IN-BIO ---------------- */
  function LinkBioScreen({
    nav
  }) {
    const blocks = [['Новинки', 'sparkles', 'blue', () => nav('catalog', {
      filter: 'new'
    })], ['Акції', 'badge-percent', 'pinkDeep', () => nav('sale')], ['Останні розміри', 'timer', 'yellow', () => nav('catalog', {
      cat: 'sale'
    })], ['Іграшки', 'blocks', 'green', () => nav('catalog', {
      cat: 'toys'
    })]];
    const contacts = [['Instagram Direct', 'instagram'], ['Viber', 'phone'], ['Telegram', 'send'], ['Каталог на сайті', 'globe']];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-primary.svg",
      style: {
        height: 54,
        margin: '8px 0 6px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--ink-500)'
      }
    }, "\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \xAB\u0410\u043B\u0456\u0441\u0430\xBB"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--ink-400)',
        fontWeight: 600,
        margin: '2px 0 18px'
      }
    }, "\u041A\u0430\u043C\u2019\u044F\u043D\u0441\u044C\u043A\u0435 \xB7 \u0414\u043D\u0456\u043F\u0440\u043E \xB7 3 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0438"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12,
        marginBottom: 16
      }
    }, blocks.map(b => /*#__PURE__*/React.createElement("div", {
      key: b[0],
      onClick: b[3],
      style: {
        cursor: 'pointer',
        background: c5[b[2]],
        color: b[2] === 'yellow' ? 'var(--ink-900)' : '#fff',
        borderRadius: 'var(--radius-lg)',
        padding: '20px 12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        boxShadow: 'var(--shadow-sm)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 70,
        height: 70,
        borderRadius: 'var(--radius-blob)',
        background: 'rgba(255,255,255,.18)',
        right: -16,
        bottom: -22
      }
    }), /*#__PURE__*/React.createElement("i", {
      "data-lucide": b[1],
      style: {
        width: 30,
        height: 30,
        position: 'relative'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        position: 'relative'
      }
    }, b[0])))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 18
      }
    }, contacts.map(c => /*#__PURE__*/React.createElement("button", {
      key: c[0],
      onClick: () => c[0].includes('Каталог') && nav('home'),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        background: '#fff',
        border: '2px solid var(--ink-200)',
        borderRadius: 'var(--radius-pill)',
        padding: '13px 18px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 15,
        color: 'var(--ink-800)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": c[1],
      style: {
        width: 20,
        height: 20,
        color: 'var(--pink-500)'
      }
    }), c[0], /*#__PURE__*/React.createElement("i", {
      "data-lucide": "chevron-right",
      style: {
        width: 18,
        height: 18,
        marginLeft: 'auto',
        color: 'var(--ink-300)'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--cream)',
        border: '1px solid var(--ink-100)',
        borderRadius: 'var(--radius-lg)',
        padding: 18,
        display: 'flex',
        gap: 14,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 70,
        height: 70,
        flex: 'none',
        background: '#fff',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--ring-soft)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "qr-code",
      style: {
        width: 46,
        height: 46,
        color: 'var(--ink-900)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        color: 'var(--ink-900)'
      }
    }, "QR \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u0438 \u0442\u0430 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink-500)',
        fontWeight: 600
      }
    }, "\u0420\u043E\u0437\u0434\u0440\u0443\u043A\u0443\u0439\u0442\u0435 \u0434\u043B\u044F \u0432\u0456\u0442\u0440\u0438\u043D\u0438 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0443."))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 20
      }
    }));
  }
  window.AlisaScreens = Object.assign(window.AlisaScreens || {}, {
    CartScreen,
    CheckoutScreen,
    ConfirmScreen,
    StoresScreen,
    SaleScreen,
    LinkBioScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/screens2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webshop/ui.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* IIFE */
;
(function () {
  /* Alisa webshop — shared UI components. window.AlisaUI */
  const {
    Button,
    Badge,
    Tag,
    IconButton,
    Input,
    Notice,
    Card
  } = window.AlisaKidsStoreDesignSystem_194dcf;
  const {
    AV_LABEL
  } = window.AlisaShop;
  const C500 = {
    blue: 'var(--blue-500)',
    green: 'var(--green-500)',
    yellow: 'var(--yellow-400)',
    pink: 'var(--pink-500)',
    pinkDeep: 'var(--pink-600)',
    gray: 'var(--ink-400)'
  };
  const C100 = {
    blue: 'var(--blue-100)',
    green: 'var(--green-100)',
    yellow: 'var(--yellow-100)',
    pink: 'var(--pink-100)',
    pinkDeep: 'var(--pink-100)',
    gray: 'var(--ink-100)'
  };
  const C600 = {
    blue: 'var(--blue-600)',
    green: 'var(--green-600)',
    yellow: 'var(--yellow-600)',
    pink: 'var(--pink-600)',
    pinkDeep: 'var(--pink-600)',
    gray: 'var(--ink-500)'
  };
  const Icon = (n, props = {}) => /*#__PURE__*/React.createElement("i", _extends({
    "data-lucide": n
  }, props));

  /* product/category photo placeholder — soft tint + category icon (no real photos yet) */
  function Photo({
    cat,
    icon,
    ratio = '1 / 1',
    radius = 'var(--radius-md)',
    big = false
  }) {
    const col = cat ? cat.color : 'pink';
    const ic = icon || (cat ? cat.icon : 'image');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: ratio,
        width: '100%',
        background: C100[col],
        borderRadius: radius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": ic,
      style: {
        width: big ? 84 : 46,
        height: big ? 84 : 46,
        color: C500[col],
        strokeWidth: 1.7,
        opacity: .85
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        bottom: 8,
        fontSize: 10,
        fontWeight: 700,
        color: C600[col],
        opacity: .65
      }
    }, "\u0444\u043E\u0442\u043E \u0442\u043E\u0432\u0430\u0440\u0443"));
  }
  const PBADGE = {
    sale: {
      t: 'sale',
      l: 'Акція'
    },
    new: {
      t: 'new',
      l: 'Новинка'
    },
    last: {
      t: 'warning',
      l: 'Останній розмір'
    },
    hit: {
      t: 'info',
      l: 'Хіт'
    }
  };
  function disc(p) {
    return p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  }

  /* availability dots for A-1/A-2/A-3 */
  function StoreDots({
    av,
    compact = false
  }) {
    const dot = s => {
      const st = av[s];
      const bg = st === 'in' ? 'var(--green-500)' : st === 'last' ? 'var(--yellow-500)' : 'var(--ink-300)';
      return /*#__PURE__*/React.createElement("span", {
        key: s,
        title: s,
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          fontSize: 12,
          fontWeight: 800,
          color: 'var(--ink-500)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: bg
        }
      }), s);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: compact ? 8 : 12
      }
    }, Object.keys(av).map(dot));
  }
  function Price({
    p,
    size = 28
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, p.oldPrice && /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: size * 0.52,
        color: 'var(--ink-400)',
        textDecoration: 'line-through',
        textDecorationColor: 'var(--pink-400)',
        whiteSpace: 'nowrap'
      }
    }, p.oldPrice, " \u20B4"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: size,
        color: p.oldPrice ? 'var(--pink-600)' : 'var(--ink-900)',
        lineHeight: .9,
        whiteSpace: 'nowrap'
      }
    }, p.price, " \u20B4"));
  }

  /* main product card — works for clothing & toys */
  function ProductCard({
    p,
    cat,
    onOpen,
    onAdd
  }) {
    const b = p.badge && PBADGE[p.badge];
    const anyIn = Object.values(p.av).some(s => s === 'in');
    const anyLast = !anyIn && Object.values(p.av).some(s => s === 'last');
    const statusLabel = anyIn ? 'В наявності' : anyLast ? 'Останній розмір' : 'Немає в наявності';
    const statusColor = anyIn ? 'var(--green-600)' : anyLast ? 'var(--yellow-600)' : 'var(--ink-400)';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--ink-100)',
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 2,
        display: 'flex',
        gap: 6
      }
    }, b && /*#__PURE__*/React.createElement(Badge, {
      tone: b.t
    }, b.l), p.oldPrice && p.badge !== 'sale' && /*#__PURE__*/React.createElement(Badge, {
      tone: "sale"
    }, "\u2212", disc(p), "%")), /*#__PURE__*/React.createElement("div", {
      onClick: onOpen,
      style: {
        cursor: 'pointer',
        padding: 10
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      cat: cat
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 12px 14px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onOpen,
      style: {
        cursor: 'pointer',
        fontWeight: 800,
        fontSize: 15,
        color: 'var(--ink-900)',
        lineHeight: 1.25,
        minHeight: 38
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-400)',
        fontWeight: 700,
        margin: '4px 0 8px'
      }
    }, "\u0410\u0440\u0442. ", p.id, " \xB7 ", p.ages !== 'one' && p.ages !== '0+' ? 'розм. ' : '', p.ages === 'one' ? 'один розмір' : p.ages), /*#__PURE__*/React.createElement(Price, {
      p: p,
      size: 24
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6,
        flexWrap: 'wrap',
        margin: '10px 0 12px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        color: statusColor
      }
    }, statusLabel), /*#__PURE__*/React.createElement(StoreDots, {
      av: p.av,
      compact: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: onOpen,
      fullWidth: true
    }, "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"), anyIn || anyLast ? /*#__PURE__*/React.createElement(IconButton, {
      "aria-label": "\u0423 \u043A\u043E\u0448\u0438\u043A",
      variant: "solid",
      size: "sm",
      onClick: onAdd
    }, Icon('shopping-bag')) : null)));
  }
  function SectionHead({
    title,
    action,
    onAction
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 0 12px'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 21,
        margin: 0,
        color: 'var(--ink-900)'
      }
    }, title), action && /*#__PURE__*/React.createElement("a", {
      onClick: onAction,
      style: {
        fontWeight: 700,
        fontSize: 13,
        color: 'var(--pink-600)',
        cursor: 'pointer',
        whiteSpace: 'nowrap'
      }
    }, action, " \u2192"));
  }

  /* horizontal scroll carousel */
  function HScroll({
    children,
    w = 178
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        overflowX: 'auto',
        margin: '0 -16px',
        padding: '4px 16px 8px',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch'
      }
    }, React.Children.map(children, c => /*#__PURE__*/React.createElement("div", {
      style: {
        flex: `0 0 ${w}px`,
        scrollSnapAlign: 'start'
      }
    }, c)));
  }
  function PromoBanner({
    color = 'pink',
    kicker,
    title,
    sub,
    cta,
    icon,
    onClick
  }) {
    const dark = color === 'yellow';
    const fg = dark ? 'var(--ink-900)' : '#fff';
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-lg)',
        background: C500[color],
        color: fg,
        padding: '20px 22px',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 150,
        height: 150,
        borderRadius: 'var(--radius-blob)',
        background: 'rgba(255,255,255,.16)',
        right: -40,
        bottom: -50
      }
    }), kicker && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        fontWeight: 800,
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: '.05em',
        opacity: .92
      }
    }, kicker), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 26,
        lineHeight: 1.02,
        margin: '4px 0 2px'
      }
    }, title), sub && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        fontWeight: 600,
        fontSize: 14,
        opacity: .95
      }
    }, sub), cta && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        marginTop: 14,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: dark ? 'var(--ink-900)' : '#fff',
        color: dark ? '#fff' : C600[color],
        fontWeight: 700,
        fontSize: 14,
        padding: '9px 16px',
        borderRadius: 'var(--radius-pill)'
      }
    }, cta, " ", /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 15,
        height: 15
      }
    })));
  }
  function FilterChip({
    label,
    active,
    onClick,
    color
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13.5,
        padding: '8px 14px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        border: '2px solid ' + (active ? color ? C500[color] : 'var(--pink-500)' : 'var(--ink-200)'),
        background: active ? color ? C100[color] : 'var(--pink-100)' : '#fff',
        color: active ? color ? C600[color] : 'var(--pink-600)' : 'var(--ink-700)',
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, label);
  }
  function Breadcrumbs({
    items
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        flexWrap: 'wrap',
        fontSize: 12.5,
        color: 'var(--ink-400)',
        fontWeight: 700,
        marginBottom: 10
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 && /*#__PURE__*/React.createElement("i", {
      "data-lucide": "chevron-right",
      style: {
        width: 13,
        height: 13
      }
    }), /*#__PURE__*/React.createElement("span", {
      onClick: it.onClick,
      style: {
        cursor: it.onClick ? 'pointer' : 'default',
        color: i === items.length - 1 ? 'var(--ink-700)' : 'var(--ink-400)'
      }
    }, it.label))));
  }
  function Qty({
    value,
    onChange
  }) {
    const btn = {
      width: 38,
      height: 38,
      border: '2px solid var(--ink-200)',
      background: '#fff',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 800,
      fontSize: 18,
      cursor: 'pointer',
      color: 'var(--ink-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: btn,
      onClick: () => onChange(Math.max(1, value - 1))
    }, "\u2212"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: 18,
        minWidth: 24,
        textAlign: 'center'
      }
    }, value), /*#__PURE__*/React.createElement("button", {
      style: btn,
      onClick: () => onChange(value + 1)
    }, "+"));
  }
  function StoreCard({
    s,
    av,
    onReserve
  }) {
    const st = av && av[s.id];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--ink-100)',
        borderRadius: 'var(--radius-lg)',
        padding: 18,
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        background: 'var(--pink-500)',
        color: '#fff',
        borderRadius: 'var(--radius-pill)',
        padding: '4px 14px'
      }
    }, s.id), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 15,
        color: 'var(--ink-900)'
      }
    }, s.city), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink-500)',
        fontWeight: 600
      }
    }, s.area))), /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '16/7',
        background: 'var(--ink-100)',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--ink-300)',
        gap: 6,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "map-pin",
      style: {
        width: 22,
        height: 22
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 12
      }
    }, "\u041C\u0430\u043F\u0430")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        fontSize: 13.5,
        color: 'var(--ink-700)',
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "map-pin",
      style: {
        width: 15,
        height: 15,
        color: 'var(--pink-500)'
      }
    }), s.addr), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "clock",
      style: {
        width: 15,
        height: 15,
        color: 'var(--pink-500)'
      }
    }), s.hours), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "phone",
      style: {
        width: 15,
        height: 15,
        color: 'var(--pink-500)'
      }
    }), s.phone)), st && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, st !== 'out' ? /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      fullWidth: true,
      onClick: onReserve
    }, st === 'last' ? 'Останній — забронювати' : 'Забронювати тут') : /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 13,
        color: 'var(--ink-400)',
        textAlign: 'center',
        padding: '8px 0'
      }
    }, "\u041D\u0435\u043C\u0430\u0454 \u0432 \u0446\u044C\u043E\u043C\u0443 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456")));
  }
  window.AlisaUI = {
    Icon,
    Photo,
    ProductCard,
    SectionHead,
    HScroll,
    PromoBanner,
    FilterChip,
    Breadcrumbs,
    Qty,
    StoreCard,
    StoreDots,
    Price,
    disc,
    C500,
    C100,
    C600,
    PBADGE
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/ui.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CategorySign = __ds_scope.CategorySign;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.SaleBurst = __ds_scope.SaleBurst;

})();
