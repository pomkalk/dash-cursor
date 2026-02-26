# IconButton

- **Path:** `src/components/IconButton/index.tsx`
- **Role:** компактная кнопка для иконок (theme, notifications, service actions).

## Props
- `icon: ReactNode` — содержимое иконки.
- `label: string` — обязательный `aria-label`.
- `variant?: 'ghost' | 'subtle'` — вариант фона/границы.
- Остальные `ButtonHTMLAttributes<HTMLButtonElement>`.

## Behavior
- Аксессибилити: всегда рендерит `aria-label`.
- Состояния: `hover`, `active`, `focus-visible`, `disabled`.
