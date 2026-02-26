# EmptyState

- **Path:** `src/components/EmptyState/index.tsx`
- **Role:** единый empty/error placeholder для списков и таблиц.

## Props
- `title: string`.
- `description: string`.

## Behavior
- Рендерит нейтральный dashed-блок с заголовком и подписью.
- Используется в `RecentFilesTable` для empty/error случаев.
