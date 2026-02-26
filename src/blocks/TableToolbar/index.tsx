import { Dropdown } from '../../components/Dropdown'
import { Input } from '../../components/Input'
import { Tabs } from '../../components/Tabs'

type TableToolbarProps = {
  filter: string
  onFilterChange: (next: string) => void
  query: string
  onQueryChange: (next: string) => void
  sort: string
  onSortChange: (next: string) => void
}

const filterItems = [
  { id: 'import', label: 'Import' },
  { id: 'renew', label: 'Renew' },
  { id: 'complete', label: 'Complete' },
]

const sortItems = [
  { id: 'date', label: 'Sort by date' },
  { id: 'status', label: 'Sort by status' },
  { id: 'name', label: 'Sort by name' },
]

export function TableToolbar({ filter, onFilterChange, query, onQueryChange, sort, onSortChange }: TableToolbarProps) {
  return (
    <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
      <Tabs items={filterItems} value={filter} onChange={onFilterChange} />
      <div className="flex items-center gap-2">
        <Input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          prefixIcon={<span className="text-xs">⌕</span>}
          placeholder="Search..."
          aria-label="Search files"
        />
        <Dropdown items={sortItems} value={sort} onSelect={onSortChange} align="right" />
      </div>
    </div>
  )
}
