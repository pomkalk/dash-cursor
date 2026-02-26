import { Card } from '../../components/Card'

type AlertNoticeCardProps = {
  type: 'info' | 'warning'
  message: string
  onClose?: () => void
}

export function AlertNoticeCard({ type, message, onClose }: AlertNoticeCardProps) {
  return (
    <Card
      padding="sm"
      className={type === 'warning' ? 'border-amber-100 bg-amber-50/70' : 'border-cyan-100 bg-cyan-50/60'}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs text-slate-600">
          <span className="mr-2">{type === 'warning' ? '⚠' : 'ⓘ'}</span>
          {message}
        </p>
        {onClose ? (
          <button type="button" onClick={onClose} className="text-xs text-slate-400 hover:text-slate-600" aria-label="Close alert">
            ×
          </button>
        ) : null}
      </div>
    </Card>
  )
}
