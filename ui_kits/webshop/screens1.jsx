/* IIFE */
;(function(){
/* Alisa webshop — screens 1: Home, Catalog, Product detail. window.AlisaScreens (part 1) */
const { Button, Badge, Tag, IconButton, Input, Notice } = window.AlisaKidsStoreDesignSystem_194dcf;
const S = window.AlisaShop;
const U = window.AlisaUI;
const { Icon, Clickable, CSURF, Stars, DemoTag, ReviewCard, ReviewsEmpty, TrustBar, Photo, ProductCard, SectionHead, HScroll, PromoBanner, Breadcrumbs, Qty, StoreDots, Price, C500, C100, C600, disc } = U;

/* where the goods come from: demo data or the Torgsoft feed (automation/shop_feed.py) */
const REAL = S.SOURCE.kind !== 'demo';
const PHOTO_N = S.PRODUCTS.filter(p => p.imgKind === 'photo').length;
function SourceNote({ style }) {
  if (!REAL) return null;
  return (
    <div style={{ display:'flex', gap:10, alignItems:'flex-start', background:'var(--yellow-100)', border:'1px solid var(--yellow-500)', borderRadius:'var(--radius-md)', padding:'10px 13px', fontSize:12.5, fontWeight:600, color:'var(--ink-700)', lineHeight:1.45, ...style }}>
      <i data-lucide="database" style={{ width:16, height:16, flex:'none', marginTop:2, color:'var(--ink-700)' }} aria-hidden="true"></i>
      {S.SOURCE.kind==='showcase'
        ? <div><b style={{ color:'var(--ink-900)' }}>Прототип.</b> {S.SOURCE.total} справжніх товарів із магазинів, наявність на {S.SOURCE.dateOnly}. {PHOTO_N > 0 ? <>У {PHOTO_N} — офіційні фото постачальника, у решти — <b>ілюстрації</b>, не фото.</> : <>Картинки — <b>ілюстрації</b>, не фото.</>} Замовлення поки не приймаються.</div>
        : <div><b style={{ color:'var(--ink-900)' }}>{S.SOURCE.kind==='sample' ? 'Зразок даних Torgsoft' : 'Дані з Torgsoft'}</b> на {S.SOURCE.asOf} · {S.SOURCE.total} моделей у магазинах.
        {S.SOURCE.draft && <> Категорії — <b>чернетка</b>, ще не затверджені.</>} {PHOTO_N > 0 ? `Офіційні фото постачальника — у ${PHOTO_N} товарів, ілюстрації — у товарів вітрини, у решти картинок немає.` : 'Фото поки немає.'} Внутрішній прототип, не для публікації.</div>}
    </div>
  );
}

/* Ukrainian plural: 1 товар, 2 товари, 5 товарів */
function plural(n, one, few, many) {
  const a = Math.abs(n) % 100, b = a % 10;
  return (a > 10 && a < 20) ? many : b === 1 ? one : (b >= 2 && b <= 4) ? few : many;
}

/* recently viewed products of this visit (real history, not a fake "you viewed" list) */
const RECENT = [];
function rememberViewed(id) { const i = RECENT.indexOf(id); if (i >= 0) RECENT.splice(i, 1); RECENT.unshift(id); RECENT.length = Math.min(RECENT.length, 12); }

/* days left to St Nicholas Day (6 December since 2023) — the gift banner's kicker */
function giftKicker(now = new Date()) {
  const y = now.getFullYear(), d = new Date(y, 11, 6);
  const days = Math.ceil((d - new Date(y, now.getMonth(), now.getDate())) / 864e5);
  if (days > 0 && days <= 40) return 'Миколай — 6 грудня · ще ' + days + ' ' + plural(days, 'день', 'дні', 'днів');
  if (days === 0) return 'Сьогодні Миколай';
  return 'До Нового року';
}

/* the launch model in three steps: reserve online, we confirm, pick up and pay in the shop */
function ReserveSteps({ style }) {
  const steps = [['mouse-pointer-click','Оберіть','товар і розмір'],['message-circle','Резерв','підтвердимо за годину'],['store','Заберіть','приміряйте й оплатіть у магазині']];
  return (
    <div style={{ background:'#fff', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-lg)', padding:'14px 12px', boxShadow:'var(--ring-soft)', ...style }}>
      <div style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)', margin:'0 4px 10px' }}>Як купити онлайн</div>
      <ol style={{ listStyle:'none', margin:0, padding:0, display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:8 }}>
        {steps.map((s,i)=>(
          <li key={i} style={{ textAlign:'center' }}>
            <div style={{ width:40, height:40, margin:'0 auto 6px', borderRadius:'50%', background:'var(--pink-100)', color:'var(--pink-600)', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <i data-lucide={s[0]} style={{ width:19, height:19 }} aria-hidden="true"></i></div>
            <div style={{ fontWeight:800, fontSize:13, color:'var(--ink-900)' }}>{i+1}. {s[1]}</div>
            <div style={{ fontSize:11.5, color:'var(--ink-500)', fontWeight:600, lineHeight:1.3 }}>{s[2]}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}


/* Instagram: an honest link card (the old grid showed product pictures as if they were Instagram posts) */
function InstagramCard({ style }) {
  return (
    <a href="https://www.instagram.com/alisa.kids.shop/" target="_blank" rel="noopener" style={{ display:'flex', alignItems:'center', gap:14, textDecoration:'none',
      background:'#fff', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-lg)', padding:16, boxShadow:'var(--ring-soft)', position:'relative', ...style }}>
      <span aria-hidden="true" style={{ width:48, height:48, flex:'none', borderRadius:'var(--radius-md)', background:'var(--pink-100)', color:'var(--pink-600)', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <i data-lucide="instagram" style={{ width:24, height:24 }}></i></span>
      <span style={{ flex:1, minWidth:0 }}>
        <span style={{ display:'block', fontWeight:800, fontSize:15, color:'var(--ink-900)' }}>@alisa.kids.shop</span>
        <span style={{ display:'block', fontSize:13, color:'var(--ink-500)', fontWeight:600 }}>Новинки й відео з наших магазинів. Питайте наявність у Direct.</span>
      </span>
      <i data-lucide="external-link" style={{ width:18, height:18, color:'var(--ink-400)' }} aria-hidden="true"></i>
      <span style={U.SR}>(відкриється в новій вкладці)</span>
    </a>
  );
}

/* ---------------- HOME ---------------- */
function HomeScreen({ nav, addToCart }) {
  const cats = S.CATS;
  /* 12 groups in the real tree: compact 3-column tiles, so the collections are not pushed far down */
  const many = cats.length > 7;
  const catsBlock = (<>
      <SectionHead title="Категорії" action="Каталог" onAction={()=>nav('catalog',{})} />
      <div style={{ display:'grid', gridTemplateColumns: many ? 'repeat(3,1fr)' : 'repeat(2,1fr)', gap: many ? 8 : 12, marginBottom:24 }}>
        {cats.map(c=>(
          <Clickable key={c.id} onClick={()=>nav('catalog',{cat:c.id})} style={{ position:'relative', overflow:'hidden', background:CSURF[c.color], color: c.color==='yellow'?'var(--ink-900)':'#fff', borderRadius:'var(--radius-lg)', padding: many ? '12px 10px' : '16px 16px 18px', minHeight: many ? 76 : 84, display:'flex', flexDirection:'column', justifyContent:'space-between', gap:6, boxShadow:'var(--shadow-sm)' }}>
            <div style={{ position:'absolute', width:90, height:90, borderRadius:'var(--radius-blob)', background:'rgba(255,255,255,.18)', right:-22, bottom:-30 }}></div>
            <i data-lucide={c.icon} style={{ width: many ? 22 : 30, height: many ? 22 : 30, strokeWidth:2, position:'relative' }} aria-hidden="true"></i>
            <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize: many ? 13.5 : 19, lineHeight:1.15, position:'relative', hyphens:'auto' }}>{c.uk}</span>
          </Clickable>
        ))}
      </div>
  </>);
  return (
    <div>
      <SourceNote style={{ marginBottom:14 }} />
      {/* hero */}
      <div style={{ background:'var(--pink-500)', color:'#fff', borderRadius:'var(--radius-xl)', padding:'24px 22px 22px', position:'relative', overflow:'hidden', marginBottom:22 }}>
        <div style={{ position:'absolute', width:200, height:200, borderRadius:'var(--radius-blob)', background:'rgba(255,255,255,.14)', right:-60, top:-70 }}></div>
        <Badge tone="warning" size="lg">Зимовий сезон</Badge>
        <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:34, lineHeight:1.0, margin:'12px 0 8px', letterSpacing:'-0.02em', position:'relative' }}>Тепло для<br/>найменших</h1>
        <p style={{ fontSize:15, fontWeight:600, margin:'0 0 16px', maxWidth:250, position:'relative' }}>{REAL ? 'Зимове взуття, куртки й шапки, які є зараз у трьох магазинах «Аліса».' : 'Знижки до 50% на зимовий одяг та взуття у магазинах «Аліса».'}</p>
        {S.colById('winter') ? <Button variant="sale" onClick={()=>nav('catalog',{col:'winter'})}>Дивитися зимове</Button>
          : REAL ? <Button variant="sale" onClick={()=>nav('catalog',{})}>До каталогу</Button>
              : <Button variant="sale" onClick={()=>nav('catalog',{cat:'sale'})}>Перейти до знижок</Button>}
      </div>

      {REAL && <ReserveSteps style={{ marginBottom:22 }} />}

      {S.colById('gifts') && <div style={{ marginBottom:22 }}>
        <PromoBanner color="green" kicker={giftKicker()} title="Подарунки до Миколая" sub="і під ялинку: іграшки, ігри, піжами" cta="Обрати подарунок" onClick={()=>nav('catalog',{col:'gifts'})} />
      </div>}

      {!S.COLLECTIONS.length && catsBlock}

      {/* curated collections (showcase) — or the old promo banners for the demo data */}
      {S.COLLECTIONS.length > 0 ? S.COLLECTIONS.map(c => (
        <div key={c.id} style={{ marginBottom:20 }}>
          <SectionHead title={c.title} action="Усі" onAction={()=>nav('catalog',{col:c.id})} />
          <HScroll>{S.inCollection(c.id).map(p=> <ProductCard key={p.id} p={p} cat={S.catById(p.cat)} onOpen={()=>nav('product',{id:p.id})} onAdd={()=>addToCart(p)} />)}</HScroll>
        </div>
      )) : <>
      <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:24 }}>
        {!REAL && <PromoBanner color="pinkDeep" kicker="Розпродаж" title="Зимовий розпродаж" sub="Знижки до −50%" cta="Дивитися" onClick={()=>nav('sale')} />}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          {REAL ? <>
            <PromoBanner color="blue" title="Новинки" sub="Надійшли нещодавно" cta="Дивитися" onClick={()=>nav('catalog',{filter:'new'})} />
            <PromoBanner color="green" title="Іграшки" sub={(S.catById('toys')||{}).count ? (S.catById('toys').count + ' моделей') : 'Усі іграшки'} cta="Дивитися" onClick={()=>nav('catalog',{cat:'toys'})} />
          </> : <>
            <PromoBanner color="blue" title="Нова колекція" sub="Весна 2026" cta="Новинки" onClick={()=>nav('catalog',{filter:'new'})} />
            <PromoBanner color="green" title="Іграшка тижня" sub="−30%" cta="Дивитися" onClick={()=>nav('catalog',{cat:'toys'})} />
          </>}
        </div>
      </div>
      </>}

      {S.COLLECTIONS.length > 0 && catsBlock}

      {/* popular carousel — with the showcase it would repeat the collections above */}
      {S.SOURCE.kind !== 'showcase' && <>
      <SectionHead title={S.COLLECTIONS.length ? 'Популярне в магазинах' : 'Популярне'} action="Усі" onAction={()=>nav('catalog',{})} />
      <HScroll>{(S.COLLECTIONS.length ? S.PRODUCTS.filter(p=>!p.featured && p.hit).sort((a,b)=>a.rank-b.rank).slice(0,24) : S.popular()).map(p=> <ProductCard key={p.id} p={p} cat={S.catById(p.cat)} onOpen={()=>nav('product',{id:p.id})} onAdd={()=>addToCart(p)} />)}</HScroll>
      </>}

      {S.onSale().length > 0 && <>
      <div style={{ height:18 }}></div>
      <SectionHead title="Знижки" action="Усі" onAction={()=>nav('sale')} />
      <HScroll>{S.onSale().map(p=> <ProductCard key={p.id} p={p} cat={S.catById(p.cat)} onOpen={()=>nav('product',{id:p.id})} onAdd={()=>addToCart(p)} />)}</HScroll>
      </>}

      {S.isNew().length > 0 && <>
      <div style={{ height:18 }}></div>
      <SectionHead title="Новинки" action="Усі" onAction={()=>nav('catalog',{filter:'new'})} />
      <HScroll>{S.isNew().map(p=> <ProductCard key={p.id} p={p} cat={S.catById(p.cat)} onOpen={()=>nav('product',{id:p.id})} onAdd={()=>addToCart(p)} />)}</HScroll>
      </>}

      {/* store reminder */}
      <div style={{ height:24 }}></div>
      <div style={{ background:'var(--blue-100)', borderRadius:'var(--radius-lg)', padding:18, display:'flex', gap:14, alignItems:'center' }}>
        <div style={{ width:48, height:48, borderRadius:'var(--radius-md)', background:'var(--blue-600)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', flex:'none' }}><i data-lucide="store" style={{width:24,height:24}} aria-hidden="true"></i></div>
        <div style={{ flex:1 }}>
          <div style={{ fontWeight:800, fontSize:15, color:'var(--ink-900)' }}>Можна забрати у магазині</div>
          <div style={{ fontSize:13, color:'var(--ink-700)', fontWeight:600 }}>3 магазини · А-1 · А-2 · А-3</div>
        </div>
        <IconButton aria-label="Магазини" variant="soft" onClick={()=>nav('stores')}>{Icon('chevron-right')}</IconButton>
      </div>

      {/* benefits */}
      <div style={{ height:24 }}></div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
        {[['store','3 магазини','офлайн поруч'],['repeat','Легкий обмін','14 днів із чеком'],['message-circle','Прямий зв’язок','Instagram · Viber · телефон'],['package-check','Самовивіз','безкоштовно з магазину']].map((b,i)=>(
          <div key={i} style={{ background:'#fff', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-md)', padding:14, boxShadow:'var(--ring-soft)' }}>
            <i data-lucide={b[0]} style={{ width:24, height:24, color:'var(--pink-500)', strokeWidth:2 }} aria-hidden="true"></i>
            <div style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)', marginTop:8 }}>{b[1]}</div>
            <div style={{ fontSize:12.5, color:'var(--ink-500)', fontWeight:600 }}>{b[2]}</div>
          </div>
        ))}
      </div>

      {/* what parents say */}
      <div style={{ height:24 }}></div>
      <div style={{ display:'flex', alignItems:'center', gap:10, margin:'0 0 12px', flexWrap:'wrap' }}>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:21, margin:0, color:'var(--ink-900)' }}>Що кажуть батьки</h2>
        {S.REVIEWS_ARE_DEMO && S.SOURCE.kind === 'demo' && <DemoTag note="Демонстраційні відгуки — замінити на справжні" />}
      </div>
      {/* invented example reviews only next to the invented demo goods; next to real goods — an honest empty state */}
      {S.SOURCE.kind === 'demo'
        ? <HScroll w={260}>{S.shopReviews().concat(S.REVIEWS.filter(r=>r.product).slice(0,3)).map(r=> <ReviewCard key={r.id} r={r} compact />)}</HScroll>
        : <ReviewsEmpty onWrite={()=>nav('linkbio')} />}

      {/* social */}
      <div style={{ height:24 }}></div>
      <SectionHead title="Ми в Instagram" />
      <InstagramCard />
    </div>
  );
}

/* ---------------- CATALOG / LISTING ---------------- */
function CatalogScreen({ nav, addToCart, params, openFilters }) {
  const cat = params.cat ? S.catById(params.cat) : null;
  const sub = params.sub ? S.subById(params.sub) : null;
  const col = params.col ? S.colById(params.col) : null;
  const list = S.applyFilters(S.PRODUCTS, params);
  const PAGE = 40;
  const [shown, setShown] = React.useState(PAGE);
  const pkey = JSON.stringify(params);
  React.useEffect(()=>{ setShown(PAGE); }, [pkey]);
  const chips = S.filterChips(params);
  const [sort, setSort] = React.useState('pop');
  const sorted = [...list].sort((a,b)=>{
    if(sort==='new') return (b.badge==='new')-(a.badge==='new');
    if(sort==='lo') return a.price-b.price;
    if(sort==='hi') return b.price-a.price;
    if(sort==='disc') return disc(b)-disc(a);
    if(col) return col.ids.indexOf(a.id)-col.ids.indexOf(b.id);   /* a collection keeps its curated order */
    return a.rank-b.rank;
  });
  const SORTS = [['pop','Популярні'],['new','Новинки'],['lo','Спочатку дешевші'],['hi','Спочатку дорожчі'],['disc','Найбільша знижка']];
  const title = sub ? sub.uk : cat ? cat.uk : col ? col.title : params.cat==='sale' ? 'Розпродаж' : params.filter==='new' ? 'Новинки' : 'Усі товари';
  return (
    <div>
      <Breadcrumbs items={[{label:'Головна',onClick:()=>nav('home')},{label:'Каталог',onClick:()=>nav('catalog',{})}].concat(sub&&cat?[{label:cat.uk,onClick:()=>nav('catalog',{cat:cat.id})}]:[]).concat([{label:title}])} />
      <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:28, margin:'0 0 4px', color:'var(--ink-900)' }}>{title}</h1>
      <p style={{ fontSize:14, color:'var(--ink-500)', margin:'0 0 16px', fontWeight:600 }}>{cat?cat.desc:col?col.sub:'Усе для дітей — одяг, взуття, іграшки та сезонні товари.'}</p>
      {!cat && !params.filter && S.COLLECTIONS.length > 0 && (
        <div style={{ display:'flex', gap:8, overflowX:'auto', margin:'0 0 14px', paddingBottom:4 }}>
          {S.COLLECTIONS.map(c => { const on = params.col === c.id;
            return <button key={c.id} type="button" aria-pressed={on} onClick={()=>nav('catalog', on ? {} : { col:c.id })}
              style={{ flex:'none', display:'inline-flex', alignItems:'center', gap:6, fontFamily:'var(--font-body)', fontWeight:700, fontSize:13, padding:'7px 12px', borderRadius:'var(--radius-pill)', cursor:'pointer', whiteSpace:'nowrap',
                border:'2px solid '+(on?'var(--pink-500)':'var(--ink-200)'), background:on?'var(--pink-100)':'#fff', color:on?'var(--pink-600)':'var(--ink-700)' }}>
              <i data-lucide={c.icon} style={{ width:15, height:15 }} aria-hidden="true"></i>{c.short}</button>; })}
        </div>
      )}
      <SourceNote style={{ marginBottom:14 }} />

      {/* subcategories of the chosen group (real tree) */}
      {cat && cat.subs && cat.subs.length > 1 && (
        <div style={{ display:'flex', gap:8, overflowX:'auto', margin:'0 0 14px', paddingBottom:4 }}>
          {[{ id:null, uk:'Усі', count:cat.count }].concat(cat.subs).map(sc=>{
            const on = (params.sub||null) === sc.id;
            return <button key={sc.id||'all'} type="button" onClick={()=>nav('catalog', { ...params, sub: sc.id || undefined })} aria-pressed={on}
              style={{ flex:'none', fontFamily:'var(--font-body)', fontWeight:700, fontSize:13, padding:'7px 12px', borderRadius:'var(--radius-pill)', cursor:'pointer', whiteSpace:'nowrap',
                border:'2px solid '+(on?'var(--pink-500)':'var(--ink-200)'), background:on?'var(--pink-100)':'#fff', color:on?'var(--pink-600)':'var(--ink-700)' }}>
              {sc.uk} <span style={{ color:'var(--ink-500)', fontWeight:700 }}>{sc.count}</span></button>;
          })}
        </div>
      )}

      {/* controls */}
      <div style={{ display:'flex', gap:10, marginBottom:14 }}>
        <Button variant="secondary" size="sm" icon={Icon('sliders-horizontal')} onClick={openFilters}>Фільтри</Button>
        <div style={{ position:'relative', flex:1 }}>
          <select name="sort" aria-label="Сортування" value={sort} onChange={e=>setSort(e.target.value)} style={{ width:'100%', height:'100%', appearance:'none', WebkitAppearance:'none', fontFamily:'var(--font-body)', fontWeight:700, fontSize:13.5, color:'var(--ink-700)', background:'#fff', border:'2px solid var(--ink-200)', borderRadius:'var(--radius-pill)', padding:'0 36px 0 16px' }}>
            {SORTS.map(s=> <option key={s[0]} value={s[0]}>{s[1]}</option>)}
          </select>
          <i data-lucide="chevron-down" style={{ position:'absolute', right:14, top:'50%', transform:'translateY(-50%)', width:16, height:16, color:'var(--ink-400)', pointerEvents:'none' }}></i>
        </div>
      </div>

      {/* active filters — removable */}
      {chips.length > 0 && (
        <div style={{ display:'flex', gap:8, flexWrap:'wrap', alignItems:'center', marginBottom:14 }}>
          {chips.map(c=>(
            <button key={c.k} onClick={()=>nav('catalog', { ...params, [c.k]: undefined })}
              style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:'var(--font-body)', fontWeight:700, fontSize:13,
                padding:'7px 12px', borderRadius:'var(--radius-pill)', cursor:'pointer',
                border:'2px solid var(--pink-500)', background:'var(--pink-100)', color:'var(--pink-600)' }}>
              {c.label} <i data-lucide="x" aria-hidden="true" style={{width:14,height:14}}></i>
              <span style={{ position:'absolute', width:1, height:1, overflow:'hidden', clip:'rect(0 0 0 0)' }}>Прибрати фільтр</span>
            </button>
          ))}
          <button onClick={()=>nav('catalog', params.cat ? { cat: params.cat } : {})}
            style={{ background:'none', border:0, fontFamily:'var(--font-body)', fontWeight:700, fontSize:13,
              color:'var(--ink-500)', cursor:'pointer', textDecoration:'underline' }}>Скинути все</button>
        </div>
      )}

      {!REAL && <><PromoBanner color="pinkDeep" kicker="Тільки до неділі" title="Розпродаж −50%" cta="Дивитися" onClick={()=>nav('sale')} />
      <div style={{ height:16 }}></div></>}

      <div role="status" style={{ fontSize:13, color:'var(--ink-500)', fontWeight:700, marginBottom:12 }}>{sorted.length} {plural(sorted.length, 'товар', 'товари', 'товарів')}</div>
      {sorted.length === 0 ? (
        <EmptyState nav={nav} />
      ) : (
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          {sorted.slice(0, shown).map(p=> <ProductCard key={p.id} p={p} cat={S.catById(p.cat)} onOpen={()=>nav('product',{id:p.id})} onAdd={()=>addToCart(p)} />)}
        </div>
      )}

      {sorted.length > shown && (
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6, margin:'22px 0 0' }}>
          <Button variant="secondary" onClick={()=>setShown(n=>n+PAGE)}>Показати ще</Button>
          <span style={{ fontSize:12.5, color:'var(--ink-500)', fontWeight:700 }}>Показано {shown} з {sorted.length}</span>
        </div>
      )}
    </div>
  );
}

function EmptyState({ nav }) {
  return (
    <div style={{ textAlign:'center', padding:'30px 20px', background:'#fff', borderRadius:'var(--radius-lg)', border:'1px solid var(--ink-100)' }}>
      <div style={{ width:80, height:80, margin:'0 auto 16px', borderRadius:'var(--radius-blob)', background:'var(--pink-100)', display:'flex', alignItems:'center', justifyContent:'center' }}><i data-lucide="search-x" style={{width:38,height:38,color:'var(--pink-500)'}}></i></div>
      <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:20, color:'var(--ink-900)' }}>Нічого не знайшли</div>
      <p style={{ fontSize:14, color:'var(--ink-500)', fontWeight:600, margin:'6px 0 16px' }}>Спробуйте змінити фільтри або напишіть нам — допоможемо підібрати.</p>
      <Button variant="primary" onClick={()=>nav('catalog',{})}>Скинути фільтри</Button>
    </div>
  );
}

/* ---------------- PRODUCT DETAIL ---------------- */
function ProductScreen({ nav, addToCart, params, openDM }) {
  const p = S.byId(params.id) || S.PRODUCTS[0];
  const cat = S.catById(p.cat);
  const subc = p.sub ? S.subById(p.sub) : null;
  /* real goods: only the sizes that are in stock; demo goods: the generic size scale */
  const sizes = p.real ? (p.sizes.length > 1 || (p.sizes.length === 1 && p.sizes[0]) ? p.sizes : null)
    : p.cat==='shoes' ? S.SIZES_SHOES : (p.cat==='clothing'||p.cat==='seasonal') ? S.SIZES_CLOTHING : null;
  const [size, setSize] = React.useState(p.real && p.variants.length === 1 ? p.variants[0].size : null);
  const variant = p.real ? (p.variants.find(v => v.size === size) || (p.variants.length === 1 ? p.variants[0] : null)) : null;
  const shownP = variant ? { ...p, price: variant.price, priceMax: variant.price } : p;
  const mustPick = p.real && !variant;
  const isShoes = p.real ? p.group === 'Взуття' : p.cat === 'shoes';
  const [qty, setQty] = React.useState(1);
  const maxQ = p.real ? Math.max(1, variant ? variant.total : p.total) : 99;
  React.useEffect(()=>{ if (qty > maxQ) setQty(maxQ); }, [maxQ]);
  React.useEffect(()=>{ rememberViewed(p.id); }, [p.id]);
  const viewed = RECENT.filter(id => id !== p.id).map(S.byId).filter(Boolean).slice(0, 6);
  const b = p.badge && U.PBADGE[p.badge];
  const rating = S.ratingOf(p.id);
  const reviews = S.reviewsFor(p.id);
  return (
    <div>
      <Breadcrumbs items={[{label:'Головна',onClick:()=>nav('home')},{label:cat.uk,onClick:()=>nav('catalog',{cat:cat.id})}].concat(subc?[{label:subc.uk,onClick:()=>nav('catalog',{cat:cat.id,sub:subc.id})}]:[]).concat([{label:p.name}])} />
      {/* gallery */}
      <div style={{ position:'relative', marginBottom:12 }}>
        <div style={{ position:'absolute', top:12, left:12, zIndex:2, display:'flex', gap:6 }}>
          {b && <Badge tone={b.t}>{b.l}</Badge>}
          {p.oldPrice && <Badge tone="sale">−{disc(p)}%</Badge>}
        </div>
        <Photo cat={cat} ratio="1 / 1" radius="var(--radius-lg)" big src={p.img} alt={p.name} kind={p.imgKind} />
        {p.imgKind === 'illustration' && (
          <p style={{ fontSize:12.5, color:'var(--ink-500)', fontWeight:600, margin:'8px 2px 0', lineHeight:1.45 }}>
            Це ілюстрація, а не фото товару. Як річ виглядає насправді — покажемо в магазині або надішлемо фото у Viber.
          </p>
        )}
        {p.imgKind === 'photo' && p.imgNote && (
          <p style={{ fontSize:12, color:'var(--ink-500)', fontWeight:600, margin:'8px 2px 0' }}>{p.imgNote}</p>
        )}
        {p.real && !p.img && (
          <p style={{ fontSize:12.5, color:'var(--ink-500)', fontWeight:600, margin:'8px 2px 0' }}>Фото цього товару ще немає — попросіть у Viber, надішлемо.</p>
        )}
      </div>

      <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:25, margin:'4px 0 4px', color:'var(--ink-900)', lineHeight:1.1 }}>{p.name}</h1>
      <div style={{ fontSize:12.5, color:'var(--ink-500)', fontWeight:700, marginBottom:8 }}>Арт. {p.art||p.id}{variant && p.variants.length>1 ? ` · код ${variant.id}` : ''}{p.brand ? ` · ${p.brand}` : ''}</div>
      {rating && (
        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12, flexWrap:'wrap' }}>
          <Stars value={rating.avg} size={16} />
          <span style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)' }}>{rating.avg}</span>
          <span style={{ fontSize:13, color:'var(--ink-500)', fontWeight:600 }}>· {rating.count} {rating.count===1?'відгук':'відгуки'}</span>
          {S.REVIEWS_ARE_DEMO && <DemoTag note="Демонстраційні відгуки — замінити на справжні" />}
        </div>
      )}
      <Price p={shownP} size={34} />

      {/* size selector */}
      {sizes && (
        <div style={{ margin:'18px 0' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
            <span style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)' }}>{p.real && p.height ? 'Зріст, см' : isShoes||p.real?'Розмір':'Розмір (зріст)'}{p.real && <span style={{ fontWeight:600, color:'var(--ink-500)' }}> · в наявності</span>}</span>
            <Clickable onClick={()=>nav('sizeguide')} style={{ fontWeight:700, fontSize:13, color:'var(--pink-600)', display:'inline-flex', alignItems:'center', gap:4, textDecoration:'underline' }}><i data-lucide="ruler" style={{width:14,height:14}} aria-hidden="true"></i>Таблиця розмірів</Clickable>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {sizes.map(s=> <button key={s} onClick={()=>setSize(s)} aria-pressed={size===s} title={S.sizeText(p,s)!==s ? 'Розмір у магазині: '+s : undefined} style={{ minWidth:48, height:44, padding:'0 12px', borderRadius:'var(--radius-md)', cursor:'pointer', fontFamily:'var(--font-body)', fontWeight:800, fontSize:15, border:'2px solid '+(size===s?'var(--pink-500)':'var(--ink-200)'), background:size===s?'var(--pink-100)':'#fff', color:size===s?'var(--pink-600)':'var(--ink-700)' }}>{S.sizeText(p,s)}</button>)}
          </div>
        </div>
      )}
      {!sizes && (
        <div style={{ margin:'18px 0' }}>
          <span style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)' }}>Вік: </span>
          <span style={{ fontWeight:700, fontSize:14, color:'var(--ink-600)' }}>{p.ages}</span>
        </div>
      )}

      {/* quantity */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', margin:'18px 0' }}>
        <span style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)' }}>Кількість</span>
        <Qty value={qty} onChange={setQty} max={maxQ} />
      </div>

      {/* store availability */}
      <div style={{ background:'#fff', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-lg)', padding:16, margin:'18px 0' }}>
        <div style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)', marginBottom:12, display:'flex', alignItems:'center', gap:8 }}><i data-lucide="store" style={{width:18,height:18,color:'var(--pink-500)'}}></i>Наявність у магазинах</div>
        {p.real && sizes && <div style={{ fontSize:12.5, color:'var(--ink-500)', fontWeight:600, margin:'-4px 0 6px' }}>{variant ? `${p.height ? 'Зріст' : 'Розмір'} ${S.sizeText(p, variant.size)}:` : 'Оберіть розмір, щоб побачити наявність саме його. Зараз — усі розміри:'}</div>}
        {S.STORES.map(s=>{
          /* real goods: units of the chosen size (or of all sizes) in this shop; demo: the static label */
          const n = p.real ? (variant ? variant.stock[s.id] : p.stock[s.id]) || 0 : null;
          const st = p.real ? (n <= 0 ? 'out' : n === 1 ? 'last' : 'in') : p.av[s.id]; const lbl = S.AV_LABEL[st];
          const here = p.real && !variant && sizes ? p.variants.filter(v => (v.stock[s.id]||0) > 0).map(v => v.size) : [];
          const c = st==='in'?'var(--green-600)':st==='last'?'var(--ink-700)':'var(--ink-500)';
          return (
            <div key={s.id} style={{ padding:'9px 0', borderBottom:'1px solid var(--ink-100)' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:8 }}>
                <div><span style={{fontWeight:800,fontSize:14,color:'var(--ink-900)'}}>{s.id}</span> <span style={{fontSize:12.5,color:'var(--ink-500)',fontWeight:600}}>· {s.city}, {s.area.split('·')[0]}</span></div>
                <span style={{ fontWeight:800, fontSize:13, color:c, display:'flex', alignItems:'center', gap:6, whiteSpace:'nowrap' }}><span aria-hidden="true" style={{width:8,height:8,borderRadius:'50%',background:st==='in'?'var(--green-500)':st==='last'?'var(--yellow-500)':'var(--ink-300)'}}></span>{lbl.uk}{p.real && n > 1 && !S.SOURCE.capped ? ` · ${n} шт.` : ''}</span>
              </div>
              {here.length > 0 && <div style={{ fontSize:12.5, color:'var(--ink-700)', fontWeight:700, marginTop:4 }}>{p.height ? 'Зріст' : 'Розміри'}: {here.map(x=>S.sizeText(p,x)).join(', ')}</div>}
            </div>
          );
        })}
      </div>

      {/* CTAs */}
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        <Button variant="primary" size="lg" fullWidth icon={Icon('shopping-bag')} disabled={mustPick} onClick={()=>addToCart(p,size,qty)}>{mustPick ? 'Оберіть розмір' : 'Додати в кошик'}</Button>
        <div style={{ display:'flex', gap:10 }}>
          <Button variant="secondary" fullWidth icon={Icon('phone-call')} onClick={openDM}>Уточнити наявність</Button>
        </div>
        <div style={{ display:'flex', gap:8, marginTop:2 }}>
          {[['Direct','instagram','var(--pink-500)','https://www.instagram.com/alisa.kids.shop/'],['Viber','phone','var(--info)','viber://chat?number=%2B380988222964'],['Подзвонити','phone-call','var(--green-600)','tel:+380988222964']].map(m=>(
            <a key={m[0]} href={m[3]} target={m[3].startsWith('http') ? '_blank' : undefined} rel="noopener" style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:6, fontFamily:'var(--font-display)', fontWeight:600, fontSize:13.5, padding:'11px 0', borderRadius:'var(--radius-pill)', border:'2px solid var(--ink-200)', background:'#fff', color:'var(--ink-700)', textDecoration:'none' }}>
              <i data-lucide={m[1]} style={{width:16,height:16,color:m[2]}} aria-hidden="true"></i>{m[0]}
            </a>
          ))}
        </div>
      </div>

      {/* how buying works at launch: reserve online, pay and pick up in the shop (SHOP-BUSINESS-CASE §4.1) */}
      <div style={{ margin:'18px 0', display:'flex', flexDirection:'column', gap:10 }}>
        <div style={{ display:'flex', gap:12, alignItems:'flex-start', background:'var(--blue-100)', borderRadius:'var(--radius-md)', padding:'13px 15px' }}>
          <i data-lucide="package-check" style={{width:20,height:20,color:'var(--blue-600)',flex:'none',marginTop:2}} aria-hidden="true"></i>
          <div style={{ fontSize:13.5, color:'var(--ink-700)', fontWeight:600, lineHeight:1.45 }}><b style={{color:'var(--ink-900)'}}>Резерв онлайн — самовивіз безкоштовно.</b> Підтвердимо протягом години в робочий час і відкладемо на 48 годин. Приміряйте й оплатіть у магазині.</div>
        </div>
        <div style={{ display:'flex', gap:12, alignItems:'flex-start', background:'var(--cream)', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-md)', padding:'13px 15px' }}>
          <i data-lucide="truck" style={{width:20,height:20,color:'var(--ink-500)',flex:'none',marginTop:2}} aria-hidden="true"></i>
          <div style={{ fontSize:13.5, color:'var(--ink-700)', fontWeight:600 }}><b style={{color:'var(--ink-900)'}}>Доставка Новою поштою</b> — незабаром.</div>
        </div>
      </div>

      <TrustBar />

      {/* description + characteristics */}
      <div style={{ height:8 }}></div>
      <SectionHead title="Опис" />
      <p style={{ fontSize:14.5, color:'var(--ink-700)', lineHeight:1.6, fontWeight:500, margin:'0 0 18px' }}>
        {p.real ? (p.description || 'Опис цього товару ще не додано. Уточніть деталі в магазині або напишіть нам — підкажемо.')
          : <>{p.name} — практичний вибір для щоденного носіння. М’які матеріали, приємні до шкіри, прості в догляді. Ідеально підходить для активних малюків.</>}
      </p>
      <SectionHead title="Характеристики" />
      <div style={{ background:'#fff', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-md)', overflow:'hidden', marginBottom:8 }}>
        {(p.real ? [
            ['Категорія', p.group + ' / ' + p.subgroup + (p.catStatus==='approved' ? '' : ' (чернетка)')],
            ['Розміри в наявності', p.sizes.length ? p.sizes.join(', ') : 'один розмір'],
            ['Бренд', p.brand], ['Колір', p.color],
            ['Для кого', {g:'дівчинки', b:'хлопчика', u:'унісекс'}[p.g]],
            ['Сезон', {winter:'зима', demi:'демісезон', summer:'літо'}[p.season]],
            ['Артикул', p.art],
          ].filter(r => r[1])
          : [['Категорія',cat.uk],['Вік / розмір',p.ages==='one'?'Один розмір':p.ages],['Сезон','Демісезон / Зима'],['Матеріал','Бавовна 90%, еластан 10%'],['Догляд','Прання при 30°']]).map((r,i)=>(
          <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'11px 14px', background:i%2?'var(--cream)':'#fff', fontSize:13.5 }}>
            <span style={{ color:'var(--ink-500)', fontWeight:600 }}>{r[0]}</span><span style={{ color:'var(--ink-900)', fontWeight:700, textAlign:'right' }}>{r[1]}</span>
          </div>
        ))}
      </div>

      {/* similar */}
      <div style={{ height:18 }}></div>
      {/* safety & quality — factual, no certification claims we cannot verify */}
      <SectionHead title="Безпека та якість" />
      <div style={{ background:'var(--green-100)', borderRadius:'var(--radius-md)', padding:'14px 16px', marginBottom:18 }}>
        <ul style={{ margin:0, paddingLeft:18, fontSize:14, color:'var(--ink-700)', lineHeight:1.6, fontWeight:500 }}>
          <li>Розмір: <b style={{color:'var(--ink-900)'}}>{p.sizeNote || (p.ages==='one'?'один розмір':p.ages)}</b> — якщо вагаєтесь, підкажемо по телефону.</li>
          <li>Усі товари можна оглянути та приміряти у наших магазинах перед покупкою.</li>
          <li>Якщо щось не так — обмін або повернення протягом 14 днів із чеком.</li>
        </ul>
      </div>

      {/* reviews */}
      <div style={{ display:'flex', alignItems:'center', gap:10, margin:'0 0 12px', flexWrap:'wrap' }}>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:21, margin:0, color:'var(--ink-900)' }}>Відгуки</h2>
        {S.REVIEWS_ARE_DEMO && reviews.length>0 && <DemoTag note="Демонстраційні відгуки — замінити на справжні" />}
      </div>
      {S.REVIEWS_ARE_DEMO && reviews.length>0 && (
        <p style={{ fontSize:12.5, color:'var(--ink-500)', fontWeight:600, margin:'0 0 10px', lineHeight:1.5 }}>
          Це приклади для прототипу, а не справжні відгуки покупців.
        </p>
      )}
      {reviews.length>0
        ? <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:18 }}>{reviews.map(r=> <ReviewCard key={r.id} r={r} />)}</div>
        : <div style={{ marginBottom:18 }}><ReviewsEmpty onWrite={openDM} /></div>}

      <SectionHead title="Схожі товари" />
      <HScroll>{(p.real ? S.inSub(p.sub).concat(S.inCat(p.cat)) : S.inCat(p.cat)).filter(x=>x.id!==p.id).filter((x,i,a)=>a.indexOf(x)===i).concat(S.PRODUCTS).slice(0,6).map(x=> <ProductCard key={x.id} p={x} cat={S.catById(x.cat)} onOpen={()=>nav('product',{id:x.id})} onAdd={()=>addToCart(x)} />)}</HScroll>

      <div style={{ height:14 }}></div>
      {viewed.length > 0 && <>
      <SectionHead title="Ви переглядали" />
      <HScroll>{viewed.map(x=> <ProductCard key={x.id} p={x} cat={S.catById(x.cat)} onOpen={()=>nav('product',{id:x.id})} onAdd={()=>addToCart(x)} />)}</HScroll>
      </>}

      <div style={{ height:90 }}></div>
    </div>
  );
}

window.AlisaScreens = Object.assign(window.AlisaScreens||{}, { HomeScreen, CatalogScreen, ProductScreen, EmptyState, SourceNote, ReserveSteps, InstagramCard, giftKicker, plural });

})();
