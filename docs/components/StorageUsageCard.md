# StorageUsageCard

- **Path:** `src/components/StorageUsageCard/index.tsx`
- **Role:** акцентная карточка использования хранилища.

## Props
- `usedPercent: number`.
- `usedLabel: string`.
- `totalLabel: string`.
- `segments: StorageSegment[]`.

## Composition
- `Card` + `DonutProgress` + список сегментов.
- Использует синий градиент и контрастную светлую типографику.
