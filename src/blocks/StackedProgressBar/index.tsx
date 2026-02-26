type Segment = {
  value: number
  color: string
  label: string
}

type StackedProgressBarProps = {
  segments: Segment[]
}

export function StackedProgressBar({ segments }: StackedProgressBarProps) {
  const total = segments.reduce((sum, segment) => sum + segment.value, 0) || 1

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-[11px] text-slate-500">
        {segments.map((segment) => (
          <span key={segment.label}>{Math.round((segment.value / total) * 100)}%</span>
        ))}
      </div>
      <div className="flex h-1.5 overflow-hidden rounded-full bg-slate-100">
        {segments.map((segment) => (
          <span
            key={segment.label}
            className="h-full"
            style={{ width: `${(segment.value / total) * 100}%`, backgroundColor: segment.color }}
            title={segment.label}
          />
        ))}
      </div>
    </div>
  )
}
