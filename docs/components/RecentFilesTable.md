# RecentFilesTable

- **Path:** `src/components/RecentFilesTable/index.tsx`
- **Role:** таблица последних файлов с action-меню в строке.

## Props
- `rows: RecentFileRow[]`.
- `isLoading?: boolean`.
- `error?: string`.
- `onDeleteRequest?: (id: string) => void`.

## Behavior
- Поддерживает `loading` (`Skeleton`), `error/empty` (`EmptyState`), `ready`.
- В последнем столбце показывает menu (`⋮`) с действием `Delete`.
- Само удаление не делает, а поднимает событие в родителя.
