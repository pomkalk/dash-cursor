import { Card } from '../../components/Card'
import { DonutProgress } from '../DonutProgress'
import type { StorageSegment } from '../../components/types'

type StorageUsageCardProps = {
  usedPercent: number
  usedLabel: string
  totalLabel: string
  segments: StorageSegment[]
}

export function StorageUsageCard({ usedPercent, usedLabel, totalLabel, segments }: StorageUsageCardProps) {
  return (
    <Card
      title="Storage Usage"
      className="border-blue-500/30 bg-gradient-to-br from-blue-500 to-blue-700 text-white"
      actions={
        <button type="button" className="rounded-md p-1 text-white/70 hover:bg-white/10" aria-label="Storage card menu">
          ⋮
        </button>
      }
    >
      <div className="grid grid-cols-[140px_1fr] items-center gap-3">
        <div className="relative mx-auto h-[132px] w-[132px]">
          <DonutProgress value={usedPercent} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold">{usedPercent}%</span>
            <span className="text-xs text-white/80">{usedLabel}</span>
            <span className="text-[11px] text-white/70">out of {totalLabel}</span>
          </div>
        </div>
        <ul className="space-y-2 text-xs text-white/90">
          {segments.map((segment) => (
            <li key={segment.id} className="rounded-lg border border-white/20 bg-white/5 px-2 py-1.5">
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: segment.colorToken }} />
                {segment.percent}% · {segment.sizeLabel}
              </span>
              <p className="mt-0.5 text-white/75">{segment.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
