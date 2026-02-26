# Components Specification (Documents Page)

Документ описывает набор компонентов для экрана `Documents`, который показан на референсе.  
Используется вместе с `guidleline.md` как базовая спецификация перед реализацией.

## 1. Принципы декомпозиции

- Разделяем на 3 уровня: `layout` -> `section` -> `ui`.
- Все повторяемые примитивы (кнопка, бейдж, инпут, меню, карточка) выносим в `src/components/ui`.
- Составные блоки экрана (таблица, аналитические карточки, навигация) выносим в отдельные доменные компоненты.
- Компоненты должны быть переиспользуемыми: без привязки к одному экрану, где это возможно.

## 2. Рекомендуемая структура файлов

- `src/components/layout/`  
  `AppShell`, `PageContainer`, `ContentGrid`
- `src/components/navigation/`  
  `TopNav`, `NavMenu`, `UserMenu`, `TopActionIcons`
- `src/components/documents/`  
  `DocumentsHeader`, `FolderCardsSection`, `RecentFilesSection`
- `src/components/cards/`  
  `FolderCard`, `DocumentComplianceCard`, `AlertNoticeCard`, `StorageUsageCard`, `KpiStat`
- `src/components/table/`  
  `DataTable`, `RecentFilesTable`, `TableToolbar`, `TableStatusCell`
- `src/components/charts/`  
  `StackedProgressBar`, `DonutProgress`
- `src/components/ui/`  
  `Button`, `IconButton`, `Badge`, `Input`, `Tabs`, `Card`, `Dropdown`, `Avatar`, `Tooltip`, `Skeleton`, `EmptyState`

## 3. Иерархия экрана (композиция)

1. `DocumentsPage`
   - `AppShell`
   - `TopNav`
   - `PageContainer`
   - `DocumentsHeader`
   - `ContentGrid`
     - левая колонка:
       - `FolderCardsSection` -> `FolderCard[]`
       - `RecentFilesSection`
         - `TableToolbar`
         - `RecentFilesTable`
     - правая колонка:
       - `DocumentComplianceCard`
       - `AlertNoticeCard`
       - `StorageUsageCard`

## 4. Обязательные UI-примитивы

### 4.1 `Button`
- **Назначение:** primary/secondary/ghost кнопки.
- **Варианты:** `primary | secondary | ghost | danger`.
- **Размеры:** `sm | md`.
- **Состояния:** `default/hover/active/focus-visible/disabled/loading`.
- **Ключевые пропсы:** `variant`, `size`, `leftIcon`, `rightIcon`, `isLoading`, `onClick`.

### 4.2 `IconButton`
- **Назначение:** круглые/квадратные кнопки для иконок (уведомления, theme, menu).
- **Варианты:** `ghost | subtle`.
- **Состояния:** как у `Button`.

### 4.3 `Badge`
- **Назначение:** статусные метки в таблице и KPI.
- **Варианты:** `success | warning | danger | neutral | info`.
- **Пропсы:** `variant`, `icon`, `label`.

### 4.4 `Input`
- **Назначение:** поле поиска в тулбаре таблицы.
- **Поддержка:** `prefixIcon`, `placeholder`, `value`, `onChange`.
- **Состояния:** `default/focus/disabled/error`.

### 4.5 `Tabs`
- **Назначение:** фильтр-чипы `Import / Renew / Complete`.
- **Пропсы:** `items`, `value`, `onChange`.

### 4.6 `Card`
- **Назначение:** базовый контейнер для всех карточек.
- **Пропсы:** `title`, `actions`, `padding`, `elevated`.

### 4.7 `Dropdown`
- **Назначение:** сортировка и контекстные меню (`Sort by`, `...`).
- **Пропсы:** `items`, `onSelect`, `align`, `trigger`.

### 4.8 `Avatar`
- **Назначение:** пользователь в верхнем меню и в таблице.
- **Режимы:** `image | fallback initials`.

### 4.9 `Skeleton` / `EmptyState`
- **Назначение:** loading и empty сценарии для секций и таблицы.

## 5. Layout-компоненты

### 5.1 `AppShell`
- **Роль:** общий каркас приложения (фон, минимальная высота, глобальные отступы).
- **Слоты:** `header`, `children`.

### 5.2 `PageContainer`
- **Роль:** центрирование и ограничение ширины контента (`max-w` по guideline).

### 5.3 `ContentGrid`
- **Роль:** сетка основного контента (`2fr/1fr` на desktop, 1 колонка на tablet/mobile).

## 6. Navigation-компоненты

### 6.1 `TopNav`
- **Состав:** логотип, `NavMenu`, `TopActionIcons`, `UserMenu`.
- **Пропсы:** `activeItem`, `onNavigate`, `user`.

### 6.2 `NavMenu`
- **Состав:** горизонтальные пункты меню.
- **Особенность:** активный пункт с мягким background-highlight.

### 6.3 `TopActionIcons`
- **Состав:** 1-3 `IconButton` (например, theme/bell/settings).

### 6.4 `UserMenu`
- **Состав:** `Avatar`, имя, роль.
- **Опционально:** раскрывающееся меню профиля.

## 7. Documents-доменные компоненты

### 7.1 `DocumentsHeader`
- **Состав:** H1 `Documents` + primary action `+ New Document`.
- **Пропсы:** `title`, `onCreateDocument`.

### 7.2 `FolderCardsSection`
- **Состав:** grid из `FolderCard`.
- **Пропсы:** `items: FolderSummary[]`, `onOpenFolder`.

### 7.3 `FolderCard`
- **Состав:** иконка папки, название, мета (files + size), action icon.
- **Пропсы:**
  - `title: string`
  - `filesCount: number`
  - `totalSizeLabel: string`
  - `onOpen?: () => void`

### 7.4 `RecentFilesSection`
- **Состав:** заголовок, `TableToolbar`, `RecentFilesTable`.
- **Пропсы:** `rows`, `filters`, `search`, `sort`, callbacks.

## 8. Table-компоненты

### 8.1 `TableToolbar`
- **Состав:** `Tabs` слева, `Input` поиска + `Dropdown` сортировки справа.
- **Пропсы:** `filter`, `onFilterChange`, `query`, `onQueryChange`, `sort`, `onSortChange`.

### 8.2 `RecentFilesTable`
- **Колонки:**
  - `type`
  - `fileId`
  - `uploadedBy` (avatar + name)
  - `date`
  - `expiration`
  - `source`
  - `status`
  - `actions`
- **Состояния:** normal, loading (skeleton rows), empty, error.
- **Пропсы:** `rows: RecentFileRow[]`, `isLoading`, `error`, `onRowAction`.

### 8.3 `TableStatusCell`
- **Роль:** единый рендеринг статуса через `Badge`.
- **Поддержка:** `valid | invalid | incomplete | expired | pending`.

## 9. Правая колонка (аналитика и статусы)

### 9.1 `DocumentComplianceCard`
- **Состав:**
  - header (title + action menu),
  - `StackedProgressBar`,
  - 3 mini KPI (`Expired`, `Incomplete`, `Invalid Doc`),
  - 2 крупных KPI (`Valid Documents`, `Pending Review`).
- **Пропсы:**
  - `segments: ComplianceSegment[]`
  - `stats: { expired: number; incomplete: number; invalid: number; valid: number; pendingReview: number }`

### 9.2 `StackedProgressBar`
- **Роль:** визуализация долей compliance в одной горизонтальной полосе.
- **Пропсы:** `segments: { value: number; color: string; label: string }[]`.

### 9.3 `AlertNoticeCard`
- **Роль:** предупреждение/инфо сообщение под compliance.
- **Пропсы:** `type`, `message`, `onClose?`.

### 9.4 `StorageUsageCard`
- **Состав:**
  - title,
  - `DonutProgress`,
  - список сегментов storage.
- **Пропсы:**
  - `usedPercent: number`
  - `usedLabel: string`
  - `totalLabel: string`
  - `segments: StorageSegment[]`

### 9.5 `DonutProgress`
- **Роль:** круговой прогресс для заполненности хранилища.
- **Пропсы:** `value`, `size`, `strokeWidth`, `trackColor`, `progressColor`.

## 10. Модели данных (TypeScript контракты)

```ts
export type NavItem = {
  id: string
  label: string
  href?: string
}

export type FolderSummary = {
  id: string
  title: string
  filesCount: number
  totalSizeLabel: string
}

export type FileStatus = 'valid' | 'invalid' | 'incomplete' | 'expired' | 'pending'

export type RecentFileRow = {
  id: string
  type: string
  fileId: string
  uploadedBy: { name: string; avatarUrl?: string }
  date: string
  expiration: string
  source: string
  status: FileStatus
}

export type ComplianceSegment = {
  id: string
  label: string
  value: number
  colorToken: string
}

export type StorageSegment = {
  id: string
  label: string
  percent: number
  sizeLabel: string
  colorToken: string
}
```

## 11. Состояния и поведение (минимум для каждого компонента)

- **Interactive:** `hover`, `focus-visible`, `active`, `disabled`.
- **Data states:** `loading`, `empty`, `error`, `ready`.
- **Responsive behavior:** корректное перестроение на `sm/md/lg/xl` согласно `guidleline.md`.
- **A11y:** aria-label для иконок без текста, клавиатурная навигация, role/semantics для таблицы.

## 12. Приоритет реализации (порядок разработки)

1. UI primitives: `Button`, `IconButton`, `Badge`, `Input`, `Card`, `Dropdown`, `Avatar`.
2. Layout + Navigation: `AppShell`, `PageContainer`, `ContentGrid`, `TopNav`.
3. Header + Folder cards: `DocumentsHeader`, `FolderCardsSection`, `FolderCard`.
4. Table layer: `TableToolbar`, `RecentFilesTable`, `TableStatusCell`.
5. Analytics layer: `DocumentComplianceCard`, `StackedProgressBar`, `AlertNoticeCard`, `StorageUsageCard`, `DonutProgress`.
6. States & polish: skeletons, empty/error views, accessibility, motion.

## 13. Критерии готовности components layer

- Каждый компонент имеет типизированные пропсы и изолированные стили.
- Повторяемые паттерны не дублируются в нескольких местах.
- Компоненты покрывают основные состояния (`ready/loading/empty/error`).
- Верстка совпадает с референсом по структуре и визуальной иерархии.
- Реализация соответствует ограничениям из `guidleline.md`.

