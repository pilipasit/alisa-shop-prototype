/* IIFE */
;(function(){
/* Alisa webshop — app shell, router, overlays. */
const DS = window.AlisaKidsStoreDesignSystem_194dcf;
const { Button: AB, Badge: ABg, Input: AIn, IconButton: AIb } = DS;
const Sd = window.AlisaShop;
const Ud = window.AlisaUI;
const Scr = window.AlisaScreens;
const I = Ud.Icon;

const TAB_ROUTES = { home:'home', catalog:'search', cart:'cart', stores:'stores', linkbio:'user' };

function App() {
  const [stack, setStack] = React.useState([{ r:'home', p:{} }]);
  const cur = stack[stack.length-1];
  const [cart, setCart] = React.useState([]);
  const [overlay, setOverlay] = React.useState(null); // 'filters'|'dm'|'search'|'menu'
  const [toast, setToast] = React.useState(null);
  const scrollRef = React.useRef(null);

  React.useEffect(()=>{ if(window.lucide) window.lucide.createIcons(); });
  React.useEffect(()=>{ if(scrollRef.current) scrollRef.current.scrollTop = 0; }, [stack.length, cur.r, cur.p.id]);

  const nav = (r, p={}) => setStack(s => [...s, { r, p }]);
  const back = () => setStack(s => s.length>1 ? s.slice(0,-1) : s);
  const tabNav = (r) => setStack([{ r, p:{} }]);

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

  const TITLES = { catalog:'Каталог', product:'Товар', cart:'Кошик', checkout:'Оформлення', confirm:'Готово', stores:'Магазини', sale:'Розпродаж', linkbio:'Аліса', sizeguide:'Таблиця розмірів', info:'Інформація' };
  const showLogo = cur.r==='home';
  const canBack = stack.length>1;

  let screen;
  if(cur.r==='home') screen = <Scr.HomeScreen nav={nav} addToCart={addToCart} />;
  else if(cur.r==='catalog') screen = <Scr.CatalogScreen nav={nav} addToCart={addToCart} params={cur.p} openFilters={()=>setOverlay('filters')} />;
  else if(cur.r==='product') screen = <Scr.ProductScreen nav={nav} addToCart={addToCart} params={cur.p} openDM={()=>setOverlay('dm')} />;
  else if(cur.r==='cart') screen = <Scr.CartScreen nav={nav} cart={cart} setQty={setQty} removeItem={removeItem} />;
  else if(cur.r==='checkout') screen = <Scr.CheckoutScreen nav={nav} cart={cart} placeOrder={placeOrder} />;
  else if(cur.r==='confirm') screen = <Scr.ConfirmScreen nav={tabNav} />;
  else if(cur.r==='stores') screen = <Scr.StoresScreen nav={nav} />;
  else if(cur.r==='sale') screen = <Scr.SaleScreen nav={nav} addToCart={addToCart} />;
  else if(cur.r==='linkbio') screen = <Scr.LinkBioScreen nav={nav} />;
  else if(cur.r==='sizeguide') screen = <SizeGuide />;
  else if(cur.r==='info') screen = <Scr.InfoScreen nav={nav} params={cur.p} />;

  const isBio = cur.r==='linkbio';

  return (
    <div className="phone">
      <a href="#main" className="a-skip">Перейти до вмісту</a>
      <div className="statusbar"><span>9:41</span><span style={{display:'flex',gap:5,alignItems:'center'}}><i data-lucide="signal" style={{width:15,height:15}}></i><i data-lucide="wifi" style={{width:15,height:15}}></i><i data-lucide="battery-full" style={{width:19,height:15}}></i></span></div>

      {/* header */}
      {!isBio && (
        <header className="appbar">
          {canBack
            ? <AIb aria-label="Назад" variant="ghost" onClick={back}>{I('arrow-left')}</AIb>
            : <AIb aria-label="Меню" variant="ghost" onClick={()=>setOverlay('menu')}>{I('menu')}</AIb>}
          {showLogo
            ? <img src="../../assets/logo-primary.svg" alt="Аліса" style={{ height:30 }} />
            : <span style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:18, color:'var(--ink-900)' }}>{TITLES[cur.r]||''}</span>}
          <div style={{ display:'flex', gap:2 }}>
            <AIb aria-label="Пошук" variant="ghost" onClick={()=>setOverlay('search')}>{I('search')}</AIb>
            <div style={{ position:'relative' }}>
              <AIb aria-label="Кошик" variant="ghost" onClick={()=>nav('cart')}>{I('shopping-bag')}</AIb>
              {cartCount>0 && <span className="cartdot">{cartCount}</span>}
            </div>
          </div>
        </header>
      )}

      {/* scroll area */}
      <main id="main" className="appscroll" ref={scrollRef} style={isBio?{padding:'18px 18px 90px'}:{}}>
        {screen}
      </main>

      {/* bottom nav */}
      <nav className="bottomnav">
        {[['home','Головна','home'],['catalog','Каталог','layout-grid'],['cart','Кошик','shopping-bag'],['stores','Магазини','map-pin'],['linkbio','Контакти','phone']].map(t=>{
          const active = cur.r===t[0] || (t[0]==='catalog'&&['product','sale'].includes(cur.r)) || (t[0]==='cart'&&['checkout','confirm'].includes(cur.r));
          return (
            <button key={t[0]} className={'navbtn'+(active?' on':'')} onClick={()=>tabNav(t[0]==='catalog'?'catalog':t[0])}>
              <span style={{ position:'relative' }}>
                <i data-lucide={t[2]} style={{ width:22, height:22 }}></i>
                {t[0]==='cart'&&cartCount>0 && <span className="navdot">{cartCount}</span>}
              </span>
              <span>{t[1]}</span>
            </button>
          );
        })}
      </nav>

      {toast && <div className="toast"><i data-lucide="check-circle" style={{width:18,height:18}}></i>{toast}</div>}

      {overlay==='filters' && <FiltersDrawer onClose={()=>setOverlay(null)} initial={cur.r==='catalog'?cur.p:null} nav={(r,p)=>{setOverlay(null);nav(r,p);}} />}
      {overlay==='dm' && <DMSheet onClose={()=>setOverlay(null)} />}
      {overlay==='search' && <SearchOverlay onClose={()=>setOverlay(null)} nav={(r,p)=>{setOverlay(null);nav(r,p);}} addToCart={addToCart} />}
      {overlay==='menu' && <MenuDrawer onClose={()=>setOverlay(null)} nav={(r,p)=>{setOverlay(null);tabNav(r==='catalog'?'catalog':r);if(p)setStack([{r,p}]);}} />}
    </div>
  );
}

/* ---------- overlays ---------- */
function Sheet({ children, onClose, side }) {
  return (
    <div className="ovl" onClick={onClose}>
      <div className={'sheet '+(side||'bottom')} onClick={e=>e.stopPropagation()}>{children}</div>
    </div>
  );
}

function FiltersDrawer({ onClose, nav, initial }) {
  const [sel, setSel] = React.useState(initial || {});
  const matchCount = Sd.applyFilters(Sd.PRODUCTS, sel).length;
  const t = (k,v)=> setSel(s=>({ ...s, [k]: s[k]===v?null:v }));
  const Chip = Ud.FilterChip;
  const grp = (title, children)=> <div style={{marginBottom:18}}><div style={{fontWeight:800,fontSize:13,color:'var(--ink-900)',marginBottom:8}}>{title}</div><div style={{display:'flex',flexWrap:'wrap',gap:8}}>{children}</div></div>;
  return (
    <Sheet onClose={onClose} side="right">
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18 }}>
        <span style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:20 }}>Фільтри</span>
        <AIb aria-label="Закрити" variant="ghost" onClick={onClose}>{I('x')}</AIb>
      </div>
      {grp('Категорія', Sd.CATS.filter(c=>c.id!=='sale').map(c=> <Chip key={c.id} label={c.uk} color={c.color} active={sel.cat===c.id} onClick={()=>t('cat',c.id)} />))}
      {grp('Вік', ['0–2','3–5','6–9','10–12'].map(a=> <Chip key={a} label={a+' р'} active={sel.age===a} onClick={()=>t('age',a)} />))}
      {grp('Розмір (зріст)', Sd.SIZES_CLOTHING.map(s=> <Chip key={s} label={s} active={sel.size===s} onClick={()=>setSel(x=>({...x,size:x.size===s?null:s}))} />))}
      {grp('Стать', ['Дівчатам','Хлопцям','Унісекс'].map(g=> <Chip key={g} label={g} active={sel.gender===g} onClick={()=>setSel(x=>({...x,gender:x.gender===g?null:g}))} />))}
      {grp('Сезон', ['Літо','Зима','Демісезон'].map(g=> <Chip key={g} label={g} active={sel.season===g} onClick={()=>setSel(x=>({...x,season:x.season===g?null:g}))} />))}
      {grp('Наявність у магазині', Sd.STORES.map(s=> <Chip key={s.id} label={s.id} active={sel.store===s.id} onClick={()=>t('store',s.id)} />))}
      {grp('Особливе', [['Зі знижкою','sale'],['Новинки','new'],['Останні розміри','last']].map(o=> <Chip key={o[1]} label={o[0]} color="pink" active={sel[o[1]]} onClick={()=>setSel(x=>({...x,[o[1]]:!x[o[1]]}))} />))}
      <div style={{ display:'flex', gap:10, position:'sticky', bottom:0, background:'#fff', paddingTop:10 }}>
        <AB variant="ghost" onClick={()=>setSel({})}>Скинути</AB>
        <AB variant="primary" size="lg" fullWidth disabled={matchCount===0}
          onClick={()=>nav('catalog', sel)}>
          {matchCount===0 ? 'Немає товарів' : `Показати товари (${matchCount})`}
        </AB>
      </div>
    </Sheet>
  );
}

function DMSheet({ onClose }) {
  const opts = [['Instagram Direct','instagram','var(--pink-500)','Відповідаємо щодня 9:00–21:00','https://www.instagram.com/alisa.kids.shop/'],['Viber','phone','var(--info)','Швидка відповідь','viber://chat?number=%2B380988222964'],['Telegram','send','var(--blue-500)','Зручно з телефона',null],['Зателефонувати','phone-call','var(--green-600)',(Sd.PHONE||'+380 98 822 29 64'),'tel:+380988222964']];
  const pick = (o)=>{ if(o[4]) window.open(o[4],'_blank'); onClose(); };
  return (
    <Sheet onClose={onClose}>
      <div style={{ width:40, height:5, borderRadius:99, background:'var(--ink-200)', margin:'0 auto 16px' }}></div>
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
      <div style={{ height:8 }}></div>
    </Sheet>
  );
}

function SearchOverlay({ onClose, nav, addToCart }) {
  const [q, setQ] = React.useState('');
  const res = q.trim() ? Sd.PRODUCTS.filter(p=>p.name.toLowerCase().includes(q.toLowerCase())||p.id.includes(q)) : [];
  const popular = ['Комбінезон','Кросівки','Іграшки','Шапка','Рюкзак'];
  return (
    <div className="ovl-full">
      <div style={{ display:'flex', gap:10, alignItems:'center', padding:'14px 16px', borderBottom:'1px solid var(--ink-100)' }}>
        <div style={{ flex:1, position:'relative' }}>
          <i data-lucide="search" style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', width:18, height:18, color:'var(--ink-400)' }}></i>
          <input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Пошук товарів…" style={{ width:'100%', boxSizing:'border-box', padding:'12px 14px 12px 42px', borderRadius:'var(--radius-pill)', border:'2px solid var(--ink-200)', fontFamily:'var(--font-body)', fontWeight:700, fontSize:15, outline:'none' }} />
        </div>
        <button onClick={onClose} style={{ background:'none', border:0, fontWeight:700, fontSize:15, color:'var(--pink-600)', cursor:'pointer' }}>Скасувати</button>
      </div>
      <div style={{ padding:16, overflowY:'auto' }}>
        {!q.trim() && (
          <div>
            <div style={{ fontWeight:800, fontSize:13, color:'var(--ink-500)', marginBottom:10 }}>Популярні запити</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>{popular.map(t=> <Ud.FilterChip key={t} label={t} onClick={()=>setQ(t)} />)}</div>
          </div>
        )}
        {q.trim() && res.length===0 && <Scr.EmptyState nav={nav} />}
        {res.length>0 && (
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            {res.map(p=> <Ud.ProductCard key={p.id} p={p} cat={Sd.catById(p.cat)} onOpen={()=>nav('product',{id:p.id})} onAdd={()=>addToCart(p)} />)}
          </div>
        )}
      </div>
    </div>
  );
}

function MenuDrawer({ onClose, nav }) {
  const links = [['Головна','home','home'],['Каталог','layout-grid','catalog'],['Розпродаж','badge-percent','sale'],['Новинки','sparkles','catalog'],['Іграшки','blocks','catalog'],['Магазини','map-pin','stores'],['Контакти / Direct','phone','linkbio']];
  const info = [['Доставка і оплата',()=>nav('info',{doc:'delivery'})],['Обмін і повернення',()=>nav('info',{doc:'returns'})],['Таблиця розмірів',()=>nav('sizeguide')],['Про нас',()=>nav('info',{doc:'about'})],['Політика конфіденційності',()=>nav('info',{doc:'privacy'})],['Публічна оферта',()=>nav('info',{doc:'offer'})]];
  return (
    <Sheet onClose={onClose} side="left">
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18 }}>
        <img src="../../assets/logo-primary.svg" alt="Аліса" style={{ height:30 }} />
        <AIb aria-label="Закрити" variant="ghost" onClick={onClose}>{I('x')}</AIb>
      </div>
      <div style={{ display:'flex', flexDirection:'column' }}>
        {links.map(l=>(
          <button key={l[0]} onClick={()=>nav(l[2])} style={{ display:'flex', alignItems:'center', gap:14, padding:'14px 4px', background:'none', border:0, borderBottom:'1px solid var(--ink-100)', cursor:'pointer', textAlign:'left' }}>
            <i data-lucide={l[1]} style={{ width:22, height:22, color:'var(--pink-500)' }}></i>
            <span style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:17, color:'var(--ink-900)' }}>{l[0]}</span>
          </button>
        ))}
      </div>
      <div style={{ marginTop:18, fontWeight:800, fontSize:12, color:'var(--ink-500)', textTransform:'uppercase', letterSpacing:'.05em' }}>Інформація</div>
      <div style={{ display:'flex', flexDirection:'column', gap:2, marginTop:8 }}>
        {info.map(t=> <Ud.Clickable key={t[0]} onClick={t[1]} style={{ padding:'8px 4px', fontSize:14, fontWeight:600, color:'var(--ink-600)' }}>{t[0]}</Ud.Clickable>)}
      </div>
    </Sheet>
  );
}

function SizeGuide() {
  const rows = [['80','9–12 міс','11–12 кг'],['86','1–1,5 р','12–13 кг'],['92','2 р','13–14 кг'],['98','3 р','14–15 кг'],['104','4 р','15–17 кг'],['110','5 р','17–19 кг'],['116','6 р','19–22 кг'],['122','7 р','22–25 кг']];
  return (
    <div>
      <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:26, margin:'0 0 12px' }}>Таблиця розмірів</h1>
      <p style={{ fontSize:14, color:'var(--ink-500)', fontWeight:600, marginBottom:16 }}>Розмір одягу = зріст дитини у сантиметрах. Якщо вагаєтесь — оберіть більший.</p>
      <div style={{ background:'#fff', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-md)', overflow:'hidden' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', background:'var(--pink-500)', color:'#fff', fontWeight:800, fontSize:13 }}>
          {['Розмір','Вік','Вага'].map(h=> <span key={h} style={{ padding:'11px 14px' }}>{h}</span>)}
        </div>
        {rows.map((r,i)=>(
          <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', background:i%2?'var(--cream)':'#fff', fontSize:14 }}>
            {r.map((c,j)=> <span key={j} style={{ padding:'11px 14px', fontWeight:j===0?800:600, color:j===0?'var(--ink-900)':'var(--ink-600)' }}>{c}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
setTimeout(()=>window.lucide&&window.lucide.createIcons(), 100);

})();
