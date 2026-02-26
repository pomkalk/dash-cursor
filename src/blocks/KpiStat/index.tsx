type KpiStatProps = {
  label: string
  value: number
  tone?: 'neutral' | 'success' | 'warning'
}

const toneClass = {
  neutral: 'text-slate-700',
  success: 'text-emerald-600',
  warning: 'text-amber-600',
}

export function KpiStat({ label, value, tone = 'neutral' }: KpiStatProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">
      <p className={`text-sm font-semibold ${toneClass[tone]}`}>{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  )
}
