Color-coded category chip — product categories, filter pills, attribute labels. Colors map to the brand accent set.

```jsx
<Tag color="blue" dot>Одяг</Tag>
<Tag color="green" onClick={toggle} selected>Іграшки</Tag>
<Tag color="pink" onRemove={clear}>0–2 роки</Tag>
```

Colors: `pink | blue | green | yellow | neutral`. `dot` shows a color dot; `onClick` makes it a selectable filter (`selected` for pressed state); `onRemove` adds a × button.
