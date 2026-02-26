import { Badge } from '../../components/Badge'
import type { FileStatus } from '../../components/types'

type TableStatusCellProps = {
  status: FileStatus
}

const statusMap: Record<FileStatus, { label: string; variant: 'success' | 'warning' | 'danger' | 'neutral' | 'info' }> = {
  valid: { label: 'Valid', variant: 'success' },
  invalid: { label: 'Invalid', variant: 'warning' },
  incomplete: { label: 'Incomplete', variant: 'danger' },
  expired: { label: 'Expired', variant: 'neutral' },
  pending: { label: 'Pending', variant: 'info' },
}

export function TableStatusCell({ status }: TableStatusCellProps) {
  const config = statusMap[status]
  return <Badge label={config.label} variant={config.variant} />
}
