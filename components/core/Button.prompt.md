Pill-shaped primary action button — warm, rounded, friendly. Use for any call to action: "Купити", "Детальніше", promos, form submits.

```jsx
<Button variant="primary" size="lg" onClick={buy}>Купити зараз</Button>
<Button variant="secondary" icon={<HeartIcon/>}>У бажане</Button>
<Button variant="sale">Розпродаж −50%</Button>
<Button variant="ghost" size="sm">Скасувати</Button>
```

Variants: `primary` (pink, default), `secondary` (outline), `ghost` (text), `sale` (deep pink, urgent). Sizes: `sm | md | lg`. Pass `fullWidth`, `icon` / `iconRight` (any ReactNode/SVG), or `href` to render as a link.
