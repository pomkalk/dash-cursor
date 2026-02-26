# Tooltip

- **Path:** `src/components/Tooltip/index.tsx`
- **Role:** всплывающая подсказка для hover-сценариев.

## Props
- `content: string` — текст tooltip.
- `children: ReactNode` — элемент-цель.

## Behavior
- Показывается при hover через `group-hover`.
- Используется как lightweight-решение без порталов/позишининг-движка.
