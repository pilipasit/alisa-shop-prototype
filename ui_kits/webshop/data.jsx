/* IIFE */
;(function(){
/* Alisa webshop — sample data, categories, stores. Shared via window.AlisaShop. */

let CATS = [
  { id: 'clothing', uk: 'Одяг',      color: 'blue',   icon: 'shirt',      desc: 'Зручний та якісний одяг для дітей від народження до 12 років.' },
  { id: 'shoes',    uk: 'Взуття',    color: 'pink',   icon: 'footprints', desc: 'Взуття на кожен сезон — від першого кроку до школи.' },
  { id: 'toys',     uk: 'Іграшки',   color: 'green',  icon: 'blocks',     desc: 'Розвивальні та улюблені іграшки для будь-якого віку.' },
  { id: 'seasonal', uk: 'Сезонне',   color: 'yellow', icon: 'sun',        desc: 'Все за погодою — від літніх панам до зимових комбінезонів.' },
  { id: 'baby',     uk: 'Малюкам',   color: 'pink',   icon: 'baby',       desc: 'Найнеобхідніше для малюків 0–2 роки.' },
  { id: 'school',   uk: 'Школа',     color: 'blue',   icon: 'backpack',   desc: 'Все для школи та садочка — до 1 вересня.' },
  { id: 'sale',     uk: 'Розпродаж', color: 'pinkDeep', icon: 'badge-percent', desc: 'Знижки на сезонні товари та останні розміри.' },
];

/* Where checkout submissions go. Empty = DEMO MODE: the flow still works end-to-end for
   testing, but nothing is sent and the confirmation says so.
   After deploying the Worker, put its URL here, e.g.
     'https://alisa-orders.<your-subdomain>.workers.dev/order'
   and add that origin to connect-src in _headers AND the <meta> CSP. */
const ORDER_ENDPOINT = '';

const PHONE = '+380 98 822 29 64';
/* opening hours are not known yet (STORES.md) — never show invented ones */
const HOURS_TBD = 'Години роботи уточнюйте за телефоном';
const STORES = [
  { id: 'A-1', name: 'Аліса А-1', city: 'Кам’янське', area: 'Лівий берег · ТЦ «Svitlo» · зуп. «Сонячний»', addr: 'бул. Будівельників, 1Б–1Е', hours: null, phone: PHONE },
  { id: 'A-2', name: 'Аліса А-2', city: 'Кам’янське', area: 'ТРЦ «ЦУМ»', addr: 'пр. Тараса Шевченка, 9', hours: null, phone: '+380 68 457 63 87' },
  { id: 'A-3', name: 'Аліса А-3', city: 'Дніпро', area: 'навпроти ТОЦ «Славутич»', addr: 'пр. Олександра Поля, 137', hours: null, phone: '+380 68 634 42 50' },
];

// availability helper: 'in' | 'last' | 'out'
const P = (id, name, cat, price, oldPrice, ages, badge, av, hit, img) =>
  ({ id, name, cat, price, oldPrice, ages, badge, av, hit, img });

const IMG = (f) => '../../assets/products/' + f;

let PRODUCTS = [
  P('104223', 'Комбінезон зимовий «Сніжинка»', 'clothing', 649, 999, '80–110', 'sale',   { 'A-1':'in','A-2':'in','A-3':'last' }, true,  IMG('snowsuit.jpg')),
  P('118540', 'Шапка з помпоном',              'clothing', 149, 229, '1–4 р',  'sale',   { 'A-1':'out','A-2':'in','A-3':'in' }, false, IMG('pompom-hat.jpg')),
  P('401290', 'Сукня святкова «Зірочка»',      'clothing', 549, null,'92–122', 'new',    { 'A-1':'in','A-2':'in','A-3':'in' }, true,  IMG('dress-star.jpg')),
  P('132201', 'Світшот з начосом',             'clothing', 399, null,'98–128', null,     { 'A-1':'in','A-2':'last','A-3':'in' }, false, IMG('sweatshirt.jpg')),
  P('309845', 'Кросівки дитячі «Біг»',         'shoes',    449, 699, '27–33',  'sale',   { 'A-1':'last','A-2':'in','A-3':'in' }, true,  IMG('sneakers.jpg')),
  P('305112', 'Гумові чоботи',                 'shoes',    299, null,'24–30',  null,     { 'A-1':'in','A-2':'in','A-3':'out' }, false, IMG('rain-boots.jpg')),
  P('311777', 'Черевики демісезонні',          'shoes',    699, 899, '28–34',  'last',   { 'A-1':'out','A-2':'last','A-3':'in' }, false, IMG('demi-boots.jpg')),
  P('220871', 'Набір кубиків «Будуємо разом»', 'toys',     199, null,'1–5 р',  'new',    { 'A-1':'in','A-2':'in','A-3':'in' }, true,  IMG('blocks.jpg')),
  P('221054', 'Пазл 100 деталей',              'toys',     159, 219, '4–8 р',  'sale',   { 'A-1':'in','A-2':'in','A-3':'in' }, false, IMG('puzzle.jpg')),
  P('223410', 'Плюшевий ведмедик',             'toys',     349, null,'0+',     'hit',    { 'A-1':'in','A-2':'last','A-3':'in' }, true,  IMG('teddy.jpg')),
  P('224901', 'Конструктор «Місто»',           'toys',     529, 749, '5–10 р', 'sale',   { 'A-1':'last','A-2':'in','A-3':'in' }, false, IMG('constructor.jpg')),
  P('601233', 'Панама літня',                  'seasonal', 129, null,'1–6 р',  'new',    { 'A-1':'in','A-2':'in','A-3':'in' }, false, IMG('panama.jpg')),
  P('602810', 'Купальник дитячий',             'seasonal', 219, 299, '92–122', 'sale',   { 'A-1':'in','A-2':'in','A-3':'last' }, false, IMG('swimsuit.jpg')),
  P('502118', 'Рюкзак шкільний «Старт»',       'school',   599, 849, 'one',    'sale',   { 'A-1':'in','A-2':'in','A-3':'in' }, true,  IMG('backpack.jpg')),
  P('503277', 'Пенал на блискавці',            'school',    99, null,'one',    'new',    { 'A-1':'in','A-2':'in','A-3':'in' }, false, IMG('pencil-case.jpg')),
  P('701055', 'Бодік для немовлят (3 шт)',     'baby',     279, 359, '56–74',  'sale',   { 'A-1':'in','A-2':'in','A-3':'in' }, true,  IMG('baby-body.jpg')),
  // --- real products (photos in assets/products/) ---
  P('801001', 'Надувний круг для плавання',     'seasonal', 199, 279, '3–8 р',  'new',  { 'A-1':'in','A-2':'in','A-3':'last' }, true,  IMG('swim-ring.jpg')),
  P('801002', 'Надувний човник «Поліція»',      'seasonal', 349, 449, '1–3 р',  'sale', { 'A-1':'in','A-2':'last','A-3':'in' }, true,  IMG('police-boat.jpg')),
  P('802001', 'Батут із захисною сіткою, 140 см','toys',    2499,2999, '3–10 р', 'hit',  { 'A-1':'in','A-2':'out','A-3':'in' },  true,  IMG('trampoline.jpg')),
  P('802002', 'Дитяча гірка Doloni',            'toys',     1799, null,'1–5 р',  null,   { 'A-1':'last','A-2':'in','A-3':'in' }, false, IMG('slide-doloni.jpg')),
  P('401501', 'Костюм «Зебра»: футболка + спідниця','clothing',499,649,'98–128','sale', { 'A-1':'in','A-2':'in','A-3':'in' },   true,  IMG('zebra-set.jpg')),
];

/* --- filterable attributes: age [minYears,maxYears], g = gender (g/b/u), season --- */
const ATTRS = {
  '104223': { age:[1,5],  g:'u', season:'winter' },  '118540': { age:[1,4],  g:'u', season:'winter' },
  '401290': { age:[2,7],  g:'g', season:'all'    },  '132201': { age:[3,8],  g:'u', season:'demi'   },
  '309845': { age:[4,8],  g:'u', season:'demi'   },  '305112': { age:[2,6],  g:'u', season:'demi'   },
  '311777': { age:[4,9],  g:'u', season:'demi'   },  '220871': { age:[1,5],  g:'u', season:'all'    },
  '221054': { age:[4,8],  g:'u', season:'all'    },  '223410': { age:[0,12], g:'u', season:'all'    },
  '224901': { age:[5,10], g:'u', season:'all'    },  '601233': { age:[1,6],  g:'u', season:'summer' },
  '602810': { age:[2,7],  g:'g', season:'summer' },  '502118': { age:[6,12], g:'u', season:'all'    },
  '503277': { age:[6,12], g:'u', season:'all'    },  '701055': { age:[0,1],  g:'u', season:'all'    },
  '801001': { age:[3,8],  g:'u', season:'summer' },  '801002': { age:[1,3],  g:'b', season:'summer' },
  '802001': { age:[3,10], g:'u', season:'summer' },  '802002': { age:[1,5],  g:'u', season:'all'    },
  '401501': { age:[3,8],  g:'g', season:'summer' },
};
PRODUCTS.forEach(p => Object.assign(p, ATTRS[p.id] || { age:[0,12], g:'u', season:'all' }, { rank: p.hit ? 0 : 1, art: p.id }));

/* ─────────────────────────────────────────────────────────────────────────────
   REAL CATALOG from Torgsoft — written by automation/shop_feed.py (see SHOP-FEED.md).
   feed/feed.local.js  → window.ALISA_FEED         full feed, local only (never commit/deploy)
   feed/sample.js      → window.ALISA_FEED_SAMPLE  ≤ 30 products
   Both are plain <script> files, so no fetch() and no server API is needed.
   ?data=demo shows the old demo products, ?data=sample forces the sample.
   ───────────────────────────────────────────────────────────────────────────── */
/* CURATED SHOWCASE — showcase/showcase.js → window.ALISA_SHOWCASE (showcase/build_showcase.py in alisa-shop-docs).
   36 real best-selling models with shop-friendly names, descriptions, collections and illustrations.
   .overlay is applied to whatever catalog is shown; .feed is a small public-safe catalog of just these
   models (stock capped, no barcodes) used where the full feed is not loaded, e.g. on GitHub Pages.
   ?data=showcase forces it; ?data=demo still shows the old invented demo products. */
const SHOWCASE = window.ALISA_SHOWCASE || null;
const DATA_PARAM = (/[?&]data=(demo|sample|full|showcase)\b/.exec(location.search) || [])[1] || '';
const SHOWCASE_FEED = SHOWCASE && SHOWCASE.feed || null;
const FEED = DATA_PARAM === 'demo' ? null
  : DATA_PARAM === 'sample' ? (window.ALISA_FEED_SAMPLE || null)
  : DATA_PARAM === 'showcase' ? SHOWCASE_FEED
  : (window.ALISA_FEED || SHOWCASE_FEED || window.ALISA_FEED_SAMPLE || null);

/* look of the top-level groups of the proposed tree (CATALOG-AUDIT.md); unknown names get the default */
const GROUP_LOOK = {
  'Одяг':                { color:'blue',     icon:'shirt',        desc:'Одяг для дітей від народження до підлітків.' },
  'Взуття':              { color:'pink',     icon:'footprints',   desc:'Взуття на кожен сезон — від першого кроку до школи.' },
  'Аксесуари':           { color:'yellow',   icon:'glasses',      desc:'Шапки, панами, рукавички, прикраси та все для волосся.' },
  'Іграшки':             { color:'green',    icon:'blocks',       desc:'Розвивальні та улюблені іграшки для будь-якого віку.' },
  'Для малюків':         { color:'pink',     icon:'baby',         desc:'Годування, купання, ліжечка та візочки.' },
  'Дитячий транспорт':   { color:'blue',     icon:'bike',         desc:'Велосипеди, самокати та каталки.' },
  'Школа та канцелярія': { color:'blue',     icon:'backpack',     desc:'Рюкзаки та канцелярія для школи й садочка.' },
  'Сезонні товари':      { color:'yellow',   icon:'snowflake',    desc:'Санки, ковзани, новорічне та карнавальне.' },
  'Подарунки та свята':  { color:'pinkDeep', icon:'gift',         desc:'Подарунки, кульки та все для свята.' },
  'Книги':               { color:'green',    icon:'book-open',    desc:'Книжки для малюків і школярів.' },
  'Різне':               { color:'gray',     icon:'battery',      desc:'Батарейки та дрібниці.' },
  'Інше':                { color:'gray',     icon:'package',      desc:'Товари, яким ще не призначено категорію.' },
};
/* demo ids used by banners/links in the screens -> groups of the real tree */
const CAT_ALIAS = {};

let SOURCE = { kind: 'demo' };
if (FEED) {
  const dt = new Date(FEED.data_as_of);
  SOURCE = { kind: FEED.showcase ? 'showcase' : FEED.sample ? 'sample' : 'feed', draft: !!FEED.categories_draft, notes: FEED.notes,
    capped: !!FEED.stock_capped,
    dateOnly: isNaN(dt) ? FEED.data_as_of : dt.toLocaleDateString('uk-UA', { day:'numeric', month:'long' }),
    asOf: isNaN(dt) ? FEED.data_as_of : dt.toLocaleDateString('uk-UA', { day:'numeric', month:'long' }) + ', ' + dt.toLocaleTimeString('uk-UA', { hour:'2-digit', minute:'2-digit' }),
    total: (FEED.stats && FEED.stats.products) || FEED.products.length };
  const look = (n) => GROUP_LOOK[n] || { color:'gray', icon:'package', desc:'' };
  CATS = FEED.categories.map(c => ({ id:'g'+c.id, uk:c.name, ...look(c.name), count:c.count,
    subs: c.children.map(ch => ({ id: ch.id, uk: ch.name, count: ch.count })) }));
  const byName = (n) => (CATS.find(c => c.uk === n) || {}).id;
  Object.assign(CAT_ALIAS, { clothing: byName('Одяг'), shoes: byName('Взуття'), toys: byName('Іграшки'),
    baby: byName('Для малюків'), school: byName('Школа та канцелярія'), seasonal: byName('Сезонні товари') });

  const avOf = (n) => n <= 0 ? 'out' : n === 1 ? 'last' : 'in';
  const sizeLabel = (sz) => !sz.length ? 'one' : sz.length === 1 ? sz[0] : sz[0] + ' … ' + sz[sz.length-1];
  PRODUCTS = FEED.products.map(p => {
    const grp = 'g' + (p.category || '99.99').split('.')[0];
    const av = {}; STORES.forEach(s => { av[s.id] = avOf((p.stock || {})[s.id] || 0); });
    return {
      id: p.id, art: p.articul || p.variants[0].id, name: p.name, nameTorgsoft: p.name_torgsoft,
      cat: grp, sub: p.category, group: p.group, subgroup: p.subgroup, catStatus: p.category_status,
      price: p.price, priceMax: p.price_max, oldPrice: null,
      ages: sizeLabel(p.sizes || []), sizes: p.sizes || [],
      badge: p.new ? 'new' : null, av, hit: !!p.popularity && p.popularity <= 24, rank: p.popularity || 1e9,
      img: (p.images && p.images[0]) || null, description: p.description,
      age: p.age || null, height: p.height || null, g: p.gender || null, season: p.season || null,
      brand: p.brand, color: p.color, stock: p.stock, total: p.total, variants: p.variants, real: true,
    };
  });
}

/* showcase overlay: nicer name, description, collections and the illustration of each picked model.
   Picked models also go to the top of "popular" (rank 0..n in the curated order). */
const COLLECTIONS = (FEED && SHOWCASE) ? SHOWCASE.collections.map(c => ({ ...c })) : [];
if (FEED && SHOWCASE) {
  const order = SHOWCASE.order || [];
  PRODUCTS.forEach(p => {
    const o = SHOWCASE.overlay[p.id];
    if (!o) return;
    Object.assign(p, { name: o.name, description: o.description || p.description, cols: o.collections || [],
      img: o.img || p.img, imgKind: o.img_kind || null, imgNote: o.img_note || null,
      featured: true, hit: true, rank: order.indexOf(p.id) - 1000 });
  });
  /* ids of models that sold out since the showcase was built simply drop out */
  COLLECTIONS.forEach(c => { c.ids = c.ids.filter(id => PRODUCTS.some(p => p.id === id)); });
}

/* the cart line for a product + size: real products carry the Torgsoft code of that size and its price */
function cartLine(p, size) {
  if (!p.variants) return { p, size };
  const v = size ? p.variants.find(x => x.size === size) : (p.variants.length === 1 ? p.variants[0] : null);
  if (!v) return { p, size };
  return { p: { ...p, id: v.id, modelId: p.id, art: p.art, price: v.price, priceMax: v.price, total: v.total, stock: v.stock }, size: v.size };
}
const needsSize = (p) => !!(p.variants && p.variants.length > 1);

const AGE_BUCKETS = { '0–2':[0,2], '3–5':[3,5], '6–9':[6,9], '10–12':[10,12] };
const SEASON_MAP  = { 'Літо':'summer', 'Зима':'winter', 'Демісезон':'demi' };
const GENDER_MAP  = { 'Дівчатам':'g', 'Хлопцям':'b', 'Унісекс':'u' };

/* cm height range — only clothing-style products carry one, so a size filter excludes toys */
const heightRange = (p) => {
  if (p.real) return p.height;
  if (['clothing','seasonal','baby'].indexOf(p.cat) < 0) return null;
  const m = /^(\d{2,3})–(\d{2,3})$/.exec(p.ages || '');
  return m ? [ +m[1], +m[2] ] : null;
};
/* real goods: every size in stock is the single last unit; demo: the static labels */
const hasLast = (p) => p.real ? p.variants.every(v => v.total <= 1)
  : p.badge === 'last' || Object.keys(p.av).some(k => p.av[k] === 'last');

/* single source of truth for filtering — shared by mobile + desktop */
function applyFilters(list, f) {
  if (!f) return list;
  const fcat = CAT_ALIAS[f.cat] || f.cat;
  return list.filter(p => {
    if (fcat === 'sale') { if (!p.oldPrice) return false; }
    else if (fcat && p.cat !== fcat) return false;
    if (f.sub && p.sub !== f.sub) return false;
    if (f.col && !(p.cols || []).includes(f.col)) return false;
    if (f.filter === 'new' && p.badge !== 'new') return false;
    /* real goods: age/height only where the size says so; unknown never matches an age or size filter */
    if (f.age)  { const b = AGE_BUCKETS[f.age]; if (!b || !p.age || p.age[1] < b[0] || p.age[0] > b[1]) return false; }
    if (f.size) { const r = heightRange(p), s = +f.size; if (!r || s < r[0] || s > r[1]) return false;
      if (p.variants && !p.variants.some(v => v.height && s >= v.height[0] && s <= v.height[1])) return false; }
    if (f.gender) { const g = GENDER_MAP[f.gender];   /* null = not stated in the name: shown for girls and boys */
      if (g === 'u' ? p.g !== 'u' : (p.g && p.g !== g && p.g !== 'u')) return false; }
    /* real goods: only a season stated in the name or the shoe subgroup counts */
    if (f.season) { const s = SEASON_MAP[f.season]; if (p.real ? p.season !== s : (p.season !== 'all' && p.season !== s)) return false; }
    if (f.store && (p.av[f.store] || 'out') === 'out') return false;
    if (f.sale && !p.oldPrice) return false;
    if (f.new  && p.badge !== 'new') return false;
    if (f.last && !hasLast(p)) return false;
    return true;
  });
}

/* search: every word must be found in the name, article or code; apostrophes and і/ї/й-like typing are normalised */
const norm = (t) => String(t || '').toLowerCase().replace(/[’'`ʼ]/g, '').replace(/ё/g, 'е');
function search(q, limit = 40) {
  const words = norm(q).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  return PRODUCTS.filter(p => { const hay = norm(p.name + ' ' + (p.art || '') + ' ' + p.id + ' ' + (p.brand || '') + ' ' + (p.subgroup || ''));
    return words.every(w => hay.includes(w)); }).sort((a, b) => a.rank - b.rank).slice(0, limit);
}

/* removable labels for the filters that aren't already shown in the page title */
function filterChips(f) {
  if (!f) return [];
  const out = [];
  if (f.age)    out.push({ k:'age',    label: f.age + ' р' });
  if (f.size)   out.push({ k:'size',   label: 'зріст ' + f.size });
  if (f.gender) out.push({ k:'gender', label: f.gender });
  if (f.season) out.push({ k:'season', label: f.season });
  if (f.store)  out.push({ k:'store',  label: 'є у ' + f.store });
  if (f.sale)   out.push({ k:'sale',   label: 'зі знижкою' });
  if (f.new)    out.push({ k:'new',    label: 'новинки' });
  if (f.last)   out.push({ k:'last',   label: 'останні розміри' });
  return out;
}

/* ─────────────────────────────────────────────────────────────────────────────
   DEMO REVIEWS — placeholder content so the layout can be evaluated.
   ⚠️ THESE ARE NOT REAL CUSTOMER REVIEWS. They are written examples and are
   labelled as such in the UI ("Приклад"). Replace with genuine reviews collected
   from real customers before launch — publishing invented reviews as real is
   deceptive and illegal under unfair-competition rules.
   ───────────────────────────────────────────────────────────────────────────── */
const REVIEWS_ARE_DEMO = true;
const REVIEWS = [
  { id:'r1', product:'104223', author:'Олена',  city:'Кам’янське', rating:5, date:'2026-01-14', text:'Комбінезон теплий, дитина не змерзла навіть у мороз. Розмір відповідає — брали 98 на 3 роки.' },
  { id:'r2', product:'104223', author:'Ірина',  city:'Дніпро',     rating:4, date:'2026-01-28', text:'Якість хороша, але блискавка спочатку тугувата. Загалом задоволені.' },
  { id:'r3', product:'309845', author:'Марина', city:'Кам’янське', rating:5, date:'2026-02-02', text:'Кросівки зручні, син носить щодня в садок. Не тиснуть, легко взуваються.' },
  { id:'r4', product:'223410', author:'Наталя', city:'Дніпро',     rating:5, date:'2026-02-11', text:'Ведмедик м’якенький, донька спить з ним. Шви акуратні, нічого не сиплеться.' },
  { id:'r5', product:'502118', author:'Ольга',  city:'Кам’янське', rating:5, date:'2026-02-20', text:'Рюкзак легкий, спинка тримає форму. Взяли до школи — дуже задоволені.' },
  { id:'r6', product:'220871', author:'Тетяна', city:'Дніпро',     rating:4, date:'2026-03-03', text:'Кубики гарні, дерево гладеньке без задирок. Хотілося б більше деталей у наборі.' },
  { id:'r7', product:null,     author:'Світлана', city:'Кам’янське', rating:5, date:'2026-02-25', text:'Замовила онлайн, менеджер передзвонив за 15 хвилин і все підтвердив. Забрала в магазині того ж дня.' },
  { id:'r8', product:null,     author:'Юлія',  city:'Дніпро',     rating:5, date:'2026-03-08', text:'Приємно, що можна приміряти в магазині, а не гадати з розміром. Обмін зробили без питань.' },
];
const reviewsFor = (id) => REVIEWS.filter(r => r.product === id);
const shopReviews = () => REVIEWS.filter(r => !r.product);
const ratingOf = (id) => {
  const rs = reviewsFor(id);
  if (!rs.length) return null;
  return { avg: Math.round((rs.reduce((s,r)=>s+r.rating,0) / rs.length) * 10) / 10, count: rs.length };
};

// price buckets for sale page
const BUCKETS = [
  { uk: 'до 199 ₴', max: 199, color: 'green' },
  { uk: 'до 299 ₴', max: 299, color: 'blue' },
  { uk: 'до 499 ₴', max: 499, color: 'yellow' },
];

const SIZES_CLOTHING = ['80','86','92','98','104','110','116','122'];
const SIZES_SHOES = ['24','25','26','27','28','29','30','31','32','33'];

const AV_LABEL = {
  in:   { uk: 'В наявності',     tone: 'green' },
  last: { uk: 'Останній розмір', tone: 'yellow' },
  out:  { uk: 'Немає',           tone: 'gray' },
};

if (SOURCE.kind !== 'demo') AV_LABEL.last = { uk: 'Остання штука', tone: 'yellow' };

const BY_ID = new Map(PRODUCTS.map(p => [p.id, p]));
const colById = (id) => COLLECTIONS.find(c => c.id === id) || null;
const inCollection = (id) => { const c = colById(id); return c ? c.ids.map(x => BY_ID.get(x)).filter(Boolean) : []; };
/* stock the shop can promise for one product line: the chosen size's units in all shops (null = unknown/demo) */
const maxQty = (p) => (p && p.real && typeof p.total === 'number') ? Math.max(1, p.total) : 99;
const catById = (id) => CATS.find(c => c.id === (CAT_ALIAS[id] || id));
const subById = (id) => { for (const c of CATS) { const s = (c.subs || []).find(x => x.id === id); if (s) return { ...s, parent: c }; } return null; };
const byRank = (a, b) => a.rank - b.rank;

window.AlisaShop = { CATS, STORES, PRODUCTS, BUCKETS, SIZES_CLOTHING, SIZES_SHOES, AV_LABEL, PHONE,
  ORDER_ENDPOINT, SOURCE, HOURS_TBD, COLLECTIONS, colById, inCollection, maxQty, search,
  AGE_BUCKETS, applyFilters, filterChips, heightRange, cartLine, needsSize,
  REVIEWS, REVIEWS_ARE_DEMO, reviewsFor, shopReviews, ratingOf,
  catById, subById,
  byId: (id) => BY_ID.get(id),
  inCat: (id) => PRODUCTS.filter(p => p.cat === (CAT_ALIAS[id] || id)),
  inSub: (id) => PRODUCTS.filter(p => p.sub === id),
  onSale: () => PRODUCTS.filter(p => p.oldPrice),
  isNew: () => PRODUCTS.filter(p => p.badge === 'new').sort(byRank).slice(0, 24),
  popular: () => PRODUCTS.filter(p => p.hit).sort(byRank).slice(0, 24),
};

})();
