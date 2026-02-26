# TableToolbar

- **Path:** `src/components/TableToolbar/index.tsx`
- **Role:** панель инструментов таблицы (tabs + search + sort).

## Props
- `filter`, `onFilterChange`.
- `query`, `onQueryChange`.
- `sort`, `onSortChange`.

## Composition
- Использует `Tabs`, `Input`, `Dropdown`.
- Инкапсулирует список filter/sort опций для `RecentFilesSection`.
