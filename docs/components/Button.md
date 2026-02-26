# Button

- **Path:** `src/components/Button/index.tsx`
- **Role:** базовая кнопка действий (primary/secondary/ghost/danger) для всего UI.

## Props
- `variant?: 'primary' | 'secondary' | 'ghost' | 'danger'` — визуальный стиль.
- `size?: 'sm' | 'md'` — размер кнопки.
- `leftIcon?: ReactNode`, `rightIcon?: ReactNode` — иконки по краям.
- `isLoading?: boolean` — показывает спиннер и блокирует клик.
- Остальные `ButtonHTMLAttributes<HTMLButtonElement>`.

## Behavior
- Поддерживает состояния из guideline: `hover`, `active`, `focus-visible`, `disabled`.
- При `isLoading` рендерит индикатор загрузки и отключает кнопку.
