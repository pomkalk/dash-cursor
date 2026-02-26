# TableStatusCell

- **Path:** `src/components/TableStatusCell/index.tsx`
- **Role:** нормализованный рендер статуса строки таблицы.

## Props
- `status: FileStatus`.

## Behavior
- Маппит статус (`valid/invalid/incomplete/expired/pending`) в `Badge` variant+label.
- Централизует визуальные правила статусов таблицы.
