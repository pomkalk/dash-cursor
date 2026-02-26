# ConfirmModal

- **Path:** `src/components/ConfirmModal/index.tsx`
- **Role:** универсальное подтверждение действия (в проекте — удаление документа).

## Props
- `isOpen: boolean`.
- `title: string`.
- `description: string`.
- `confirmText?: string`.
- `cancelText?: string`.
- `onConfirm: () => void`.
- `onCancel: () => void`.

## Behavior
- Отображается как overlay modal.
- Использует `Button` с `danger`-вариантом для подтверждения.
