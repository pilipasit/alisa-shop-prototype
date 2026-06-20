# Web shop — UI Kit

A complete, MVP-ready e-commerce design for Alisa Kids Store, built on the design system. Mobile-first, Ukrainian-language, semi-manual (order = a request the store confirms; no online payment at launch).

## Open these
- **`index.html`** — clickable **mobile prototype** in a phone frame. Full MVP flow: Home → Catalog → Product → Cart → Checkout → Confirmation, plus Stores, Sale, Search, Filters drawer, mobile menu, DM contact sheet, Link-in-bio landing, Size guide.
- **`desktop.html`** — full **desktop homepage** (header, hero, categories, carousels, benefits, footer).
- **`blueprint.html`** — the **handoff doc**: sitemap (21 pages), user flows, component library, Ukrainian copy bank, design notes, MVP launch plan, expansion plan.

## Files
- `data.jsx` — products, 7 categories, 3 stores (A-1/A-2/A-3), price buckets, sizes. → `window.AlisaShop`
- `ui.jsx` — shared components: ProductCard, Photo, PriceTag, StoreDots, PromoBanner, FilterChip, Breadcrumbs, Qty, StoreCard, HScroll, SectionHead. → `window.AlisaUI`
- `screens1.jsx` — Home, Catalog/listing, Product detail, EmptyState. → `window.AlisaScreens`
- `screens2.jsx` — Cart, Checkout (stepper), Confirmation, Stores, Sale, Link-in-bio.
- `app.jsx` — router, phone shell, bottom nav, overlays (filters, search, menu, DM), size guide.
- `desktop.jsx` — desktop homepage (reuses data + ui).

## Notes
- Each `.jsx` is wrapped in an IIFE (the babel `<script>`s share one global scope — IIFEs prevent `const` collisions; only `window.*` exports leak).
- Loads `styles.css` + `_ds_bundle.js` (namespace `window.AlisaKidsStoreDesignSystem_194dcf`) + Lucide icons.
- Product photos are on-brand color-tinted placeholders by category — replace with real photography.
- Category colors: blue = одяг, green = іграшки, yellow = сезонне, pink = розпродаж/brand.

See `blueprint.html` for the full MVP plan and what is intentionally **out** of scope at launch.
