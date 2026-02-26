import { Card } from '../../components/Card'
import { KpiStat } from '../KpiStat'
import { StackedProgressBar } from '../StackedProgressBar'
import type { ComplianceSegment } from '../../components/types'

type ComplianceStats = {
  expired: number
  incomplete: number
  invalid: number
  valid: number
  pendingReview: number
}

type DocumentComplianceCardProps = {
  segments: ComplianceSegment[]
  stats: ComplianceStats
}

export function DocumentComplianceCard({ segments, stats }: DocumentComplianceCardProps) {
  return (
    <Card
      title="Document Compliance"
      actions={
        <button type="button" className="rounded-md p-1 text-slate-400 hover:bg-slate-100" aria-label="Compliance card menu">
          ⋮
        </button>
      }
    >
      <StackedProgressBar segments={segments.map((segment) => ({ value: segment.value, label: segment.label, color: segment.colorToken }))} />
      <div className="mt-4 grid grid-cols-3 gap-2">
        <KpiStat label="Expired" value={stats.expired} />
        <KpiStat label="Incomplete" value={stats.incomplete} tone="warning" />
        <KpiStat label="Invalid Doc" value={stats.invalid} tone="warning" />
      </div>
      <div className="mt-4 flex gap-6">
        <p>
          <span className="block text-3xl font-semibold text-slate-900">{stats.valid}</span>
          <span className="text-xs text-slate-500">Valid Documents</span>
        </p>
        <p>
          <span className="block text-3xl font-semibold text-slate-900">{stats.pendingReview}</span>
          <span className="text-xs text-slate-500">Pending Review</span>
        </p>
      </div>
    </Card>
  )
}
