import { Button } from '../../components/Button'

type DocumentsHeaderProps = {
  title: string
  onCreateDocument: () => void
}

export function DocumentsHeader({ title, onCreateDocument }: DocumentsHeaderProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900">{title}</h1>
      <Button size="sm" onClick={onCreateDocument}>
        + New Document
      </Button>
    </div>
  )
}
