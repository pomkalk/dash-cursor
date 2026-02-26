# Avatar

- **Path:** `src/components/Avatar/index.tsx`
- **Role:** отображение пользователя (аватар + опционально имя/роль).

## Props
- `name: string`.
- `role?: string`.
- `src?: string`.
- `size?: 'sm' | 'md'`.

## Behavior
- Если `src` отсутствует, генерирует initials из имени.
- При передаче `role` дополнительно показывает текстовую подпись.
