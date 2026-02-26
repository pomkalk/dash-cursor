import { Card } from '../../components/Card'

type FolderCardProps = {
  title: string
  filesCount: number
  totalSizeLabel: string
  onOpen?: () => void
}

export function FolderCard({ title, filesCount, totalSizeLabel, onOpen }: FolderCardProps) {
  return (
    <Card padding="md" className="transition hover:-translate-y-0.5 hover:shadow-sm">
      <div className="flex items-start justify-between">
        <span className="text-xl text-slate-400">🗂</span>
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Open ${title}`}
          className="rounded-md p-1 text-xs text-slate-400 hover:bg-slate-100 hover:text-slate-600"
        >
          ↗
        </button>
      </div>
      <p className="mt-4 text-sm font-semibold text-slate-700">{title}</p>
      <p className="text-xs text-slate-400">
        {filesCount} files · {totalSizeLabel}
      </p>
    </Card>
  )
}
