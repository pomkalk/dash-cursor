# DatePicker

- **Path:** `src/components/DatePicker/index.tsx`
- **Role:** единый выбор даты в формах модалок.

## Props
- `label: string`.
- `value: string` (ISO-строка для `input[type=date]`).
- `onChange: (next: string) => void`.
- `id?: string`.

## Behavior
- Стилизован под форму проекта (rounded, border, focus ring).
- Используется в `NewDocumentModal` для `Date` и `Expiration`.
