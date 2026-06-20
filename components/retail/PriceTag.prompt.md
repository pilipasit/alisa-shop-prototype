Hryvnia price display for shelf labels, product cards and posters. Sale styling (pink + struck old price) turns on automatically when `oldPrice` is set.

```jsx
<PriceTag price="349" size="lg" />
<PriceTag price="249" oldPrice="349" size="lg" />
<PriceTag price="89,90" currency="₴" size="sm" />
```

`size`: `sm | md | lg`. Use `sale` to force sale styling without an old price.
