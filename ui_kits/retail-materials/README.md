# Retail Materials — UI Kit

Print-ready, in-store materials for Alisa Kids Store, all composed from the design-system components.

## Screens / artifacts
- **PromoPoster.jsx** — A-format seasonal sale poster (≈600×800). Toggles between winter / spring / summer themes (accent color, headline, burst). Uses `SaleBurst`, `PriceTag`, `Button`, `Badge` + primary logo.
- **ShelfLabel.jsx** — printable shelf-edge price label (≈300×170) with a category color bar. Uses `PriceTag` + `Badge` + mono logo.
- **index.html** — interactive board: pick a season for the poster, plus a sheet of shelf labels, color-coded category signs and a customer notice.

## Notes
- Product imagery is shown as a labelled placeholder ("Фото товару") — drop in real product photography for production.
- Category color-coding: keep departments consistent (e.g. clothing = blue, toys = green) across all signage.
- Everything reads `styles.css` tokens and `window.AlisaKidsStoreDesignSystem_194dcf` from `_ds_bundle.js`.
