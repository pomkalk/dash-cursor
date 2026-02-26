# AlertNoticeCard

- **Path:** `src/components/AlertNoticeCard/index.tsx`
- **Role:** информационное/предупреждающее сообщение.

## Props
- `type: 'info' | 'warning'`.
- `message: string`.
- `onClose?: () => void`.

## Behavior
- Стиль контейнера зависит от `type`.
- При `onClose` рендерит кнопку закрытия.
