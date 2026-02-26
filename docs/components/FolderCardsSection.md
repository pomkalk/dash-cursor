# FolderCardsSection

- **Path:** `src/components/FolderCardsSection/index.tsx`
- **Role:** рендер grid из нескольких `FolderCard`.

## Props
- `items: FolderSummary[]`.
- `onOpenFolder?: (id: string) => void`.

## Behavior
- Responsive-сетка: 1 -> 2 -> 4 карточки.
- Делегирует события открытия конкретного folder по `id`.
