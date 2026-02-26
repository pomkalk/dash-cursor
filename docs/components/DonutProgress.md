# DonutProgress

- **Path:** `src/components/DonutProgress/index.tsx`
- **Role:** SVG-кольцевой прогресс.

## Props
- `value: number`.
- `size?: number`.
- `strokeWidth?: number`.
- `trackColor?: string`.
- `progressColor?: string`.

## Behavior
- Нормализует `value` в диапазон `0..100`.
- Строит stroke через `strokeDasharray/strokeDashoffset`.
