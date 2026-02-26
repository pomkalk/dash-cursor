# TopNav

- **Path:** `src/components/TopNav/index.tsx`
- **Role:** верхняя панель приложения (бренд, меню, actions, пользователь).

## Props
- `items: NavItem[]`.
- `activeItem: string`.
- `onNavigate: (id: string) => void`.
- `user: { name: string; role: string; avatarUrl?: string }`.

## Composition
- Использует `NavMenu`, `TopActionIcons`, `UserMenu`.
- Sticky header с blur/бордером.
