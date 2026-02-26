# Card

- **Path:** `src/components/Card/index.tsx`
- **Role:** базовый surface-контейнер для карточек и секций.

## Props
- `title?: string` — заголовок блока.
- `actions?: ReactNode` — зона действий справа в header.
- `children: ReactNode`.
- `padding?: 'sm' | 'md' | 'lg'`.
- `elevated?: boolean`.
- `className?: string`.

## Behavior
- Если есть `title` или `actions`, рендерится встроенный header.
- Используется как оболочка для table/analytics/cards.
