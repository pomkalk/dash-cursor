# NewDocumentModal

- **Path:** `src/components/NewDocumentModal/index.tsx`
- **Role:** модалка добавления нового документа в таблицу.

## Props
- `isOpen: boolean`.
- `onClose: () => void`.
- `onSubmit: (payload) => void`.

## Behavior
- Имеет встроенную форму с валидацией обязательных полей.
- Даты выбираются через `DatePicker`.
- Перед submit форматирует даты из ISO в `DD-MM-YY`.
