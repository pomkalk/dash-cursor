# TopActionIcons

- **Path:** `src/components/TopActionIcons/index.tsx`
- **Role:** группа action-иконок в верхнем правом углу.

## Dependencies
- `themeStore` (`mobx`) для переключения темы.
- `IconButton` для действий.

## Behavior
- Рендерит кнопку theme toggle и кнопку уведомлений.
- Компонент обернут в `observer`, поэтому реагирует на `themeStore.mode`.
