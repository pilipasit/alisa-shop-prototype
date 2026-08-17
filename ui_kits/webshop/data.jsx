/* IIFE */
;(function(){
/* Alisa webshop — sample data, categories, stores. Shared via window.AlisaShop. */

const CATS = [
  { id: 'clothing', uk: 'Одяг',      color: 'blue',   icon: 'shirt',      desc: 'Зручний та якісний одяг для дітей від народження до 12 років.' },
  { id: 'shoes',    uk: 'Взуття',    color: 'pink',   icon: 'footprints', desc: 'Взуття на кожен сезон — від першого кроку до школи.' },
  { id: 'toys',     uk: 'Іграшки',   color: 'green',  icon: 'blocks',     desc: 'Розвивальні та улюблені іграшки для будь-якого віку.' },
  { id: 'seasonal', uk: 'Сезонне',   color: 'yellow', icon: 'sun',        desc: 'Все за погодою — від літніх панам до зимових комбінезонів.' },
  { id: 'baby',     uk: 'Малюкам',   color: 'pink',   icon: 'baby',       desc: 'Найнеобхідніше для малюків 0–2 роки.' },
  { id: 'school',   uk: 'Школа',     color: 'blue',   icon: 'backpack',   desc: 'Все для школи та садочка — до 1 вересня.' },
  { id: 'sale',     uk: 'Розпродаж', color: 'pinkDeep', icon: 'badge-percent', desc: 'Знижки на сезонні товари та останні розміри.' },
];

const PHONE = '+380 98 822 29 64';
const STORES = [
  { id: 'A-1', name: 'Аліса А-1', city: 'Кам’янське', area: 'бульвар Будівельників', addr: 'бульвар Будівельників, 1-Б', hours: 'Пн–Нд 9:00–20:00', phone: PHONE },
  { id: 'A-2', name: 'Аліса А-2', city: 'Кам’янське', area: 'Правий берег · ТРЦ «Дніпро Плаза»', addr: 'пр. Свободи, 51, 2 поверх', hours: 'Пн–Нд 10:00–21:00', phone: PHONE },
  { id: 'A-3', name: 'Аліса А-3', city: 'Дніпро', area: 'Центр', addr: 'пр. Олександра Поля, 33', hours: 'Пн–Нд 9:00–21:00', phone: PHONE },
];

// availability helper: 'in' | 'last' | 'out'
const P = (id, name, cat, price, oldPrice, ages, badge, av, hit, img) =>
  ({ id, name, cat, price, oldPrice, ages, badge, av, hit, img });

const IMG = (f) => '../../assets/products/' + f;

const PRODUCTS = [
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

window.AlisaShop = { CATS, STORES, PRODUCTS, BUCKETS, SIZES_CLOTHING, SIZES_SHOES, AV_LABEL, PHONE,
  catById: (id) => CATS.find(c => c.id === id),
  byId: (id) => PRODUCTS.find(p => p.id === id),
  inCat: (id) => PRODUCTS.filter(p => p.cat === id),
  onSale: () => PRODUCTS.filter(p => p.oldPrice),
  isNew: () => PRODUCTS.filter(p => p.badge === 'new'),
  popular: () => PRODUCTS.filter(p => p.hit),
};

})();
