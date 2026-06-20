Customer-facing callout box — store notices, promo terms, opening hours, instructions. Comes with a built-in tone icon.

```jsx
<Notice tone="info" title="Графік роботи">Щодня з 9:00 до 21:00</Notice>
<Notice tone="sale" title="Акція">Знижки на зимову колекцію до кінця тижня.</Notice>
<Notice tone="warning">Обмін можливий протягом 14 днів із чеком.</Notice>
```

Tones: `info (default) | success | warning | sale`. Each ships a matching icon; override via `icon`.
