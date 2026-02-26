# UserMenu

- **Path:** `src/components/UserMenu/index.tsx`
- **Role:** обертка для блока пользователя в top bar.

## Props
- `user: { name: string; role: string; avatarUrl?: string }`.

## Behavior
- Делегирует рендер в `Avatar`.
- В текущей версии без dropdown-профиля.
