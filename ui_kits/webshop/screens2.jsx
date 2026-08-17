/* IIFE */
;(function(){
/* Alisa webshop — screens 2: Cart, Checkout, Confirm, Stores, Sale, Link-in-bio, overlays. */
const { Button: B2, Badge: Bg2, Input: In2, Notice: No2, IconButton: Ib2 } = window.AlisaKidsStoreDesignSystem_194dcf;
const S2 = window.AlisaShop;
const U2 = window.AlisaUI;
const { Icon: Ic, Clickable: Clk, Photo: Ph, ProductCard: PC2, SectionHead: SH2, HScroll: HS2, PromoBanner: PB2, StoreCard, Breadcrumbs: BC2, Qty: Qty2, Price: Pr2, C500: c5, C100: c1, C600: c6 } = U2;

/* ---------------- CART ---------------- */
function CartScreen({ nav, cart, setQty, removeItem }) {
  const total = cart.reduce((s,i)=>s+i.p.price*i.qty,0);
  const old = cart.reduce((s,i)=>s+(i.p.oldPrice||i.p.price)*i.qty,0);
  const saved = old-total;
  if (cart.length===0) return (
    <div style={{ textAlign:'center', padding:'40px 20px' }}>
      <div style={{ width:96, height:96, margin:'0 auto 18px', borderRadius:'var(--radius-blob)', background:'var(--pink-100)', display:'flex', alignItems:'center', justifyContent:'center' }}><i data-lucide="shopping-bag" style={{width:46,height:46,color:'var(--pink-500)'}}></i></div>
      <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:24, color:'var(--ink-900)', margin:0 }}>Кошик порожній</h1>
      <p style={{ fontSize:14.5, color:'var(--ink-500)', fontWeight:600, margin:'8px 0 18px' }}>Додайте товари, які вам сподобались.</p>
      <B2 variant="primary" size="lg" onClick={()=>nav('catalog',{})}>Перейти до каталогу</B2>
    </div>
  );
  return (
    <div>
      <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:28, margin:'0 0 16px', color:'var(--ink-900)' }}>Кошик</h1>
      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        {cart.map((it,idx)=>(
          <div key={idx} style={{ display:'flex', gap:12, background:'#fff', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-lg)', padding:12, boxShadow:'var(--ring-soft)' }}>
            <div style={{ width:84, flex:'none' }}><Ph cat={S2.catById(it.p.cat)} src={it.p.img} alt={it.p.name} /></div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontWeight:800, fontSize:14.5, color:'var(--ink-900)', lineHeight:1.2 }}>{it.p.name}</div>
              <div style={{ fontSize:12, color:'var(--ink-400)', fontWeight:700, margin:'2px 0 8px' }}>Арт. {it.p.id}{it.size?` · розмір ${it.size}`:''}</div>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <Pr2 p={it.p} size={20} />
                <Ib2 aria-label="Прибрати" variant="ghost" size="sm" onClick={()=>removeItem(idx)}>{Ic('trash-2')}</Ib2>
              </div>
              <div style={{ marginTop:8 }}><Qty2 value={it.qty} onChange={(v)=>setQty(idx,v)} /></div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background:'#fff', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-lg)', padding:16, margin:'16px 0' }}>
        <Row k="Сума" v={`${old} ₴`} />
        {saved>0 && <Row k="Знижка" v={`−${saved} ₴`} accent />}
        <div style={{ height:1, background:'var(--ink-100)', margin:'10px 0' }}></div>
        <Row k="До сплати" v={`${total} ₴`} big />
      </div>

      <No2 tone="info" title="Наявність підтверджує магазин">Менеджер зв’яжеться з вами після замовлення, щоб підтвердити наявність та розмір.</No2>

      <div style={{ display:'flex', flexDirection:'column', gap:10, marginTop:16 }}>
        <B2 variant="primary" size="lg" fullWidth onClick={()=>nav('checkout')}>Оформити замовлення</B2>
        <B2 variant="ghost" fullWidth onClick={()=>nav('catalog',{})}>Продовжити покупки</B2>
      </div>
      <div style={{ height:20 }}></div>
    </div>
  );
}
function Row({ k, v, big, accent }) {
  return <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'3px 0' }}>
    <span style={{ fontSize:big?16:14, fontWeight:big?800:600, color:big?'var(--ink-900)':'var(--ink-500)' }}>{k}</span>
    <span style={{ fontFamily:big?'var(--font-display)':'inherit', fontSize:big?24:14.5, fontWeight:big?700:800, color: accent?'var(--pink-600)':'var(--ink-900)' }}>{v}</span>
  </div>;
}

/* ---------------- CHECKOUT ---------------- */
const PHONE_HINT = 'Наприклад: +380 98 822 29 64';

/* Ukrainian numbers → canonical 0XXXXXXXXX form ('' if unusable) */
function normalizePhone(v) {
  const d = String(v || '').replace(/\D/g, '');
  if (d.length === 12 && d.slice(0,3) === '380') return '0' + d.slice(3);
  if (d.length === 11 && d.slice(0,2) === '80')  return '0' + d.slice(2);
  if (d.length === 10 && d[0] === '0')           return d;
  if (d.length === 9)                            return '0' + d;   // typed without the leading 0
  return d;
}

const VALIDATORS = {
  name: (v) => {
    const t = String(v || '').trim();
    if (!t) return 'Вкажіть ім’я — менеджер знатиме, як до вас звертатися.';
    if (!/[А-Яа-яЇїІіЄєҐґA-Za-z]{2}/.test(t)) return 'Введіть коректне ім’я (мінімум 2 літери).';
    return null;
  },
  phone: (v) => {
    const t = String(v || '').trim();
    if (!t) return 'Вкажіть телефон — ми зателефонуємо, щоб підтвердити замовлення.';
    /* 0 + operator/area code 3–9 (UA codes are 03x–09x) + 8 digits */
    if (!/^0[3-9]\d{8}$/.test(normalizePhone(t))) return 'Перевірте номер телефону. ' + PHONE_HINT;
    return null;
  },
};

function CheckoutScreen({ nav, cart, placeOrder }) {
  const [step, setStep] = React.useState(0);
  const [delivery, setDelivery] = React.useState('np');
  const [store, setStore] = React.useState('A-2');
  const [pay, setPay] = React.useState('cod');
  const [form, setForm] = React.useState({ name:'', phone:'', city:'', comment:'' });
  const [errors, setErrors] = React.useState({});
  const total = cart.reduce((s,i)=>s+i.p.price*i.qty,0);
  const steps = ['Контакти','Доставка','Підтвердження'];

  /* revalidate a field only once it already showed an error → no nagging mid-typing */
  const setField = (k, v) => {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => (e[k] && VALIDATORS[k]) ? { ...e, [k]: VALIDATORS[k](v) } : e);
  };
  const blurField = (k) => {
    if (VALIDATORS[k]) setErrors(e => ({ ...e, [k]: VALIDATORS[k](form[k]) }));
  };
  const checkContacts = () => {
    const next = { name: VALIDATORS.name(form.name), phone: VALIDATORS.phone(form.phone) };
    setErrors(e => ({ ...e, ...next }));
    const bad = ['name','phone'].find(k => next[k]);
    if (bad) {
      const el = document.getElementById('co-' + bad);
      if (el) { el.focus(); if (el.scrollIntoView) el.scrollIntoView({ block:'center' }); }
      return false;
    }
    return true;
  };
  const submitOrder = () => {
    if (!checkContacts()) { setStep(0); return; }   // guard: never submit an invalid request
    placeOrder({ ...form, phone: '+38' + normalizePhone(form.phone), delivery,
      store: delivery === 'pickup' ? store : null, pay, total });
  };
  return (
    <div>
      <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:26, margin:'0 0 16px', color:'var(--ink-900)' }}>Оформлення</h1>
      {/* stepper */}
      <div style={{ display:'flex', alignItems:'center', marginBottom:20 }}>
        {steps.map((s,i)=>(
          <React.Fragment key={i}>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:5 }}>
              <div style={{ width:32, height:32, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:14, background: i<=step?'var(--pink-500)':'#fff', color:i<=step?'#fff':'var(--ink-400)', border:'2px solid '+(i<=step?'var(--pink-500)':'var(--ink-200)') }}>{i<step?'✓':i+1}</div>
              <span style={{ fontSize:11, fontWeight:700, color:i<=step?'var(--ink-900)':'var(--ink-400)' }}>{s}</span>
            </div>
            {i<steps.length-1 && <div style={{ flex:1, height:2, background:i<step?'var(--pink-500)':'var(--ink-200)', margin:'0 6px', marginBottom:18 }}></div>}
          </React.Fragment>
        ))}
      </div>

      {step===0 && (
        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          {(errors.name || errors.phone) && (
            <div role="alert" style={{ background:'var(--red-100)', color:'var(--red-500)', fontWeight:700, fontSize:13.5,
              borderRadius:'var(--radius-md)', padding:'10px 14px' }}>
              Перевірте, будь ласка, виділені поля.
            </div>
          )}
          <In2 id="co-name" name="name" label="Ім’я та прізвище" placeholder="Наприклад, Олена Коваль" required
            autoComplete="name" value={form.name} error={errors.name} aria-invalid={!!errors.name}
            onChange={e=>setField('name', e.target.value)} onBlur={()=>blurField('name')} />
          <In2 id="co-phone" name="phone" label="Телефон" type="tel" placeholder="+380 __ ___ __ __" required
            icon={Ic('phone')} autoComplete="tel" inputMode="tel" value={form.phone}
            error={errors.phone} hint={PHONE_HINT} aria-invalid={!!errors.phone}
            onChange={e=>setField('phone', e.target.value)} onBlur={()=>blurField('phone')} />
          <In2 id="co-city" name="city" label="Місто" placeholder="Кам’янське / Дніпро…" icon={Ic('map-pin')}
            autoComplete="address-level2" hint="Необов’язково — уточнимо під час дзвінка."
            value={form.city} onChange={e=>setField('city', e.target.value)} />
          <B2 variant="primary" size="lg" fullWidth onClick={()=>{ if(checkContacts()) setStep(1); }}>Далі</B2>
        </div>
      )}

      {step===1 && (
        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          <div>
            <div style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)', marginBottom:8 }}>Спосіб доставки</div>
            {[['np','Нова пошта','відділення / поштомат · 1–3 дні'],['pickup','Самовивіз із магазину','безкоштовно · А-1 · А-2 · А-3'],['courier','Кур’єр по місту','Кам’янське · Дніпро']].map(o=>(
              <RadioRow key={o[0]} active={delivery===o[0]} onClick={()=>setDelivery(o[0])} title={o[1]} sub={o[2]} />
            ))}
          </div>
          {delivery==='pickup' && (
            <div>
              <div style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)', marginBottom:8 }}>Який магазин?</div>
              <div style={{ display:'flex', gap:8 }}>
                {S2.STORES.map(s=> <button key={s.id} onClick={()=>setStore(s.id)} style={{ flex:1, padding:'10px 0', borderRadius:'var(--radius-md)', fontWeight:800, fontSize:14, cursor:'pointer', border:'2px solid '+(store===s.id?'var(--pink-500)':'var(--ink-200)'), background:store===s.id?'var(--pink-100)':'#fff', color:store===s.id?'var(--pink-600)':'var(--ink-700)' }}>{s.id}</button>)}
              </div>
            </div>
          )}
          <div>
            <div style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)', marginBottom:8 }}>Оплата</div>
            {[['cod','При отриманні','готівка або картка'],['card','Картка онлайн','скоро · поки недоступно']].map(o=>(
              <RadioRow key={o[0]} active={pay===o[0]} onClick={()=>o[0]==='cod'&&setPay(o[0])} title={o[1]} sub={o[2]} disabled={o[0]==='card'} />
            ))}
          </div>
          <In2 name="comment" label="Коментар до замовлення" placeholder="Напр.: зателефонуйте після 18:00"
            value={form.comment} onChange={e=>setField('comment', e.target.value)} />
          <div style={{ display:'flex', gap:10 }}>
            <B2 variant="ghost" onClick={()=>setStep(0)}>Назад</B2>
            <B2 variant="primary" size="lg" fullWidth onClick={()=>setStep(2)}>Далі</B2>
          </div>
        </div>
      )}

      {step===2 && (
        <div>
          <div style={{ background:'#fff', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-lg)', padding:16, marginBottom:14 }}>
            <div style={{ fontWeight:800, fontSize:15, color:'var(--ink-900)', marginBottom:10 }}>Ваше замовлення</div>
            {cart.map((it,i)=>(
              <div key={i} style={{ display:'flex', justifyContent:'space-between', fontSize:13.5, padding:'5px 0', color:'var(--ink-700)' }}>
                <span style={{fontWeight:600}}>{it.p.name} {it.size?`(${it.size})`:''} × {it.qty}</span>
                <span style={{fontWeight:800, color:'var(--ink-900)', whiteSpace:'nowrap'}}>{it.p.price*it.qty} ₴</span>
              </div>
            ))}
            <div style={{ height:1, background:'var(--ink-100)', margin:'10px 0' }}></div>
            <Row k="До сплати" v={`${total} ₴`} big />
            <div style={{ fontSize:13, color:'var(--ink-500)', fontWeight:600, marginTop:8 }}>
              {delivery==='pickup'?`Самовивіз · магазин ${store}`:delivery==='np'?'Нова пошта':'Кур’єр по місту'} · {pay==='cod'?'Оплата при отриманні':'Картка онлайн'}
            </div>
            <div style={{ borderTop:'1px solid var(--ink-100)', marginTop:10, paddingTop:10, fontSize:13.5, color:'var(--ink-700)', fontWeight:600 }}>
              <div><b style={{color:'var(--ink-900)'}}>{form.name}</b> · {form.phone}{form.city?` · ${form.city}`:''}</div>
              <Clk onClick={()=>setStep(0)} style={{ color:'var(--pink-600)', fontWeight:700, fontSize:13, textDecoration:'underline' }}>Змінити контакти</Clk>
            </div>
          </div>
          <No2 tone="info" title="Підтвердження від магазину">Це попереднє замовлення. Менеджер зв’яжеться з вами найближчим часом, щоб підтвердити наявність і деталі.</No2>
          <div style={{ display:'flex', gap:10, marginTop:14 }}>
            <B2 variant="ghost" onClick={()=>setStep(1)}>Назад</B2>
            <B2 variant="primary" size="lg" fullWidth onClick={submitOrder}>Підтвердити замовлення</B2>
          </div>
        </div>
      )}
      <div style={{ height:20 }}></div>
    </div>
  );
}
function RadioRow({ active, onClick, title, sub, disabled }) {
  return (
    <div onClick={disabled?null:onClick} style={{ opacity:disabled?.55:1, display:'flex', alignItems:'center', gap:12, padding:'13px 14px', borderRadius:'var(--radius-md)', border:'2px solid '+(active?'var(--pink-500)':'var(--ink-200)'), background:active?'var(--pink-100)':'#fff', cursor:disabled?'not-allowed':'pointer', marginBottom:8 }}>
      <span style={{ width:22, height:22, borderRadius:'50%', flex:'none', border:'2px solid '+(active?'var(--pink-500)':'var(--ink-300)'), display:'flex', alignItems:'center', justifyContent:'center' }}>{active && <span style={{width:11,height:11,borderRadius:'50%',background:'var(--pink-500)'}}></span>}</span>
      <div><div style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)' }}>{title}</div><div style={{ fontSize:12.5, color:'var(--ink-500)', fontWeight:600 }}>{sub}</div></div>
    </div>
  );
}

/* ---------------- CONFIRMATION ---------------- */
function ConfirmScreen({ nav }) {
  return (
    <div style={{ textAlign:'center', padding:'30px 16px' }}>
      <div style={{ width:104, height:104, margin:'0 auto 20px', borderRadius:'var(--radius-blob)', background:'var(--green-100)', display:'flex', alignItems:'center', justifyContent:'center' }}><i data-lucide="check" style={{width:54,height:54,color:'var(--green-600)',strokeWidth:3}}></i></div>
      <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:28, color:'var(--ink-900)', margin:0 }}>Замовлення прийнято!</h1>
      <p style={{ fontSize:15, color:'var(--ink-600)', fontWeight:600, margin:'10px auto 4px', maxWidth:300, lineHeight:1.5 }}>Дякуємо! Номер замовлення <b style={{color:'var(--ink-900)'}}>#10472</b>.</p>
      <p style={{ fontSize:14, color:'var(--ink-500)', fontWeight:600, margin:'0 auto 22px', maxWidth:300, lineHeight:1.5 }}>Менеджер зателефонує найближчим часом, щоб підтвердити наявність і деталі доставки.</p>
      <div style={{ display:'flex', flexDirection:'column', gap:10, maxWidth:320, margin:'0 auto' }}>
        <B2 variant="secondary" fullWidth icon={Ic('message-circle')} onClick={()=>window.open('https://www.instagram.com/alisa.kids.shop/','_blank')}>Написати нам у Direct</B2>
        <B2 variant="primary" fullWidth onClick={()=>nav('home')}>На головну</B2>
      </div>
    </div>
  );
}

/* ---------------- STORES ---------------- */
function StoresScreen({ nav }) {
  return (
    <div>
      <BC2 items={[{label:'Головна',onClick:()=>nav('home')},{label:'Магазини'}]} />
      <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:28, margin:'0 0 4px', color:'var(--ink-900)' }}>Наші магазини</h1>
      <p style={{ fontSize:14.5, color:'var(--ink-500)', fontWeight:600, margin:'0 0 18px' }}>Завітайте до нас — приміряйте та заберіть замовлення без доставки.</p>
      <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
        {S2.STORES.map(s=> <StoreCard key={s.id} s={s} />)}
      </div>
      <div style={{ height:18 }}></div>
      <div style={{ background:'var(--pink-500)', color:'#fff', borderRadius:'var(--radius-lg)', padding:20, display:'flex', gap:16, alignItems:'center' }}>
        <div style={{ width:74, height:74, flex:'none', background:'#fff', borderRadius:'var(--radius-md)', display:'flex', alignItems:'center', justifyContent:'center' }}><i data-lucide="qr-code" style={{width:48,height:48,color:'var(--ink-900)'}}></i></div>
        <div>
          <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:19 }}>Скануйте у магазині</div>
          <div style={{ fontWeight:600, fontSize:13.5, opacity:.95 }}>Дивіться новинки та акції онлайн прямо з полиці.</div>
        </div>
      </div>
      <div style={{ height:20 }}></div>
    </div>
  );
}

/* ---------------- SALE ---------------- */
function SaleScreen({ nav, addToCart }) {
  return (
    <div>
      <div style={{ background:'var(--pink-600)', color:'#fff', borderRadius:'var(--radius-xl)', padding:'24px 22px', position:'relative', overflow:'hidden', marginBottom:18 }}>
        <div style={{ position:'absolute', width:180, height:180, borderRadius:'var(--radius-blob)', background:'rgba(255,255,255,.14)', right:-50, bottom:-60 }}></div>
        <Bg2 tone="warning" size="lg">Розпродаж</Bg2>
        <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:32, margin:'12px 0 6px', letterSpacing:'-0.02em', position:'relative' }}>Знижки до −50%</h1>
        <p style={{ fontSize:14.5, fontWeight:600, opacity:.95, margin:0, maxWidth:260, position:'relative' }}>Звільняємо місце для нового сезону. Гарні речі за приємними цінами.</p>
      </div>

      <SH2 title="За ціною" />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, marginBottom:22 }}>
        {S2.BUCKETS.map(bk=>(
          <Clk key={bk.uk} onClick={()=>nav('catalog',{cat:'sale'})} style={{ background:c1[bk.color], borderRadius:'var(--radius-lg)', padding:'18px 10px', textAlign:'center' }}>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:18, color:c6[bk.color] }}>{bk.uk}</div>
          </Clk>
        ))}
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:22 }}>
        <PB2 color="yellow" kicker="Встигніть" title="Останні розміри" sub="Що залишилось — за зниженою ціною" cta="Дивитися" onClick={()=>nav('catalog',{cat:'sale'})} />
        <PB2 color="blue" kicker="Сезон" title="Зимовий розпродаж" sub="Куртки, комбінезони, взуття" cta="Дивитися" onClick={()=>nav('catalog',{cat:'clothing'})} />
      </div>

      <SH2 title="Товари зі знижкою" />
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
        {S2.onSale().map(p=> <PC2 key={p.id} p={p} cat={S2.catById(p.cat)} onOpen={()=>nav('product',{id:p.id})} onAdd={()=>addToCart(p)} />)}
      </div>
      <div style={{ height:20 }}></div>
    </div>
  );
}

/* ---------------- LINK-IN-BIO ---------------- */
function LinkBioScreen({ nav }) {
  const blocks = [
    ['Новинки','sparkles','blue',()=>nav('catalog',{filter:'new'})],
    ['Акції','badge-percent','pinkDeep',()=>nav('sale')],
    ['Останні розміри','timer','yellow',()=>nav('catalog',{cat:'sale'})],
    ['Іграшки','blocks','green',()=>nav('catalog',{cat:'toys'})],
  ];
  const IG = 'https://www.instagram.com/alisa.kids.shop/';
  const contacts = [['Instagram Direct','instagram',IG],['Viber','phone',null],['Telegram','send',null],['Каталог на сайті','globe',null]];
  return (
    <div style={{ textAlign:'center' }}>
      <img src="../../assets/logo-primary.svg" alt="Аліса" style={{ height:54, margin:'8px 0 6px' }} />
      <div style={{ fontWeight:700, fontSize:15, color:'var(--ink-500)' }}>Дитячий магазин «Аліса»</div>
      <div style={{ fontSize:13, color:'var(--ink-400)', fontWeight:600, margin:'2px 0 18px' }}>Кам’янське · Дніпро · 3 магазини</div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:16 }}>
        {blocks.map(b=>(
          <Clk key={b[0]} onClick={b[3]} style={{ background:c5[b[2]], color:b[2]==='yellow'?'var(--ink-900)':'#fff', borderRadius:'var(--radius-lg)', padding:'20px 12px', display:'flex', flexDirection:'column', alignItems:'center', gap:8, boxShadow:'var(--shadow-sm)', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', width:70, height:70, borderRadius:'var(--radius-blob)', background:'rgba(255,255,255,.18)', right:-16, bottom:-22 }}></div>
            <i data-lucide={b[1]} style={{ width:30, height:30, position:'relative' }} aria-hidden="true"></i>
            <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:16, position:'relative' }}>{b[0]}</span>
          </Clk>
        ))}
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:18 }}>
        {contacts.map(c=>(
          <button key={c[0]} onClick={()=>{ if(c[2]) window.open(c[2],'_blank'); else if(c[0].includes('Каталог')) nav('home'); }} style={{ display:'flex', alignItems:'center', gap:12, width:'100%', background:'#fff', border:'2px solid var(--ink-200)', borderRadius:'var(--radius-pill)', padding:'13px 18px', fontFamily:'var(--font-display)', fontWeight:600, fontSize:15, color:'var(--ink-800)', cursor:'pointer' }}>
            <i data-lucide={c[1]} style={{ width:20, height:20, color:'var(--pink-500)' }}></i>{c[0]}
            <i data-lucide="chevron-right" style={{ width:18, height:18, marginLeft:'auto', color:'var(--ink-300)' }}></i>
          </button>
        ))}
      </div>

      <div style={{ background:'var(--cream)', border:'1px solid var(--ink-100)', borderRadius:'var(--radius-lg)', padding:18, display:'flex', gap:14, alignItems:'center' }}>
        <div style={{ width:70, height:70, flex:'none', background:'#fff', borderRadius:'var(--radius-md)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'var(--ring-soft)' }}><i data-lucide="qr-code" style={{width:46,height:46,color:'var(--ink-900)'}}></i></div>
        <div style={{ textAlign:'left' }}>
          <div style={{ fontWeight:800, fontSize:14, color:'var(--ink-900)' }}>QR на товари та контакти</div>
          <div style={{ fontSize:12.5, color:'var(--ink-500)', fontWeight:600 }}>Роздрукуйте для вітрини магазину.</div>
        </div>
      </div>
      <div style={{ height:20 }}></div>
    </div>
  );
}

/* ---------------- SIZE GUIDE ---------------- */
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

window.AlisaScreens = Object.assign(window.AlisaScreens||{}, { CartScreen, CheckoutScreen, ConfirmScreen, StoresScreen, SaleScreen, LinkBioScreen, SizeGuide });

})();
