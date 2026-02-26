# Input

- **Path:** `src/components/Input/index.tsx`
- **Role:** единое текстовое поле (поиск, фильтры, формы).

## Props
- `prefixIcon?: ReactNode` — иконка слева.
- `hasError?: boolean` — переключение в ошибочный стиль.
- Остальные `InputHTMLAttributes<HTMLInputElement>`.

## Behavior
- Поддерживает `focus-visible` ring и visual error state.
- Используется в `TableToolbar` для поиска по таблице.
