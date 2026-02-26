# Tabs

- **Path:** `src/components/Tabs/index.tsx`
- **Role:** переключатель между фильтрами/режимами (чипы).

## Props
- `items: { id: string; label: string }[]`.
- `value: string` — активная вкладка.
- `onChange: (next: string) => void`.

## Behavior
- Stateless-компонент: текущее значение хранится снаружи.
- Визуально выделяет активный tab мягкой surface-плашкой.
