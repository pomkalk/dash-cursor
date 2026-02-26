# DocumentComplianceCard

- **Path:** `src/components/DocumentComplianceCard/index.tsx`
- **Role:** аналитическая карточка compliance по документам.

## Props
- `segments: ComplianceSegment[]`.
- `stats: { expired; incomplete; invalid; valid; pendingReview }`.

## Composition
- `Card` + `StackedProgressBar` + `KpiStat`.
- Показывает mini-KPI и крупные агрегаты.
