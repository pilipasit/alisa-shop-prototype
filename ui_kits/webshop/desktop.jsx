/* Alisa webshop — INTERACTIVE desktop app. Reuses window.AlisaShop + window.AlisaUI + window.AlisaScreens. */
;(function(){
const DS = window.AlisaKidsStoreDesignSystem_194dcf;
const { Button, Badge, IconButton, Input } = DS;
const S = window.AlisaShop;
const U = window.AlisaUI;
const Scr = window.AlisaScreens;
const { Photo, ProductCard, PromoBanner, FilterChip, Clickable, C500, C100, C600, Icon } = U;
const I = Icon;
const IG = 'https://www.instagram.com/alisa.kids.shop/';

/* nav items → routes */
const NAV = [
  ['Каталог','catalog',{}],['Одяг','catalog',{cat:'clothing'}],['Взуття','catalog',{cat:'shoes'}],
  ['Іграшки','catalog',{cat:'toys'}],['Сезонне','catalog',{cat:'seasonal'}],['Школа','catalog',{cat:'school'}],['Розпродаж','sale',{}],
];

/* ---------------- HEADER ---------------- */
function Header({ nav, tabNav, cartCount, openSearch }) {
  return (
    <header style={{ position:'sticky', top:0, zIndex:20, background:'#fff', boxShadow:'var(--shadow-sm)' }}>
      <div style={{ background:'var(--pink-500)', color:'#fff', fontSize:13, fontWeight:700 }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'7px 24px', display:'flex', justifyContent:'space-between' }}>
          <span style={{display:'flex',alignItems:'center',gap:7}}><i data-lucide="truck" style={{width:15,height:15}}></i>Доставка Новою поштою · самовивіз з магазину безкоштовно</span>
          <span style={{display:'flex',gap:18}}><span style={{display:'flex',alignItems:'center',gap:6,cursor:'pointer'}} onClick={()=>tabNav('stores')}><i data-lucide="map-pin" style={{width:14,height:14}}></i>3 магазини</span><span style={{display:'flex',alignItems:'center',gap:6}}><a href="tel:+380988222964" style={{color:'#fff',textDecoration:'none',display:'flex',alignItems:'center',gap:6}}><i data-lucide="phone" style={{width:14,height:14}}></i>{S.PHONE}</a></span></span>
        </div>
      </div>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'16px 24px', display:'flex', alignItems:'center', gap:26 }}>
        <Clickable onClick={()=>tabNav('home')} label="Аліса — на головну"><img src="../../assets/logo-primary.svg" alt="" style={{ height:40, display:'block' }} /></Clickable>
        <div style={{ flex:1, position:'relative', maxWidth:520 }}>
          <i data-lucide="search" style={{ position:'absolute', left:16, top:'50%', transform:'translateY(-50%)', width:19, height:19, color:'var(--ink-400)' }}></i>
          <input readOnly aria-label="Пошук товарів" placeholder="Пошук товарів — наприклад, «комбінезон»" onClick={openSearch}
            onKeyDown={e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); openSearch(); } }} style={{ width:'100%', boxSizing:'border-box', padding:'13px 16px 13px 46px', border:'2px solid var(--ink-200)', borderRadius:'var(--radius-pill)', fontFamily:'var(--font-body)', fontWeight:600, fontSize:15, outline:'none', cursor:'pointer', background:'#fff' }} />
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:6 }}>
          <IconButton aria-label="Бажане" variant="ghost" onClick={()=>window.open(IG,'_blank')}><i data-lucide="heart"></i></IconButton>
          <Button variant="primary" icon={<i data-lucide="shopping-bag"></i>} onClick={()=>tabNav('cart')}>Кошик{cartCount>0?` · ${cartCount}`:''}</Button>
        </div>
      </div>
      <nav style={{ borderTop:'1px solid var(--ink-100)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px', display:'flex', gap:4 }}>
          {NAV.map((n,i)=>(
            <Clickable key={n[0]} onClick={()=>n[1]==='sale'?tabNav('sale'):tabNav('catalog',n[2])} style={{ padding:'13px 16px', fontFamily:'var(--font-display)', fontWeight:600, fontSize:15, color:i===6?'var(--pink-600)':'var(--ink-700)', display:'flex', alignItems:'center', gap:7 }}>
              {i===0 && <i data-lucide="layout-grid" style={{width:17,height:17}} aria-hidden="true"></i>}{n[0]}
            </Clickable>
          ))}
        </div>
      </nav>
    </header>
  );
}

/* ---------------- HOME (rich desktop landing) ---------------- */
function Hero({ nav, tabNav }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:24, marginBottom:36 }}>
      <div style={{ position:'relative', overflow:'hidden', background:'var(--pink-500)', color:'#fff', borderRadius:'var(--radius-xl)', padding:'48px 44px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <div style={{ position:'absolute', width:300, height:300, borderRadius:'var(--radius-blob)', background:'rgba(255,255,255,.13)', right:-90, top:-110 }}></div>
        <div style={{ position:'relative' }}>
          <Badge tone="warning" size="lg">Зимовий сезон</Badge>
          <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:54, lineHeight:.98, margin:'16px 0 12px', letterSpacing:'-0.02em' }}>Тепло для<br/>найменших</h1>
          <p style={{ fontSize:18, fontWeight:600, opacity:.95, maxWidth:380, margin:'0 0 24px' }}>Знижки до 50% на зимовий одяг, взуття та аксесуари у магазинах «Аліса».</p>
          <div style={{ display:'flex', gap:12 }}>
            <Button variant="sale" size="lg" onClick={()=>nav('sale')}>Перейти до знижок</Button>
            <Button variant="secondary" size="lg" onClick={()=>nav('catalog',{filter:'new'})} style={{background:'#fff'}}>Новинки</Button>
          </div>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateRows:'1fr 1fr', gap:24 }}>
        <div style={{ position:'relative', overflow:'hidden', background:'var(--blue-500)', color:'#fff', borderRadius:'var(--radius-xl)', padding:'30px 32px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
          <div style={{ position:'absolute', width:160, height:160, borderRadius:'var(--radius-blob)', background:'rgba(255,255,255,.16)', right:-40, bottom:-50 }}></div>
          <div style={{ position:'relative', fontFamily:'var(--font-display)', fontWeight:700, fontSize:28 }}>Нова колекція</div>
          <div style={{ position:'relative', fontWeight:600, fontSize:15, opacity:.95, margin:'2px 0 14px' }}>Весна 2026 вже у продажу</div>
          <div style={{ position:'relative' }}><Button variant="secondary" onClick={()=>nav('catalog',{filter:'new'})} style={{background:'#fff'}}>Дивитися →</Button></div>
        </div>
        <div style={{ position:'relative', overflow:'hidden', background:'var(--green-500)', color:'#fff', borderRadius:'var(--radius-xl)', padding:'30px 32px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
          <div style={{ position:'absolute', width:160, height:160, borderRadius:'var(--radius-blob)', background:'rgba(255,255,255,.16)', right:-40, bottom:-50 }}></div>
          <div style={{ position:'relative', fontFamily:'var(--font-display)', fontWeight:700, fontSize:28 }}>Іграшка тижня</div>
          <div style={{ position:'relative', fontWeight:600, fontSize:15, opacity:.95, margin:'2px 0 14px' }}>−30% на конструктори</div>
          <div style={{ position:'relative' }}><Button variant="secondary" onClick={()=>nav('catalog',{cat:'toys'})} style={{background:'#fff'}}>Дивитися →</Button></div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, link, onLink, children }) {
  return (
    <div style={{ marginBottom:40 }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18 }}>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:30, margin:0, color:'var(--ink-900)' }}>{title}</h2>
        {link && <Clickable onClick={onLink} style={{ fontWeight:700, fontSize:15, color:'var(--pink-600)', textDecoration:'underline' }}>{link} →</Clickable>}
      </div>
      {children}
    </div>
  );
}

function Grid({ items, nav, addToCart }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:18 }}>
      {items.map(p=> <ProductCard key={p.id} p={p} cat={S.catById(p.cat)} onOpen={()=>nav('product',{id:p.id})} onAdd={()=>addToCart(p)} />)}
    </div>
  );
}

function DesktopHome({ nav, tabNav, addToCart }) {
  return (
    <div style={{ maxWidth:1200, margin:'0 auto', padding:'32px 24px 0' }}>
      <Hero nav={nav} tabNav={tabNav} />
      {/* categories */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:14, marginBottom:42 }}>
        {S.CATS.map(c=>(
          <Clickable key={c.id} onClick={()=>c.id==='sale'?tabNav('sale'):nav('catalog',{cat:c.id})} style={{ textAlign:'center', display:'block', width:'100%' }}>
            <div style={{ aspectRatio:'1/1', background:C500[c.color], color:c.color==='yellow'?'var(--ink-900)':'#fff', borderRadius:'var(--radius-lg)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:10, position:'relative', overflow:'hidden', boxShadow:'var(--shadow-sm)' }}>
              <div style={{ position:'absolute', width:60, height:60, borderRadius:'var(--radius-blob)', background:'rgba(255,255,255,.18)', right:-14, bottom:-18 }}></div>
              <i data-lucide={c.icon} style={{ width:34, height:34, position:'relative' }} aria-hidden="true"></i>
            </div>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:15, color:'var(--ink-900)' }}>{c.uk}</div>
          </Clickable>
        ))}
      </div>

      <Section title="Популярне" link="Усі товари" onLink={()=>nav('catalog',{})}><Grid items={S.popular()} nav={nav} addToCart={addToCart} /></Section>

      <div style={{ marginBottom:42 }}><PromoBanner color="pinkDeep" kicker="Тільки до неділі" title="Зимовий розпродаж — знижки до 50%" sub="Звільняємо місце для нового сезону" cta="Перейти до розпродажу" onClick={()=>nav('sale')} /></div>

      <Section title="Знижки" link="Розпродаж" onLink={()=>nav('sale')}><Grid items={S.onSale().slice(0,5)} nav={nav} addToCart={addToCart} /></Section>
      <Section title="Новинки" link="Усі новинки" onLink={()=>nav('catalog',{filter:'new'})}><Grid items={S.isNew().concat(S.PRODUCTS).slice(0,5)} nav={nav} addToCart={addToCart} /></Section>

      {/* benefits */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:18, marginBottom:42 }}>
        {[['store','3 магазини поруч','Кам’янське · Дніпро','stores'],['repeat','Легкий обмін','14 днів із чеком',null],['message-circle','Прямий зв’язок','Direct · Viber · Telegram',null],['package-check','Самовивіз безкоштовно','з будь-якого магазину','stores']].map((b,i)=>{
          const inner = (<React.Fragment>
            <div style={{ width:50, height:50, flex:'none', borderRadius:'var(--radius-md)', background:'var(--pink-100)', display:'flex', alignItems:'center', justifyContent:'center' }}><i data-lucide={b[0]} style={{width:24,height:24,color:'var(--pink-600)'}} aria-hidden="true"></i></div>
            <div><div style={{ fontWeight:800, fontSize:15, color:'var(--ink-900)' }}>{b[1]}</div><div style={{ fontSize:13, color:'var(--ink-500)', fontWeight:600 }}>{b[2]}</div></div>
          </React.Fragment>);
          const box = { background:'#fff', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-lg)', padding:22, boxShadow:'var(--ring-soft)', display:'flex', gap:14, alignItems:'center', textAlign:'left' };
          return b[3]
            ? <Clickable key={i} onClick={()=>tabNav(b[3])} style={box}>{inner}</Clickable>
            : <div key={i} style={box}>{inner}</div>;
        })}
      </div>

      {/* instagram */}
      <Section title="Ми в Instagram" link="@alisa.kids.shop" onLink={()=>window.open(IG,'_blank')}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:14 }}>
          {S.PRODUCTS.slice(0,6).map(p=> <Clickable key={p.id} onClick={()=>nav('product',{id:p.id})} label={p.name}><Photo cat={S.catById(p.cat)} src={p.img} alt="" /></Clickable>)}
        </div>
      </Section>
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer({ nav, tabNav, openDM }) {
  const link = (label, onClick)=> <Clickable key={label} onClick={onClick} style={{ fontSize:14, color:'var(--ink-600)', fontWeight:600 }}>{label}</Clickable>;
  const social = [['instagram',()=>window.open(IG,'_blank')],['facebook',()=>window.open('https://www.facebook.com/alisa.kids.ua/','_blank')],['send',openDM],['phone',openDM]];
  return (
    <footer style={{ background:'#fff', borderTop:'1px solid var(--ink-100)', marginTop:20 }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'44px 24px 28px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1.2fr', gap:32 }}>
          <div>
            <img src="../../assets/logo-primary.svg" alt="Аліса" style={{ height:36 }} />
            <p style={{ fontSize:14, color:'var(--ink-500)', fontWeight:600, lineHeight:1.6, margin:'14px 0 16px', maxWidth:260 }}>Сімейний магазин дитячого одягу, взуття та іграшок. 3 магазини у Кам’янському та Дніпрі.</p>
            <div style={{ display:'flex', gap:10 }}>
              {social.map(s=> <Clickable key={s[0]} onClick={s[1]} label={s[0]} style={{ width:40, height:40, borderRadius:'50%', background:'var(--pink-100)', display:'flex', alignItems:'center', justifyContent:'center' }}><i data-lucide={s[0]} style={{width:19,height:19,color:'var(--pink-600)'}} aria-hidden="true"></i></Clickable>)}
            </div>
          </div>
          <div>
            <div style={{ fontWeight:800, fontSize:15, color:'var(--ink-900)', marginBottom:14 }}>Покупцям</div>
            <div style={{ display:'flex', flexDirection:'column', gap:9 }}>
              {link('Таблиця розмірів', ()=>nav('sizeguide'))}
              {link('Розпродаж', ()=>tabNav('sale'))}
              {link('Самовивіз', ()=>tabNav('stores'))}
              {link('Контакти', ()=>tabNav('linkbio'))}
              {link('Написати нам', openDM)}
            </div>
          </div>
          <div>
            <div style={{ fontWeight:800, fontSize:15, color:'var(--ink-900)', marginBottom:14 }}>Категорії</div>
            <div style={{ display:'flex', flexDirection:'column', gap:9 }}>
              {S.CATS.filter(c=>c.id!=='sale').map(c=> link(c.uk, ()=>nav('catalog',{cat:c.id})))}
            </div>
          </div>
          <div>
            <div style={{ fontWeight:800, fontSize:15, color:'var(--ink-900)', marginBottom:14 }}>Наші магазини</div>
            {S.STORES.map(s=>(
              <Clickable key={s.id} onClick={()=>tabNav('stores')} style={{ display:'block', width:'100%', marginBottom:10, fontSize:13.5 }}>
                <b style={{color:'var(--ink-900)'}}>{s.id} · {s.city}</b>
                <div style={{ color:'var(--ink-500)', fontWeight:600 }}>{s.addr} · {s.hours}</div>
              </Clickable>
            ))}
          </div>
        </div>
        <div style={{ borderTop:'1px solid var(--ink-100)', marginTop:28, paddingTop:18, display:'flex', justifyContent:'space-between', fontSize:13, color:'var(--ink-400)', fontWeight:600 }}>
          <span>© 2026 Магазин «Аліса». Усі права захищені.</span>
          <span>Зроблено з ♥ для родин</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- OVERLAYS (ported from mobile app) ---------------- */
function Sheet({ children, onClose, side, wide }) {
  const base = { background:'#fff', overflowY:'auto', padding:'22px 24px', animation:'dlgIn .22s ease' };
  const pos = side==='right'
    ? { marginLeft:'auto', width:wide||420, height:'100%' }
    : { margin:'auto', width:wide||460, maxHeight:'86%', borderRadius:24 };
  return (
    <div onClick={onClose} style={{ position:'fixed', inset:0, zIndex:60, background:'rgba(46,26,38,.42)', display:'flex' }}>
      <div onClick={e=>e.stopPropagation()} style={{ ...base, ...pos }}>{children}</div>
    </div>
  );
}

function FiltersDrawer({ onClose, nav, initial }) {
  const [sel, setSel] = React.useState(initial || {});
  const t = (k,v)=> setSel(s=>({ ...s, [k]: s[k]===v?null:v }));
  const tog = (k)=> setSel(s=>({ ...s, [k]: !s[k] }));
  const matchCount = S.applyFilters(S.PRODUCTS, sel).length;
  const grp = (title, children)=> (
    <div style={{ marginBottom:18 }}>
      <div style={{ fontWeight:800, fontSize:13, color:'var(--ink-900)', marginBottom:8 }}>{title}</div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>{children}</div>
    </div>
  );
  return (
    <Sheet onClose={onClose} side="right">
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18 }}>
        <span style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:20 }}>Фільтри</span>
        <IconButton aria-label="Закрити" variant="ghost" onClick={onClose}>{I('x')}</IconButton>
      </div>
      {grp('Категорія', S.CATS.filter(c=>c.id!=='sale').map(c=> <FilterChip key={c.id} label={c.uk} color={c.color} active={sel.cat===c.id} onClick={()=>t('cat',c.id)} />))}
      {grp('Вік', Object.keys(S.AGE_BUCKETS).map(a=> <FilterChip key={a} label={a+' р'} active={sel.age===a} onClick={()=>t('age',a)} />))}
      {grp('Розмір (зріст)', S.SIZES_CLOTHING.map(s=> <FilterChip key={s} label={s} active={sel.size===s} onClick={()=>t('size',s)} />))}
      {grp('Стать', ['Дівчатам','Хлопцям','Унісекс'].map(g=> <FilterChip key={g} label={g} active={sel.gender===g} onClick={()=>t('gender',g)} />))}
      {grp('Сезон', ['Літо','Зима','Демісезон'].map(s=> <FilterChip key={s} label={s} active={sel.season===s} onClick={()=>t('season',s)} />))}
      {grp('Наявність у магазині', S.STORES.map(s=> <FilterChip key={s.id} label={s.id} active={sel.store===s.id} onClick={()=>t('store',s.id)} />))}
      {grp('Особливе', [['Зі знижкою','sale'],['Новинки','new'],['Останні розміри','last']].map(o=> <FilterChip key={o[1]} label={o[0]} color="pink" active={!!sel[o[1]]} onClick={()=>tog(o[1])} />))}
      <div style={{ display:'flex', gap:10, position:'sticky', bottom:0, background:'#fff', paddingTop:10 }}>
        <Button variant="ghost" onClick={()=>setSel({})}>Скинути</Button>
        <Button variant="primary" size="lg" fullWidth disabled={matchCount===0} onClick={()=>nav('catalog', sel)}>
          {matchCount===0 ? 'Немає товарів' : `Показати товари (${matchCount})`}
        </Button>
      </div>
    </Sheet>
  );
}

function SearchOverlay({ onClose, nav, addToCart }) {
  const [q, setQ] = React.useState('');
  const res = q.trim() ? S.PRODUCTS.filter(p=>p.name.toLowerCase().includes(q.toLowerCase())||p.id.includes(q)) : [];
  const popular = ['Комбінезон','Кросівки','Іграшки','Шапка','Рюкзак'];
  React.useEffect(()=>{ if(window.lucide) window.lucide.createIcons(); });
  return (
    <div style={{ position:'fixed', inset:0, zIndex:60, background:'#fff', display:'flex', flexDirection:'column' }}>
      <div style={{ maxWidth:900, width:'100%', margin:'0 auto', display:'flex', gap:10, alignItems:'center', padding:'16px 24px', borderBottom:'1px solid var(--ink-100)' }}>
        <div style={{ flex:1, position:'relative' }}>
          <i data-lucide="search" style={{ position:'absolute', left:16, top:'50%', transform:'translateY(-50%)', width:19, height:19, color:'var(--ink-400)' }}></i>
          <input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Пошук товарів…" style={{ width:'100%', boxSizing:'border-box', padding:'13px 16px 13px 46px', borderRadius:'var(--radius-pill)', border:'2px solid var(--ink-200)', fontFamily:'var(--font-body)', fontWeight:700, fontSize:16, outline:'none' }} />
        </div>
        <button onClick={onClose} style={{ background:'none', border:0, fontWeight:700, fontSize:15, color:'var(--pink-600)', cursor:'pointer' }}>Скасувати</button>
      </div>
      <div style={{ maxWidth:900, width:'100%', margin:'0 auto', padding:24, overflowY:'auto' }}>
        {!q.trim() && (
          <div>
            <div style={{ fontWeight:800, fontSize:13, color:'var(--ink-500)', marginBottom:10 }}>Популярні запити</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>{popular.map(t=> <FilterChip key={t} label={t} onClick={()=>setQ(t)} />)}</div>
          </div>
        )}
        {q.trim() && res.length===0 && <Scr.EmptyState nav={(r,p)=>{onClose();nav(r,p);}} />}
        {res.length>0 && (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16 }}>
            {res.map(p=> <ProductCard key={p.id} p={p} cat={S.catById(p.cat)} onOpen={()=>{onClose();nav('product',{id:p.id});}} onAdd={()=>addToCart(p)} />)}
          </div>
        )}
      </div>
    </div>
  );
}

function DMSheet({ onClose }) {
  const opts = [['Instagram Direct','instagram','var(--pink-500)','Відповідаємо щодня 9:00–21:00',IG],['Viber','phone','var(--info)','Швидка відповідь','viber://chat?number=%2B380988222964'],['Telegram','send','var(--blue-500)','Зручно з телефона',null],['Зателефонувати','phone-call','var(--green-600)',S.PHONE,'tel:+380988222964']];
  const pick = (o)=>{ if(o[4]) window.open(o[4],'_blank'); onClose(); };
  React.useEffect(()=>{ if(window.lucide) window.lucide.createIcons(); });
  return (
    <Sheet onClose={onClose}>
      <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:20, marginBottom:4 }}>Напишіть нам</div>
      <p style={{ fontSize:14, color:'var(--ink-500)', fontWeight:600, margin:'0 0 16px' }}>Підкажемо наявність, розмір і допоможемо із замовленням.</p>
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {opts.map(o=>(
          <button key={o[0]} onClick={()=>pick(o)} style={{ display:'flex', alignItems:'center', gap:14, background:'#fff', border:'2px solid var(--ink-200)', borderRadius:'var(--radius-md)', padding:'13px 16px', cursor:'pointer', textAlign:'left' }}>
            <i data-lucide={o[1]} style={{ width:24, height:24, color:o[2] }}></i>
            <div style={{ flex:1 }}><div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:16, color:'var(--ink-900)' }}>{o[0]}</div><div style={{ fontSize:12.5, color:'var(--ink-500)', fontWeight:600 }}>{o[3]}</div></div>
            <i data-lucide="chevron-right" style={{ width:18, height:18, color:'var(--ink-300)' }}></i>
          </button>
        ))}
      </div>
    </Sheet>
  );
}

/* ---------------- APP SHELL + ROUTER ---------------- */
function DesktopApp() {
  const [stack, setStack] = React.useState([{ r:'home', p:{} }]);
  const cur = stack[stack.length-1];
  const [cart, setCart] = React.useState([]);
  const [overlay, setOverlay] = React.useState(null);
  const [toast, setToast] = React.useState(null);

  React.useEffect(()=>{ if(window.lucide) window.lucide.createIcons(); });
  React.useEffect(()=>{ window.scrollTo && window.scrollTo(0,0); }, [stack.length, cur.r, cur.p.id]);

  const nav = (r, p={}) => setStack(s => [...s, { r, p }]);
  const tabNav = (r, p={}) => setStack([{ r, p }]);

  const cartCount = cart.reduce((s,i)=>s+i.qty,0);
  const addToCart = (p, size=null, qty=1) => {
    setCart(c => {
      const k = c.findIndex(i=>i.p.id===p.id && i.size===size);
      if(k>=0){ const n=[...c]; n[k]={...n[k],qty:n[k].qty+qty}; return n; }
      return [...c, { p, size, qty }];
    });
    setToast(`Додано: ${p.name}`); setTimeout(()=>setToast(null), 1800);
  };
  const setQty = (idx,v)=> setCart(c=>{ const n=[...c]; n[idx]={...n[idx],qty:v}; return n; });
  const removeItem = (idx)=> setCart(c=>c.filter((_,i)=>i!==idx));
  const placeOrder = ()=>{ nav('confirm'); setCart([]); };
  const openDM = ()=> setOverlay('dm');

  let inner;
  if(cur.r==='catalog') inner = <Scr.CatalogScreen nav={nav} addToCart={addToCart} params={cur.p} openFilters={()=>setOverlay('filters')} />;
  else if(cur.r==='product') inner = <Scr.ProductScreen nav={nav} addToCart={addToCart} params={cur.p} openDM={openDM} />;
  else if(cur.r==='cart') inner = <Scr.CartScreen nav={nav} cart={cart} setQty={setQty} removeItem={removeItem} />;
  else if(cur.r==='checkout') inner = <Scr.CheckoutScreen nav={nav} cart={cart} placeOrder={placeOrder} />;
  else if(cur.r==='confirm') inner = <Scr.ConfirmScreen nav={tabNav} />;
  else if(cur.r==='stores') inner = <Scr.StoresScreen nav={nav} />;
  else if(cur.r==='sale') inner = <Scr.SaleScreen nav={nav} addToCart={addToCart} />;
  else if(cur.r==='linkbio') inner = <Scr.LinkBioScreen nav={nav} />;
  else if(cur.r==='sizeguide') inner = <Scr.SizeGuide />;

  return (
    <div>
      <Header nav={nav} tabNav={tabNav} cartCount={cartCount} openSearch={()=>setOverlay('search')} />
      {cur.r==='home'
        ? <DesktopHome nav={nav} tabNav={tabNav} addToCart={addToCart} />
        : <div style={{ maxWidth:920, margin:'0 auto', padding:'28px 24px 56px' }}>{inner}</div>}
      <Footer nav={nav} tabNav={tabNav} openDM={openDM} />

      {toast && <div style={{ position:'fixed', left:'50%', transform:'translateX(-50%)', bottom:28, zIndex:70, background:'var(--ink-900)', color:'#fff', borderRadius:'var(--radius-pill)', padding:'12px 20px', fontWeight:700, fontSize:14, display:'flex', alignItems:'center', gap:9, boxShadow:'var(--shadow-lg)' }}><i data-lucide="check-circle" style={{width:18,height:18}}></i>{toast}</div>}

      {overlay==='filters' && <FiltersDrawer onClose={()=>setOverlay(null)} initial={cur.r==='catalog'?cur.p:null} nav={(r,p)=>{setOverlay(null);nav(r,p);}} />}
      {overlay==='search' && <SearchOverlay onClose={()=>setOverlay(null)} nav={(r,p)=>{setOverlay(null);nav(r,p);}} addToCart={addToCart} />}
      {overlay==='dm' && <DMSheet onClose={()=>setOverlay(null)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<DesktopApp />);
setTimeout(()=>window.lucide&&window.lucide.createIcons(), 150);
})();
