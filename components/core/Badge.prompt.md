Tiny status / label pill for flags like "Новинка", "Хіт", "−30%", stock status.

```jsx
<Badge tone="sale">−30%</Badge>
<Badge tone="new" variant="soft">Новинка</Badge>
<Badge tone="info" dot>В наявності</Badge>
```

Tones: `sale | new | info | warning | neutral`. `variant`: `solid` (default) or `soft` (tinted). `size`: `md | lg`. `dot` adds a status dot.
