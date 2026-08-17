/* IIFE */
;(function(){
/* Alisa webshop — screens 1: Home, Catalog, Product detail. window.AlisaScreens (part 1) */
const { Button, Badge, Tag, IconButton, Input, Notice } = window.AlisaKidsStoreDesignSystem_194dcf;
const S = window.AlisaShop;
const U = window.AlisaUI;
const { Icon, Clickable, Photo, ProductCard, SectionHead, HScroll, PromoBanner, Breadcrumbs, Qty, StoreDots, Price, C500, C100, C600, disc } = U;

/* ---------------- HOME ---------------- */
function HomeScreen({ nav, addToCart }) {
  const cats = S.CATS;
  return (
    <div>
      {/* hero */}
      <div style={{ background:'var(--pink-500)', color:'#fff', borderRadius:'var(--radius-xl)', padding:'24px 22px 22px', position:'relative', overflow:'hidden', marginBottom:22 }}>
        <div style={{ position:'absolute', width:200, height:200, borderRadius:'var(--radius-blob)', background:'rgba(255,255,255,.14)', right:-60, top:-70 }}></div>
        <Badge tone="warning" size="lg">Зимовий сезон</Badge>
        <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:34, lineHeight:1.0, margin:'12px 0 8px', letterSpacing:'-0.02em', position:'relative' }}>Тепло для<br/>найменших</h1>
        <p style={{ fontSize:15, fontWeight:600, opacity:.95, margin:'0 0 16px', maxWidth:240, position:'relative' }}>Знижки до 50% на зимовий одяг та взуття у магазинах «Аліса».</p>
        <Button variant="sale" onClick={()=>nav('catalog',{cat:'sale'})}>Перейти до знижок</Button>
      </div>

      {/* categories */}
      <SectionHead title="Категорії" />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:12, marginBottom:24 }}>
        {cats.map(c=>(
          <Clickable key={c.id} onClick={()=>nav('catalog',{cat:c.id})} style={{ position:'relative', overflow:'hidden', background:C500[c.color], color: c.color==='yellow'?'var(--ink-900)':'#fff', borderRadius:'var(--radius-lg)', padding:'16px 16px 18px', minHeight:84, display:'flex', flexDirection:'column', justifyContent:'space-between', boxShadow:'var(--shadow-sm)' }}>
            <div style={{ position:'absolute', width:90, height:90, borderRadius:'var(--radius-blob)', background:'rgba(255,255,255,.18)', right:-22, bottom:-30 }}></div>
            <i data-lucide={c.icon} style={{ width:30, height:30, strokeWidth:2, position:'relative' }} aria-hidden="true"></i>
            <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:19, position:'relative' }}>{c.uk}</span>
          </Clickable>
        ))}
      </div>

      {/* promo banners */}
      <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:24 }}>
        <PromoBanner color="pinkDeep" kicker="Розпродаж" title="Зимовий розпродаж" sub="Знижки до −50%" cta="Дивитися" onClick={()=>nav('sale')} />
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          <PromoBanner color="blue" title="Нова колекція" sub="Весна 2026" cta="Новинки" onClick={()=>nav('catalog',{filter:'new'})} />
          <PromoBanner color="green" title="Іграшка тижня" sub="−30%" cta="Дивитися" onClick={()=>nav('catalog',{cat:'toys'})} />
        </div>
      </div>

      {/* popular carousel */}
      <SectionHead title="Популярне" action="Усі" onAction={()=>nav('catalog',{})} />
      <HScroll>{S.popular().map(p=> <ProductCard key={p.id} p={p} cat={S.catById(p.cat)} onOpen={()=>nav('product',{id:p.id})} onAdd={()=>addToCart(p)} />)}</HScroll>

      <div style={{ height:18 }}></div>
      <SectionHead title="Знижки" action="Усі" onAction={()=>nav('sale')} />
      <HScroll>{S.onSale().map(p=> <ProductCard key={p.id} p={p} cat={S.catById(p.cat)} onOpen={()=>nav('product',{id:p.id})} onAdd={()=>addToCart(p)} />)}</HScroll>

      <div style={{ height:18 }}></div>
      <SectionHead title="Новинки" action="Усі" onAction={()=>nav('catalog',{filter:'new'})} />
      <HScroll>{S.isNew().map(p=> <ProductCard key={p.id} p={p} cat={S.catById(p.cat)} onOpen={()=>nav('product',{id:p.id})} onAdd={()=>addToCart(p)} />)}</HScroll>

      {/* store reminder */}
      <div style={{ height:24 }}></div>
      <div style={{ background:'var(--blue-100)', borderRadius:'var(--radius-lg)', padding:18, display:'flex', gap:14, alignItems:'center' }}>
        <div style={{ width:48, height:48, borderRadius:'var(--radius-md)', background:'var(--blue-500)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', flex:'none' }}><i data-lucide="store" style={{width:24,height:24}}></i></div>
        <div style={{ flex:1 }}>
          <div style={{ fontWeight:800, fontSize:15, color:'var(--ink-900)' }}>Можна забрати у магазині</div>
          <div style={{ fontSize:13, color:'var(--blue-600)', fontWeight:600 }}>3 магазини · А-1 · А-2 · А-3</div>
        </div>
        <IconButton aria-label="Магазини" variant="soft" onClick={()=>nav('stores')}>{Icon('chevron-right')}</IconButton>
      </div>

      {/* benefits */}
      <div style={{ height:24 }}></div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
        {[['store','3 магазини','офлайн поруч'],['repeat','Легкий обмін','14 днів із чеком'],['message-circle','Прямий зв’язок','Direct · Viber · Telegram'],['package-check','Самовивіз','безкоштовно з магазину']].map((b,i)=>(
          <div key={i} style={{ background:'#fff', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-md)', padding:14, boxShadow:'var(--ring-soft)' }}>
            <i data-lucide={b[0]} style={{ width:24, height:24, color:'var(--pink-500)', strokeWidth:2 }}></i>
            <div style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)', marginTop:8 }}>{b[1]}</div>
            <div style={{ fontSize:12.5, color:'var(--ink-500)', fontWeight:600 }}>{b[2]}</div>
          </div>
        ))}
      </div>

      {/* social */}
      <div style={{ height:24 }}></div>
      <SectionHead title="Ми в Instagram" action="@alisa.kids.shop" onAction={()=>nav('linkbio')} />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:8 }}>
        {S.PRODUCTS.slice(0,6).map(p=> <Clickable key={p.id} onClick={()=>nav('product',{id:p.id})} label={p.name}><Photo cat={S.catById(p.cat)} src={p.img} alt="" /></Clickable>)}
      </div>
    </div>
  );
}

/* ---------------- CATALOG / LISTING ---------------- */
function CatalogScreen({ nav, addToCart, params, openFilters }) {
  const cat = params.cat ? S.catById(params.cat) : null;
  const list = S.applyFilters(S.PRODUCTS, params);
  const chips = S.filterChips(params);
  const [sort, setSort] = React.useState('pop');
  const sorted = [...list].sort((a,b)=>{
    if(sort==='new') return (b.badge==='new')-(a.badge==='new');
    if(sort==='lo') return a.price-b.price;
    if(sort==='hi') return b.price-a.price;
    if(sort==='disc') return disc(b)-disc(a);
    return (b.hit?1:0)-(a.hit?1:0);
  });
  const SORTS = [['pop','Популярні'],['new','Новинки'],['lo','Спочатку дешевші'],['hi','Спочатку дорожчі'],['disc','Найбільша знижка']];
  const title = cat ? cat.uk : params.cat==='sale' ? 'Розпродаж' : params.filter==='new' ? 'Новинки' : 'Усі товари';
  return (
    <div>
      <Breadcrumbs items={[{label:'Головна',onClick:()=>nav('home')},{label:'Каталог',onClick:()=>nav('catalog',{})},{label:title}]} />
      <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:28, margin:'0 0 4px', color:'var(--ink-900)' }}>{title}</h1>
      <p style={{ fontSize:14, color:'var(--ink-500)', margin:'0 0 16px', fontWeight:600 }}>{cat?cat.desc:'Усе для дітей — одяг, взуття, іграшки та сезонні товари.'}</p>

      {/* controls */}
      <div style={{ display:'flex', gap:10, marginBottom:14 }}>
        <Button variant="secondary" size="sm" icon={Icon('sliders-horizontal')} onClick={openFilters}>Фільтри</Button>
        <div style={{ position:'relative', flex:1 }}>
          <select value={sort} onChange={e=>setSort(e.target.value)} style={{ width:'100%', height:'100%', appearance:'none', WebkitAppearance:'none', fontFamily:'var(--font-body)', fontWeight:700, fontSize:13.5, color:'var(--ink-700)', background:'#fff', border:'2px solid var(--ink-200)', borderRadius:'var(--radius-pill)', padding:'0 36px 0 16px' }}>
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
              {c.label} <span aria-hidden="true">✕</span>
              <span style={{ position:'absolute', width:1, height:1, overflow:'hidden', clip:'rect(0 0 0 0)' }}>Прибрати фільтр</span>
            </button>
          ))}
          <button onClick={()=>nav('catalog', params.cat ? { cat: params.cat } : {})}
            style={{ background:'none', border:0, fontFamily:'var(--font-body)', fontWeight:700, fontSize:13,
              color:'var(--ink-500)', cursor:'pointer', textDecoration:'underline' }}>Скинути все</button>
        </div>
      )}

      <PromoBanner color="pinkDeep" kicker="Тільки до неділі" title="Розпродаж −50%" cta="Дивитися" onClick={()=>nav('sale')} />
      <div style={{ height:16 }}></div>

      <div style={{ fontSize:13, color:'var(--ink-400)', fontWeight:700, marginBottom:12 }}>{sorted.length} товарів</div>
      {sorted.length === 0 ? (
        <EmptyState nav={nav} />
      ) : (
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          {sorted.map(p=> <ProductCard key={p.id} p={p} cat={S.catById(p.cat)} onOpen={()=>nav('product',{id:p.id})} onAdd={()=>addToCart(p)} />)}
        </div>
      )}

      {sorted.length>0 && (
        <div style={{ display:'flex', justifyContent:'center', gap:8, margin:'22px 0 0' }}>
          {[1,2,3].map(n=> <span key={n} style={{ width:38, height:38, borderRadius:'var(--radius-pill)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:14, background:n===1?'var(--pink-500)':'#fff', color:n===1?'#fff':'var(--ink-600)', border:'2px solid '+(n===1?'var(--pink-500)':'var(--ink-200)'), cursor:'pointer' }}>{n}</span>)}
          <span style={{ width:38, height:38, borderRadius:'var(--radius-pill)', display:'flex', alignItems:'center', justifyContent:'center', background:'#fff', border:'2px solid var(--ink-200)', cursor:'pointer' }}><i data-lucide="chevron-right" style={{width:16,height:16}}></i></span>
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
  const sizes = p.cat==='shoes' ? S.SIZES_SHOES : (p.cat==='clothing'||p.cat==='seasonal') ? S.SIZES_CLOTHING : null;
  const [size, setSize] = React.useState(null);
  const [qty, setQty] = React.useState(1);
  const [gallery, setGallery] = React.useState(0);
  const b = p.badge && U.PBADGE[p.badge];
  return (
    <div>
      <Breadcrumbs items={[{label:'Головна',onClick:()=>nav('home')},{label:cat.uk,onClick:()=>nav('catalog',{cat:cat.id})},{label:p.name}]} />
      {/* gallery */}
      <div style={{ position:'relative', marginBottom:12 }}>
        <div style={{ position:'absolute', top:12, left:12, zIndex:2, display:'flex', gap:6 }}>
          {b && <Badge tone={b.t}>{b.l}</Badge>}
          {p.oldPrice && <Badge tone="sale">−{disc(p)}%</Badge>}
        </div>
        <Photo cat={cat} ratio="1 / 1" radius="var(--radius-lg)" big src={p.img} alt={p.name} />
        <div style={{ display:'flex', gap:8, marginTop:10 }}>
          {[0,1,2].map(i=> <Clickable key={i} onClick={()=>setGallery(i)} label={`Фото ${i+1}`} aria-pressed={gallery===i} style={{ flex:'0 0 64px', border:'2px solid '+(gallery===i?'var(--pink-500)':'var(--ink-200)'), borderRadius:'var(--radius-md)', overflow:'hidden' }}><Photo cat={cat} src={p.img} alt="" /></Clickable>)}
        </div>
      </div>

      <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:25, margin:'4px 0 4px', color:'var(--ink-900)', lineHeight:1.1 }}>{p.name}</h1>
      <div style={{ fontSize:12.5, color:'var(--ink-400)', fontWeight:700, marginBottom:12 }}>Арт. {p.id}</div>
      <Price p={p} size={34} />

      {/* size selector */}
      {sizes && (
        <div style={{ margin:'18px 0' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
            <span style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)' }}>{p.cat==='shoes'?'Розмір':'Розмір (зріст)'}</span>
            <Clickable onClick={()=>nav('sizeguide')} style={{ fontWeight:700, fontSize:13, color:'var(--pink-600)', display:'inline-flex', alignItems:'center', gap:4, textDecoration:'underline' }}><i data-lucide="ruler" style={{width:14,height:14}} aria-hidden="true"></i>Таблиця розмірів</Clickable>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {sizes.map(s=> <button key={s} onClick={()=>setSize(s)} style={{ minWidth:48, height:44, padding:'0 12px', borderRadius:'var(--radius-md)', cursor:'pointer', fontFamily:'var(--font-body)', fontWeight:800, fontSize:15, border:'2px solid '+(size===s?'var(--pink-500)':'var(--ink-200)'), background:size===s?'var(--pink-100)':'#fff', color:size===s?'var(--pink-600)':'var(--ink-700)' }}>{s}</button>)}
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
        <Qty value={qty} onChange={setQty} />
      </div>

      {/* store availability */}
      <div style={{ background:'#fff', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-lg)', padding:16, margin:'18px 0' }}>
        <div style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)', marginBottom:12, display:'flex', alignItems:'center', gap:8 }}><i data-lucide="store" style={{width:18,height:18,color:'var(--pink-500)'}}></i>Наявність у магазинах</div>
        {S.STORES.map(s=>{
          const st = p.av[s.id]; const lbl = S.AV_LABEL[st];
          const c = st==='in'?'var(--green-600)':st==='last'?'var(--yellow-600)':'var(--ink-400)';
          return (
            <div key={s.id} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'9px 0', borderBottom:'1px solid var(--ink-100)' }}>
              <div><span style={{fontWeight:800,fontSize:14,color:'var(--ink-900)'}}>{s.id}</span> <span style={{fontSize:12.5,color:'var(--ink-500)',fontWeight:600}}>· {s.city}, {s.area.split('·')[0]}</span></div>
              <span style={{ fontWeight:800, fontSize:13, color:c, display:'flex', alignItems:'center', gap:6 }}><span style={{width:8,height:8,borderRadius:'50%',background:st==='in'?'var(--green-500)':st==='last'?'var(--yellow-500)':'var(--ink-300)'}}></span>{lbl.uk}</span>
            </div>
          );
        })}
      </div>

      {/* CTAs */}
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        <Button variant="primary" size="lg" fullWidth icon={Icon('shopping-bag')} onClick={()=>addToCart(p,size,qty)}>Додати в кошик</Button>
        <div style={{ display:'flex', gap:10 }}>
          <Button variant="secondary" fullWidth icon={Icon('phone-call')} onClick={openDM}>Уточнити наявність</Button>
        </div>
        <div style={{ display:'flex', gap:8, marginTop:2 }}>
          {[['Direct','instagram','var(--pink-500)'],['Viber','phone','var(--info)'],['Telegram','send','var(--blue-500)']].map(m=>(
            <button key={m[0]} onClick={openDM} style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:6, fontFamily:'var(--font-display)', fontWeight:600, fontSize:13.5, padding:'11px 0', borderRadius:'var(--radius-pill)', border:'2px solid var(--ink-200)', background:'#fff', color:'var(--ink-700)', cursor:'pointer' }}>
              <i data-lucide={m[1]} style={{width:16,height:16,color:m[2]}}></i>{m[0]}
            </button>
          ))}
        </div>
      </div>

      {/* delivery + pickup */}
      <div style={{ margin:'18px 0', display:'flex', flexDirection:'column', gap:10 }}>
        <div style={{ display:'flex', gap:12, alignItems:'flex-start', background:'var(--green-100)', borderRadius:'var(--radius-md)', padding:'13px 15px' }}>
          <i data-lucide="truck" style={{width:20,height:20,color:'var(--green-600)',flex:'none',marginTop:2}}></i>
          <div style={{ fontSize:13.5, color:'var(--ink-700)', fontWeight:600 }}><b style={{color:'var(--ink-900)'}}>Доставка</b> Новою поштою по всій Україні. 1–3 дні.</div>
        </div>
        <div style={{ display:'flex', gap:12, alignItems:'flex-start', background:'var(--blue-100)', borderRadius:'var(--radius-md)', padding:'13px 15px' }}>
          <i data-lucide="package-check" style={{width:20,height:20,color:'var(--blue-600)',flex:'none',marginTop:2}}></i>
          <div style={{ fontSize:13.5, color:'var(--ink-700)', fontWeight:600 }}><b style={{color:'var(--ink-900)'}}>Самовивіз безкоштовно</b> з магазину А-1, А-2 або А-3.</div>
        </div>
      </div>

      {/* description + characteristics */}
      <div style={{ height:8 }}></div>
      <SectionHead title="Опис" />
      <p style={{ fontSize:14.5, color:'var(--ink-700)', lineHeight:1.6, fontWeight:500, margin:'0 0 18px' }}>
        {p.name} — практичний вибір для щоденного носіння. М’які матеріали, приємні до шкіри, прості в догляді. Ідеально підходить для активних малюків.
      </p>
      <SectionHead title="Характеристики" />
      <div style={{ background:'#fff', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-md)', overflow:'hidden', marginBottom:8 }}>
        {[['Категорія',cat.uk],['Вік / розмір',p.ages==='one'?'Один розмір':p.ages],['Сезон','Демісезон / Зима'],['Матеріал','Бавовна 90%, еластан 10%'],['Догляд','Прання при 30°']].map((r,i)=>(
          <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'11px 14px', background:i%2?'var(--cream)':'#fff', fontSize:13.5 }}>
            <span style={{ color:'var(--ink-500)', fontWeight:600 }}>{r[0]}</span><span style={{ color:'var(--ink-900)', fontWeight:700, textAlign:'right' }}>{r[1]}</span>
          </div>
        ))}
      </div>

      {/* similar */}
      <div style={{ height:18 }}></div>
      <SectionHead title="Схожі товари" />
      <HScroll>{S.inCat(p.cat).filter(x=>x.id!==p.id).concat(S.PRODUCTS).slice(0,6).map(x=> <ProductCard key={x.id} p={x} cat={S.catById(x.cat)} onOpen={()=>nav('product',{id:x.id})} onAdd={()=>addToCart(x)} />)}</HScroll>

      <div style={{ height:14 }}></div>
      <SectionHead title="Ви переглядали" />
      <HScroll>{S.popular().slice(0,4).map(x=> <ProductCard key={x.id} p={x} cat={S.catById(x.cat)} onOpen={()=>nav('product',{id:x.id})} onAdd={()=>addToCart(x)} />)}</HScroll>

      <div style={{ height:90 }}></div>
    </div>
  );
}

window.AlisaScreens = Object.assign(window.AlisaScreens||{}, { HomeScreen, CatalogScreen, ProductScreen, EmptyState });

})();
