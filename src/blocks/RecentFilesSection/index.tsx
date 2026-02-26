import { Card } from '../../components/Card'
import { RecentFilesTable } from '../RecentFilesTable'
import { TableToolbar } from '../TableToolbar'
import type { RecentFileRow } from '../../components/types'

type RecentFilesSectionProps = {
  rows: RecentFileRow[]
  filter: string
  onFilterChange: (next: string) => void
  query: string
  onQueryChange: (next: string) => void
  sort: string
  onSortChange: (next: string) => void
  onDeleteRequest?: (id: string) => void
}

export function RecentFilesSection({
  rows,
  filter,
  onFilterChange,
  query,
  onQueryChange,
  sort,
  onSortChange,
  onDeleteRequest,
}: RecentFilesSectionProps) {
  return (
    <Card title="Recent Files">
      <TableToolbar
        filter={filter}
        onFilterChange={onFilterChange}
        query={query}
        onQueryChange={onQueryChange}
        sort={sort}
        onSortChange={onSortChange}
      />
      <RecentFilesTable rows={rows} onDeleteRequest={onDeleteRequest} />
    </Card>
  )
}
