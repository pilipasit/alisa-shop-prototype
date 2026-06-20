Labelled text input with rounded field, optional leading icon, hint and error state.

```jsx
<Input label="Ім'я" placeholder="Введіть ім'я" required />
<Input label="Пошук" icon={<SearchIcon/>} placeholder="Знайти товар" />
<Input label="Телефон" error="Невірний номер" />
```

Pass any native input attrs (`type`, `value`, `onChange`, `placeholder`…). `error` overrides `hint` and turns the field red.
