/* IIFE */
;(function(){
/* Alisa webshop — shared UI components. window.AlisaUI */
const { Button, Badge, Tag, IconButton, Input, Notice, Card } = window.AlisaKidsStoreDesignSystem_194dcf;
const { AV_LABEL } = window.AlisaShop;

const C500 = { blue:'var(--blue-500)', green:'var(--green-500)', yellow:'var(--yellow-400)', pink:'var(--pink-500)', pinkDeep:'var(--pink-600)', gray:'var(--ink-400)' };
/* Surface colors safe to put WHITE text on (WCAG AA). The bright logo blue/green
   only reach 2.5:1 / 3.7:1 against white, so filled panels use the -600 shades.
   Yellow keeps dark ink text instead. Measured: blue-600 4.56, green-600 5.44, pink-500 4.71. */
const CSURF = { blue:'var(--blue-600)', green:'var(--green-600)', yellow:'var(--yellow-400)', pink:'var(--pink-500)', pinkDeep:'var(--pink-600)', gray:'var(--ink-500)' };
const C100 = { blue:'var(--blue-100)', green:'var(--green-100)', yellow:'var(--yellow-100)', pink:'var(--pink-100)', pinkDeep:'var(--pink-100)', gray:'var(--ink-100)' };
const C600 = { blue:'var(--blue-600)', green:'var(--green-600)', yellow:'var(--yellow-600)', pink:'var(--pink-600)', pinkDeep:'var(--pink-600)', gray:'var(--ink-500)' };

const Icon = (n, props={}) => <i data-lucide={n} {...props}></i>;
/* visually hidden, still read by screen readers */
const SR = { position:'absolute', width:1, height:1, padding:0, margin:-1, overflow:'hidden', clip:'rect(0 0 0 0)', whiteSpace:'nowrap', border:0 };

/* ---- a11y foundation: visible focus rings + a reset class so real <button>s can look like anything ---- */
(function injectA11yCSS(){
  if (typeof document === 'undefined' || document.getElementById('alisa-a11y')) return;
  const s = document.createElement('style');
  s.id = 'alisa-a11y';
  s.textContent = `
.a-click{appearance:none;-webkit-appearance:none;background:none;border:0;margin:0;padding:0;
  font:inherit;color:inherit;text-align:inherit;cursor:pointer}
.a-click::-moz-focus-inner{border:0;padding:0}
.a-hscroll::-webkit-scrollbar{display:none}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,
[tabindex]:focus-visible,.a-click:focus-visible{outline:3px solid var(--pink-500);outline-offset:2px}
.a-skip{position:absolute;left:-9999px;top:0;z-index:200}
.a-skip:focus{left:10px;top:10px;background:#fff;color:var(--pink-600);padding:10px 18px;
  border-radius:var(--radius-pill);font-weight:800;font-size:14px;box-shadow:var(--shadow-md)}
/* Contrast fix for the DS badge palette: white on the bright logo green is 3.66:1 and on the
   logo blue only 2.52:1 — both fail AA at badge text size. The deeper -600 shades pass
   (green-600 5.44, blue-600 4.56). !important because the bundle injects its own rule later
   at equal specificity. */
.alisa-badge.solid.new{background:var(--green-600) !important}
.alisa-badge.solid.info{background:var(--blue-600) !important}
@media (prefers-reduced-motion: reduce){*{animation-duration:.01ms !important;transition-duration:.01ms !important}}
`;
  document.head.appendChild(s);
})();

/* A real, focusable, keyboard-operable control that keeps whatever visual box you give it.
   Use instead of <div onClick> / <a onClick> so Tab and Enter/Space work. */
function Clickable({ children, style, label, title, ...rest }) {
  return (
    <button type="button" className="a-click" aria-label={label} title={title} style={style} {...rest}>
      {children}
    </button>
  );
}

/* product/category photo — real image when `src` is set, else soft-tint placeholder */
function Photo({ cat, icon, ratio = '1 / 1', radius = 'var(--radius-md)', big = false, src, alt, kind }) {
  const col = cat ? cat.color : 'pink';
  const ic = icon || (cat ? cat.icon : 'image');
  const [failed, setFailed] = React.useState(0);   /* 0 ok · 1 the small copy is missing → plain src · 2 no image */
  /* showcase pictures come in two sizes: <id>-360.webp for cards, <id>.webp (640) for the product page */
  const m = src && failed === 0 ? /^(.*\/assets\/showcase\/[^/]+)\.webp$/.exec(src) : null;
  const srcSet = m ? `${m[1]}-360.webp 360w, ${src} 640w` : undefined;
  const sizes = m ? (big ? '(max-width: 460px) 100vw, 640px' : '(max-width: 460px) 45vw, 240px') : undefined;
  if (src && failed < 2) {
    return (
      <div style={{ aspectRatio: ratio, width: '100%', background: '#fff', borderRadius: radius, overflow: 'hidden', position: 'relative' }}>
        <img src={src} srcSet={srcSet} sizes={sizes} alt={(kind === 'illustration' ? 'Ілюстрація: ' : '') + (alt || (cat ? cat.uk : 'Товар'))} loading="lazy" decoding="async"
          width="640" height="640" onError={() => setFailed(f => (srcSet && f === 0) ? 1 : 2)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {/* generated pictures must never pass for product photos */}
        {kind === 'illustration' && <span aria-hidden="true" style={{ position: 'absolute', left: 8, bottom: 8, background: 'rgba(255,255,255,.92)',
          color: 'var(--ink-700)', border: '1px solid var(--ink-200)', borderRadius: 'var(--radius-pill)', padding: big ? '4px 10px' : '2px 7px',
          fontSize: big ? 12 : 10, fontWeight: 800, lineHeight: 1.3 }}>Ілюстрація</span>}
      </div>
    );
  }
  return (
    <div role="img" aria-label={alt || 'Фото товару'} style={{ aspectRatio: ratio, width: '100%', background: C100[col], borderRadius: radius,
      display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
      <i data-lucide={ic} style={{ width: big ? 84 : 46, height: big ? 84 : 46, color: C500[col], strokeWidth: 1.7, opacity: .85 }}></i>
      <span style={{ position:'absolute', bottom: 8, fontSize: 10, fontWeight: 700, color: C600[col], opacity:.65 }}>фото товару</span>
    </div>
  );
}

const PBADGE = { sale:{t:'sale',l:'Акція'}, new:{t:'new',l:'Новинка'}, last:{t:'warning',l:'Останній розмір'}, hit:{t:'info',l:'Хіт'} };

function disc(p){ return p.oldPrice ? Math.round((1 - p.price/p.oldPrice)*100) : 0; }

/* availability dots for A-1/A-2/A-3 */
function StoreDots({ av, compact = false }) {
  const dot = (s) => {
    const st = av[s];
    const bg = st==='in' ? 'var(--green-500)' : st==='last' ? 'var(--yellow-500)' : 'var(--ink-300)';
    return (
      <span key={s} title={s + ': ' + (AV_LABEL[st] || AV_LABEL.out).uk} style={{ display:'inline-flex', alignItems:'center', gap:4, fontSize:12, fontWeight:800, color:'var(--ink-500)', position:'relative' }}>
        <span aria-hidden="true" style={{ width:8, height:8, borderRadius:'50%', background:bg }}></span>{s}
        <span style={SR}>{' — ' + (AV_LABEL[st] || AV_LABEL.out).uk.toLowerCase()}</span>
      </span>
    );
  };
  return <div style={{ display:'flex', gap: compact?8:12 }}>{Object.keys(av).map(dot)}</div>;
}

function Price({ p, size = 28 }) {
  return (
    <div style={{ display:'flex', alignItems:'baseline', gap:8, flexWrap:'wrap' }}>
      {p.oldPrice && <span style={{ fontWeight:800, fontSize:size*0.52, color:'var(--ink-500)', textDecoration:'line-through', textDecorationColor:'var(--pink-400)', whiteSpace:'nowrap' }}>{p.oldPrice} ₴</span>}
      {p.priceMax > p.price && <span style={{ fontWeight:700, fontSize:size*0.5, color:'var(--ink-500)' }}>від</span>}
      <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:size, color: p.oldPrice?'var(--pink-600)':'var(--ink-900)', lineHeight:.9, whiteSpace:'nowrap' }}>{p.price} ₴</span>
    </div>
  );
}

/* main product card — works for clothing & toys */
function ProductCard({ p, cat, onOpen, onAdd }) {
  const b = p.badge && PBADGE[p.badge];
  const anyIn = Object.values(p.av).some(s => s==='in');
  const anyLast = !anyIn && Object.values(p.av).some(s => s==='last');
  const statusLabel = anyIn ? 'В наявності' : anyLast ? (p.real ? (window.AlisaShop.needsSize(p) ? 'Останні розміри' : 'Остання штука') : 'Останній розмір') : 'Немає в наявності';
  const statusColor = anyIn ? 'var(--green-600)' : anyLast ? 'var(--ink-700)' : 'var(--ink-500)';
  return (
    <div style={{ background:'#fff', borderRadius:'var(--radius-lg)', border:'1px solid var(--ink-100)', boxShadow:'var(--shadow-sm)',
      overflow:'hidden', display:'flex', flexDirection:'column', position:'relative' }}>
      <div style={{ position:'absolute', top:10, left:10, zIndex:2, display:'flex', gap:6 }}>
        {b && <Badge tone={b.t}>{b.l}</Badge>}
        {p.oldPrice && p.badge!=='sale' && <Badge tone="sale">−{disc(p)}%</Badge>}
      </div>
      <Clickable onClick={onOpen} tabIndex={-1} aria-hidden="true" style={{ display:'block', width:'100%', padding:10 }}>
        <Photo cat={cat} src={p.img} alt={p.name} kind={p.imgKind} />
      </Clickable>
      <div style={{ padding:'4px 12px 14px', display:'flex', flexDirection:'column', flex:1 }}>
        <Clickable onClick={onOpen} style={{ display:'block', width:'100%', fontWeight:800, fontSize:15, color:'var(--ink-900)', lineHeight:1.25, minHeight:38 }}>{p.name}</Clickable>
        <div style={{ fontSize:11.5, color:'var(--ink-500)', fontWeight:700, margin:'4px 0 8px' }}>Арт. {p.art||p.id} · {p.sizeNote || ((p.ages!=='one'&&p.ages!=='0+'?'розм. ':'') + (p.ages==='one'?'один розмір':p.ages))}</div>
        <Price p={p} size={24} />
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:6, flexWrap:'wrap', margin:'10px 0 12px' }}>
          <span style={{ fontSize:12, fontWeight:800, color:statusColor }}>{statusLabel}</span>
          <StoreDots av={p.av} compact />
        </div>
        <div style={{ marginTop:'auto', display:'flex', gap:8, alignItems:'stretch' }}>
          <Button variant="secondary" size="sm" onClick={onOpen} style={{ flex:'1 1 auto', minWidth:0 }}>Детальніше</Button>
          {anyIn || anyLast ? <span style={{ flex:'0 0 auto', display:'inline-flex' }}><IconButton aria-label={window.AlisaShop.needsSize(p)?'Обрати розмір':'Додати в кошик'} variant="solid" size="sm" onClick={window.AlisaShop.needsSize(p)?onOpen:onAdd}>{Icon('shopping-bag')}</IconButton></span> : null}
        </div>
      </div>
    </div>
  );
}

/* ---- trust signals: ratings, reviews, guarantees ---- */

/* Star rating. Amber stars on white fail AA as text, so the accessible label carries the
   value and the stars are decorative (aria-hidden). */
function Stars({ value = 0, size = 15 }) {
  const full = Math.round(value);
  return (
    <span role="img" aria-label={`Оцінка ${value} з 5`} style={{ display:'inline-flex', gap:1, verticalAlign:'middle' }}>
      {[1,2,3,4,5].map(i=>(
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"
          fill={i<=full ? 'var(--yellow-500)' : 'var(--ink-200)'} style={{ display:'block' }}>
          <path d="M12 2.5l2.9 5.9 6.6.9-4.8 4.6 1.2 6.5L12 17.3l-5.9 3.1 1.2-6.5L2.5 9.3l6.6-.9z"/>
        </svg>
      ))}
    </span>
  );
}

/* Marks demo content so nobody mistakes example reviews for real ones. */
function DemoTag({ note }) {
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:5, background:'var(--yellow-100)',
      border:'1px solid var(--yellow-500)', color:'var(--ink-900)', borderRadius:'var(--radius-pill)',
      padding:'3px 9px', fontSize:11, fontWeight:800, whiteSpace:'nowrap' }} title={note||''}>
      Приклад
    </span>
  );
}

function ReviewCard({ r, compact }) {
  const d = new Date(r.date + 'T00:00:00');
  const when = isNaN(d) ? r.date : d.toLocaleDateString('uk-UA', { day:'numeric', month:'long', year:'numeric' });
  return (
    <article style={{ background:'#fff', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-lg)',
      padding:compact?14:16, boxShadow:'var(--ring-soft)', height:'100%', boxSizing:'border-box' }}>
      <div style={{ display:'flex', alignItems:'center', gap:9, marginBottom:6 }}>
        <span aria-hidden="true" style={{ width:32, height:32, flex:'none', borderRadius:'50%', background:'var(--pink-100)',
          color:'var(--pink-600)', fontWeight:800, fontSize:14, display:'flex', alignItems:'center', justifyContent:'center' }}>
          {r.author.slice(0,1)}
        </span>
        <div style={{ minWidth:0 }}>
          <div style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)' }}>{r.author}</div>
          <div style={{ fontSize:12, color:'var(--ink-500)', fontWeight:600 }}>{r.city} · {when}</div>
        </div>
      </div>
      <Stars value={r.rating} />
      <p style={{ margin:'8px 0 0', fontSize:14, color:'var(--ink-700)', lineHeight:1.55, fontWeight:500 }}>{r.text}</p>
    </article>
  );
}

/* Honest empty state — what a real shop sees before it has collected reviews. */
function ReviewsEmpty({ onWrite }) {
  return (
    <div style={{ background:'#fff', border:'1px dashed var(--ink-200)', borderRadius:'var(--radius-lg)',
      padding:'20px 18px', textAlign:'center' }}>
      <div style={{ fontWeight:800, fontSize:15, color:'var(--ink-900)' }}>Відгуків ще немає</div>
      <p style={{ fontSize:13.5, color:'var(--ink-500)', fontWeight:600, margin:'6px 0 12px' }}>
        Купували у нас? Напишіть, будь ласка, кілька слів — це допоможе іншим батькам.
      </p>
      {onWrite && <Button variant="secondary" size="sm" onClick={onWrite}>Залишити відгук</Button>}
    </div>
  );
}

/* Factual guarantees — true statements about how the shop actually works. */
function TrustBar({ items }) {
  const def = items || [
    ['repeat','Обмін 14 днів','із чеком'],
    ['store','Приміряйте у магазині','А-1 · А-2 · А-3'],
    ['wallet','Оплата в магазині','готівка або картка'],
  ];
  return (
    <div style={{ display:'grid', gridTemplateColumns:`repeat(${def.length},1fr)`, gap:8, margin:'14px 0' }}>
      {def.map((b,i)=>(
        <div key={i} style={{ background:'var(--pink-100)', borderRadius:'var(--radius-md)', padding:'10px 8px', textAlign:'center' }}>
          <i data-lucide={b[0]} style={{ width:20, height:20, color:'var(--pink-600)' }} aria-hidden="true"></i>
          <div style={{ fontWeight:800, fontSize:12, color:'var(--ink-900)', marginTop:4, lineHeight:1.25 }}>{b[1]}</div>
          <div style={{ fontSize:11, color:'var(--ink-700)', fontWeight:600 }}>{b[2]}</div>
        </div>
      ))}
    </div>
  );
}

function SectionHead({ title, action, onAction }) {
  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', margin:'0 0 12px' }}>
      <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:21, margin:0, color:'var(--ink-900)' }}>{title}</h2>
      {action && <Clickable onClick={onAction} style={{ fontWeight:700, fontSize:13, color:'var(--pink-600)', whiteSpace:'nowrap' }}>{action} <i data-lucide="arrow-right" aria-hidden="true" style={{width:'1em',height:'1em',verticalAlign:'-0.15em'}}></i></Clickable>}
    </div>
  );
}

/* horizontal scroll carousel */
function HScroll({ children, w = 178 }) {
  return (
    <div className="a-hscroll" style={{ display:'flex', gap:14, overflowX:'auto', margin:'0 -16px', padding:'4px 16px 8px', scrollSnapType:'x mandatory', WebkitOverflowScrolling:'touch', scrollbarWidth:'none' }}>
      {React.Children.map(children, c => <div style={{ flex:`0 0 ${w}px`, scrollSnapAlign:'start' }}>{c}</div>)}
    </div>
  );
}

function PromoBanner({ color='pink', kicker, title, sub, cta, icon, onClick }) {
  const dark = color==='yellow';
  const fg = dark ? 'var(--ink-900)' : '#fff';
  return (
    <Clickable onClick={onClick} style={{ display:'block', width:'100%', position:'relative', overflow:'hidden', borderRadius:'var(--radius-lg)', background:CSURF[color], color:fg, padding:'20px 22px', boxShadow:'var(--shadow-sm)' }}>
      <div style={{ position:'absolute', width:150, height:150, borderRadius:'var(--radius-blob)', background:'rgba(255,255,255,.16)', right:-40, bottom:-50 }}></div>
      {kicker && <div style={{ position:'relative', fontWeight:800, fontSize:12, textTransform:'uppercase', letterSpacing:'.05em', opacity:.92 }}>{kicker}</div>}
      <div style={{ position:'relative', fontFamily:'var(--font-display)', fontWeight:700, fontSize:26, lineHeight:1.02, margin:'4px 0 2px' }}>{title}</div>
      {sub && <div style={{ position:'relative', fontWeight:600, fontSize:14 }}>{sub}</div>}
      {cta && <div style={{ position:'relative', marginTop:14, display:'inline-flex', alignItems:'center', gap:6, background:dark?'var(--ink-900)':'#fff', color:dark?'#fff':C600[color], fontWeight:700, fontSize:14, padding:'9px 16px', borderRadius:'var(--radius-pill)' }}>{cta} <i data-lucide="arrow-right" style={{width:15,height:15}}></i></div>}
    </Clickable>
  );
}

function FilterChip({ label, active, onClick, color }) {
  return (
    <button type="button" aria-pressed={!!active} onClick={onClick} style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:13.5, padding:'8px 14px', borderRadius:'var(--radius-pill)', cursor:'pointer',
      border:'2px solid '+(active?(color?C500[color]:'var(--pink-500)'):'var(--ink-200)'), background: active?(color?C100[color]:'var(--pink-100)'):'#fff', color: active?(color?C600[color]:'var(--pink-600)'):'var(--ink-700)', whiteSpace:'nowrap', display:'inline-flex', alignItems:'center', gap:6 }}>
      {label}
    </button>
  );
}

function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Навігація по сайту" style={{ display:'flex', alignItems:'center', gap:6, flexWrap:'wrap', fontSize:12.5, color:'var(--ink-500)', fontWeight:700, marginBottom:10 }}>
      {items.map((it,i)=>(
        <React.Fragment key={i}>
          {i>0 && <i data-lucide="chevron-right" style={{width:13,height:13}} aria-hidden="true"></i>}
          {it.onClick
            ? <Clickable onClick={it.onClick} style={{ color:'var(--ink-500)', textDecoration:'underline' }}>{it.label}</Clickable>
            : <span aria-current="page" style={{ color:'var(--ink-700)' }}>{it.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

function Qty({ value, onChange, max = 99, label = 'Кількість' }) {
  const btn = { width:38, height:38, border:'2px solid var(--ink-200)', background:'#fff', borderRadius:'var(--radius-pill)', fontWeight:800, fontSize:18, cursor:'pointer', color:'var(--ink-700)', display:'flex', alignItems:'center', justifyContent:'center' };
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:12 }}>
      <button type="button" style={{ ...btn, opacity: value<=1 ? .45 : 1 }} aria-label={label + ': менше'} disabled={value<=1} onClick={()=>onChange(Math.max(1,value-1))}>−</button>
      <span aria-live="polite" style={{ fontWeight:800, fontSize:18, minWidth:24, textAlign:'center' }}><span style={SR}>{label + ': '}</span>{value}</span>
      <button type="button" style={{ ...btn, opacity: value>=max ? .45 : 1 }} aria-label={label + ': більше'} disabled={value>=max} title={value>=max ? 'Більше немає в магазинах' : undefined} onClick={()=>onChange(Math.min(max,value+1))}>+</button>
    </div>
  );
}

function StoreCard({ s, av, onReserve }) {
  const st = av && av[s.id];
  return (
    <div style={{ background:'#fff', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-lg)', padding:18, boxShadow:'var(--shadow-sm)' }}>
      <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
        <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:18, background:'var(--pink-500)', color:'#fff', borderRadius:'var(--radius-pill)', padding:'4px 14px' }}>{s.id}</span>
        <div>
          <div style={{ fontWeight:800, fontSize:15, color:'var(--ink-900)' }}>{s.city}</div>
          <div style={{ fontSize:12.5, color:'var(--ink-500)', fontWeight:600 }}>{s.area}</div>
        </div>
      </div>
      <a href={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent((s.mapQuery || (s.addr + ', ' + s.city)))} target="_blank" rel="noopener"
        style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, background:'var(--blue-100)', color:'var(--blue-600)', borderRadius:'var(--radius-md)',
          padding:'12px', marginBottom:12, fontWeight:800, fontSize:13.5, textDecoration:'none' }}>
        <i data-lucide="map" style={{width:18,height:18}} aria-hidden="true"></i>Відкрити на мапі<span style={SR}> (Google Maps, нова вкладка)</span>
      </a>
      <div style={{ display:'flex', flexDirection:'column', gap:7, fontSize:13.5, color:'var(--ink-700)', fontWeight:600 }}>
        <span style={{display:'flex',gap:8,alignItems:'center'}}><i data-lucide="map-pin" style={{width:15,height:15,color:'var(--pink-500)'}}></i>{s.addr}</span>
        <span style={{display:'flex',gap:8,alignItems:'center'}}><i data-lucide="clock" style={{width:15,height:15,color:'var(--pink-500)'}} aria-hidden="true"></i>{s.hours || window.AlisaShop.HOURS_TBD}</span>
        <a href={'tel:' + s.phone.replace(/[^+\d]/g,'')} style={{display:'flex',gap:8,alignItems:'center',color:'inherit'}}><i data-lucide="phone" style={{width:15,height:15,color:'var(--pink-500)'}} aria-hidden="true"></i>{s.phone}</a>
      </div>
      {st && (
        <div style={{ marginTop:12 }}>
          {st!=='out'
            ? <Button variant="primary" size="sm" fullWidth onClick={onReserve}>{st==='last'?'Останній — забронювати':'Забронювати тут'}</Button>
            : <div style={{ fontWeight:700, fontSize:13, color:'var(--ink-500)', textAlign:'center', padding:'8px 0' }}>Немає в цьому магазині</div>}
        </div>
      )}
    </div>
  );
}


/* ---- addresses for pages: #/product/m140674, #/catalog?col=winter … ----
   Shareable links to a product or a collection, and the browser / Android «back» button works inside the shop.
   (Hash URLs: still one HTML file, works on GitHub Pages as is. Search engines need real URLs — production step.) */
const ROUTES = ['home','catalog','product','cart','checkout','confirm','stores','sale','linkbio','sizeguide','info'];
const FLAGS = ['sale','new','last'];
function toHash(e) {
  if (!e || e.r === 'home') return '#/';
  const p = e.p || {};
  const q = Object.keys(p).filter(k => k !== 'id' && p[k] !== undefined && p[k] !== null && p[k] !== '' && p[k] !== false && typeof p[k] !== 'object')
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(p[k] === true ? 1 : p[k])).join('&');
  return '#/' + e.r + (p.id ? '/' + encodeURIComponent(p.id) : '') + (q ? '?' + q : '');
}
function fromHash(h) {
  const m = /^#\/([a-z]+)?(?:\/([^?]+))?(?:\?(.*))?$/.exec(h || '');
  if (!m || !m[1] || ROUTES.indexOf(m[1]) < 0) return { r:'home', p:{} };
  if (m[1] === 'confirm') return { r:'home', p:{} };      /* a confirmation is not a page to come back to */
  if (m[1] === 'checkout') return { r:'cart', p:{} };
  const p = {};
  if (m[2]) p.id = decodeURIComponent(m[2]);
  (m[3] || '').split('&').filter(Boolean).forEach(kv => { const i = kv.indexOf('='); const k = decodeURIComponent(i < 0 ? kv : kv.slice(0, i));
    const v = decodeURIComponent(i < 0 ? '' : kv.slice(i + 1)); p[k] = FLAGS.indexOf(k) >= 0 ? true : v; });
  if (m[1] === 'product' && !window.AlisaShop.byId(p.id)) return { r:'catalog', p:{} };   /* sold out since the link was shared */
  return { r: m[1], p };
}
const BASE_TITLE = document.title;
function titleFor(e) {
  const S = window.AlisaShop;
  if (e.r === 'product') { const p = S.byId(e.p.id); return p ? p.name + ' — Аліса' : BASE_TITLE; }
  if (e.r === 'catalog') { const c = e.p.col ? S.colById(e.p.col) : e.p.cat ? S.catById(e.p.cat) : null;
    return (c ? (c.title || c.uk) : 'Каталог') + ' — Аліса'; }
  const T = { cart:'Кошик', checkout:'Резерв', stores:'Магазини', sale:'Розпродаж', linkbio:'Контакти', sizeguide:'Таблиця розмірів', info:'Інформація' };
  return T[e.r] ? T[e.r] + ' — Аліса' : BASE_TITLE;
}
/* the screen stack of the app, kept in sync with the address bar */
function useRouter() {
  const [stack, setStack] = React.useState(() => { const f = fromHash(location.hash); return f.r === 'home' ? [f] : [{ r:'home', p:{} }, f]; });
  const cur = stack[stack.length - 1];
  React.useEffect(() => {
    try { history.replaceState({ d: 0 }, '', location.pathname + location.search + toHash(cur)); } catch (_) {}
    const onPop = () => { const f = fromHash(location.hash);
      setStack(s => { const prev = s[s.length - 2];
        if (prev && toHash(prev) === toHash(f)) return s.slice(0, -1);
        if (toHash(s[s.length - 1]) === toHash(f)) return s;
        return f.r === 'home' ? [f] : [{ r:'home', p:{} }, f]; }); };   /* jumped elsewhere in history: show that page */
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  React.useEffect(() => { document.title = titleFor(cur); }, [cur]);
  const push = (e, depth) => { try { history.pushState({ d: depth }, '', toHash(e)); } catch (_) {} };
  const nav = (r, p = {}) => { const e = { r, p: p || {} }; push(e, stack.length); setStack(s => s.concat([e])); };
  const tabNav = (r, p = {}) => { const e = { r, p: p || {} }; push(e, 1); setStack([e]); };
  const back = () => {
    if (stack.length < 2) return;
    if (history.state && history.state.d > 0) history.back();
    else { const prev = stack[stack.length - 2]; try { history.replaceState({ d: 0 }, '', toHash(prev)); } catch (_) {} setStack(s => s.slice(0, -1)); }
  };
  return { stack, cur, nav, tabNav, back };
}

window.AlisaUI = { useRouter, toHash, fromHash, Icon, SR, Clickable, CSURF, Stars, DemoTag, ReviewCard, ReviewsEmpty, TrustBar, Photo, ProductCard, SectionHead, HScroll, PromoBanner, FilterChip, Breadcrumbs, Qty, StoreCard, StoreDots, Price, disc, C500, C100, C600, PBADGE };

})();
