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

/* ---- a11y foundation: visible focus rings + a reset class so real <button>s can look like anything ---- */
(function injectA11yCSS(){
  if (typeof document === 'undefined' || document.getElementById('alisa-a11y')) return;
  const s = document.createElement('style');
  s.id = 'alisa-a11y';
  s.textContent = `
.a-click{appearance:none;-webkit-appearance:none;background:none;border:0;margin:0;padding:0;
  font:inherit;color:inherit;text-align:inherit;cursor:pointer}
.a-click::-moz-focus-inner{border:0;padding:0}
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
function Photo({ cat, icon, ratio = '1 / 1', radius = 'var(--radius-md)', big = false, src, alt }) {
  const col = cat ? cat.color : 'pink';
  const ic = icon || (cat ? cat.icon : 'image');
  const [failed, setFailed] = React.useState(false);
  if (src && !failed) {
    return (
      <div style={{ aspectRatio: ratio, width: '100%', background: '#fff', borderRadius: radius, overflow: 'hidden' }}>
        <img src={src} alt={alt || (cat ? cat.uk : 'Товар')} loading="lazy" onError={() => setFailed(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
      <span key={s} title={s} style={{ display:'inline-flex', alignItems:'center', gap:4, fontSize:12, fontWeight:800, color:'var(--ink-500)' }}>
        <span style={{ width:8, height:8, borderRadius:'50%', background:bg }}></span>{s}
      </span>
    );
  };
  return <div style={{ display:'flex', gap: compact?8:12 }}>{Object.keys(av).map(dot)}</div>;
}

function Price({ p, size = 28 }) {
  return (
    <div style={{ display:'flex', alignItems:'baseline', gap:8, flexWrap:'wrap' }}>
      {p.oldPrice && <span style={{ fontWeight:800, fontSize:size*0.52, color:'var(--ink-500)', textDecoration:'line-through', textDecorationColor:'var(--pink-400)', whiteSpace:'nowrap' }}>{p.oldPrice} ₴</span>}
      <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:size, color: p.oldPrice?'var(--pink-600)':'var(--ink-900)', lineHeight:.9, whiteSpace:'nowrap' }}>{p.price} ₴</span>
    </div>
  );
}

/* main product card — works for clothing & toys */
function ProductCard({ p, cat, onOpen, onAdd }) {
  const b = p.badge && PBADGE[p.badge];
  const anyIn = Object.values(p.av).some(s => s==='in');
  const anyLast = !anyIn && Object.values(p.av).some(s => s==='last');
  const statusLabel = anyIn ? 'В наявності' : anyLast ? 'Останній розмір' : 'Немає в наявності';
  const statusColor = anyIn ? 'var(--green-600)' : anyLast ? 'var(--ink-700)' : 'var(--ink-500)';
  return (
    <div style={{ background:'#fff', borderRadius:'var(--radius-lg)', border:'1px solid var(--ink-100)', boxShadow:'var(--shadow-sm)',
      overflow:'hidden', display:'flex', flexDirection:'column', position:'relative' }}>
      <div style={{ position:'absolute', top:10, left:10, zIndex:2, display:'flex', gap:6 }}>
        {b && <Badge tone={b.t}>{b.l}</Badge>}
        {p.oldPrice && p.badge!=='sale' && <Badge tone="sale">−{disc(p)}%</Badge>}
      </div>
      <div onClick={onOpen} style={{ cursor:'pointer', padding:10 }}>
        <Photo cat={cat} src={p.img} alt={p.name} />
      </div>
      <div style={{ padding:'4px 12px 14px', display:'flex', flexDirection:'column', flex:1 }}>
        <div onClick={onOpen} style={{ cursor:'pointer', fontWeight:800, fontSize:15, color:'var(--ink-900)', lineHeight:1.25, minHeight:38 }}>{p.name}</div>
        <div style={{ fontSize:11.5, color:'var(--ink-500)', fontWeight:700, margin:'4px 0 8px' }}>Арт. {p.id} · {p.ages!=='one'&&p.ages!=='0+'?'розм. ':''}{p.ages==='one'?'один розмір':p.ages}</div>
        <Price p={p} size={24} />
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:6, flexWrap:'wrap', margin:'10px 0 12px' }}>
          <span style={{ fontSize:12, fontWeight:800, color:statusColor }}>{statusLabel}</span>
          <StoreDots av={p.av} compact />
        </div>
        <div style={{ marginTop:'auto', display:'flex', gap:8, alignItems:'stretch' }}>
          <Button variant="secondary" size="sm" onClick={onOpen} style={{ flex:'1 1 auto', minWidth:0 }}>Детальніше</Button>
          {anyIn || anyLast ? <span style={{ flex:'0 0 auto', display:'inline-flex' }}><IconButton aria-label="Додати в кошик" variant="solid" size="sm" onClick={onAdd}>{Icon('shopping-bag')}</IconButton></span> : null}
        </div>
      </div>
    </div>
  );
}

function SectionHead({ title, action, onAction }) {
  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', margin:'0 0 12px' }}>
      <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:21, margin:0, color:'var(--ink-900)' }}>{title}</h2>
      {action && <Clickable onClick={onAction} style={{ fontWeight:700, fontSize:13, color:'var(--pink-600)', whiteSpace:'nowrap' }}>{action} →</Clickable>}
    </div>
  );
}

/* horizontal scroll carousel */
function HScroll({ children, w = 178 }) {
  return (
    <div style={{ display:'flex', gap:14, overflowX:'auto', margin:'0 -16px', padding:'4px 16px 8px', scrollSnapType:'x mandatory', WebkitOverflowScrolling:'touch' }}>
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
    <button onClick={onClick} style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:13.5, padding:'8px 14px', borderRadius:'var(--radius-pill)', cursor:'pointer',
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

function Qty({ value, onChange }) {
  const btn = { width:38, height:38, border:'2px solid var(--ink-200)', background:'#fff', borderRadius:'var(--radius-pill)', fontWeight:800, fontSize:18, cursor:'pointer', color:'var(--ink-700)', display:'flex', alignItems:'center', justifyContent:'center' };
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:12 }}>
      <button style={btn} onClick={()=>onChange(Math.max(1,value-1))}>−</button>
      <span style={{ fontWeight:800, fontSize:18, minWidth:24, textAlign:'center' }}>{value}</span>
      <button style={btn} onClick={()=>onChange(value+1)}>+</button>
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
      <div style={{ aspectRatio:'16/7', background:'var(--ink-100)', borderRadius:'var(--radius-md)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--ink-500)', gap:6, marginBottom:12 }}>
        <i data-lucide="map-pin" style={{width:22,height:22}}></i><span style={{fontWeight:700,fontSize:12}}>Мапа</span>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:7, fontSize:13.5, color:'var(--ink-700)', fontWeight:600 }}>
        <span style={{display:'flex',gap:8,alignItems:'center'}}><i data-lucide="map-pin" style={{width:15,height:15,color:'var(--pink-500)'}}></i>{s.addr}</span>
        <span style={{display:'flex',gap:8,alignItems:'center'}}><i data-lucide="clock" style={{width:15,height:15,color:'var(--pink-500)'}}></i>{s.hours}</span>
        <span style={{display:'flex',gap:8,alignItems:'center'}}><i data-lucide="phone" style={{width:15,height:15,color:'var(--pink-500)'}}></i>{s.phone}</span>
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

window.AlisaUI = { Icon, Clickable, CSURF, Photo, ProductCard, SectionHead, HScroll, PromoBanner, FilterChip, Breadcrumbs, Qty, StoreCard, StoreDots, Price, disc, C500, C100, C600, PBADGE };

})();
