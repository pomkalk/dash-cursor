# DocumentsPage

- **Path:** `src/components/DocumentsPage/index.tsx`
- **Role:** композиционный page-компонент экрана `Documents`.

## Responsibilities
- Собирает весь экран из layout/navigation/cards/table компонентов.
- Подключает `documentsStore` (данные таблицы, фильтры, сортировка, add/remove).
- Управляет состоянием модалок: `NewDocumentModal`, `ConfirmModal`.

## Notes
- Компонент обернут в `observer` для реактивного обновления от MobX store.
