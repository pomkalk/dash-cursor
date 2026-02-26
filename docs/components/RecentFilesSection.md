# RecentFilesSection

- **Path:** `src/components/RecentFilesSection/index.tsx`
- **Role:** секция `Recent Files` (карточка + тулбар + таблица).

## Props
- `rows`, `filter`, `onFilterChange`, `query`, `onQueryChange`, `sort`, `onSortChange`.
- `onDeleteRequest?: (id: string) => void`.

## Composition
- Контейнер `Card`.
- Внутри `TableToolbar` и `RecentFilesTable`.
