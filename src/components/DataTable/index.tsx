import type { ReactNode } from 'react'

type DataTableProps = {
  head: ReactNode
  body: ReactNode
}

export function DataTable({ head, body }: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="min-w-full bg-white">
        <thead className="bg-slate-50 text-left text-xs text-slate-500">{head}</thead>
        <tbody className="text-sm text-slate-700">{body}</tbody>
      </table>
    </div>
  )
}
