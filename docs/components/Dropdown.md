# Dropdown

- **Path:** `src/components/Dropdown/index.tsx`
- **Role:** простое раскрывающееся меню выбора значения.

## Props
- `items: { id: string; label: string }[]`.
- `value?: string`.
- `onSelect: (id: string) => void`.
- `align?: 'left' | 'right'`.
- `trigger?: string`.

## Behavior
- Хранит внутреннее состояние открытия `open`.
- Вызывает `onSelect` и закрывает список после выбора пункта.
