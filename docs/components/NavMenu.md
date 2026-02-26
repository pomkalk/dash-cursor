# NavMenu

- **Path:** `src/components/NavMenu/index.tsx`
- **Role:** горизонтальное меню разделов верхней навигации.

## Props
- `items: NavItem[]`.
- `activeItem: string`.
- `onNavigate: (id: string) => void`.

## Behavior
- На `md` и выше показывает кнопки меню.
- Активный пункт выделяется через отдельные utility-классы.
