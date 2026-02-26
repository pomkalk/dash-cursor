# Badge

- **Path:** `src/components/Badge/index.tsx`
- **Role:** отображение статусов и коротких semantic-меток.

## Props
- `label: string` — текст бейджа.
- `variant?: 'success' | 'warning' | 'danger' | 'neutral' | 'info'`.
- `icon?: ReactNode` — опциональная иконка.

## Behavior
- Используется для статусов таблицы через `TableStatusCell`.
- Придерживается цветовой семантики из `guidleline.md`.
