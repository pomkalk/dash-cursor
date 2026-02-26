import { useState } from 'react'
import { Avatar } from '../../components/Avatar'
import { DataTable } from '../../components/DataTable'
import { EmptyState } from '../../components/EmptyState'
import { Skeleton } from '../../components/Skeleton'
import { TableStatusCell } from '../TableStatusCell'
import type { RecentFileRow } from '../../components/types'

type RecentFilesTableProps = {
  rows: RecentFileRow[]
  isLoading?: boolean
  error?: string
  onDeleteRequest?: (id: string) => void
}

export function RecentFilesTable({ rows, isLoading = false, error, onDeleteRequest }: RecentFilesTableProps) {
  const [openMenuRowId, setOpenMenuRowId] = useState<string | null>(null)

  if (isLoading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    )
  }

  if (error) {
    return <EmptyState title="Could not load files" description={error} />
  }

  if (!rows.length) {
    return <EmptyState title="No files yet" description="Upload your first document to populate this table." />
  }

  return (
    <DataTable
      head={
        <tr>
          <th className="px-3 py-2 font-medium">Type</th>
          <th className="px-3 py-2 font-medium">File ID</th>
          <th className="px-3 py-2 font-medium">Uploaded by</th>
          <th className="px-3 py-2 font-medium">Date</th>
          <th className="px-3 py-2 font-medium">Expiration</th>
          <th className="px-3 py-2 font-medium">Source</th>
          <th className="px-3 py-2 font-medium">Status</th>
          <th className="px-3 py-2 font-medium" />
        </tr>
      }
      body={
        <>
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-slate-100">
              <td className="px-3 py-3">{row.type}</td>
              <td className="px-3 py-3 text-slate-500">{row.fileId}</td>
              <td className="px-3 py-3">
                <Avatar name={row.uploadedBy.name} src={row.uploadedBy.avatarUrl} size="sm" />
              </td>
              <td className="px-3 py-3 text-slate-500">{row.date}</td>
              <td className="px-3 py-3 text-slate-500">{row.expiration}</td>
              <td className="px-3 py-3">{row.source}</td>
              <td className="px-3 py-3">
                <TableStatusCell status={row.status} />
              </td>
              <td className="relative px-3 py-3 text-right">
                <button
                  type="button"
                  onClick={() => setOpenMenuRowId((prev) => (prev === row.id ? null : row.id))}
                  className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                  aria-label={`Actions for ${row.fileId}`}
                >
                  ⋮
                </button>
                {openMenuRowId === row.id ? (
                  <div className="absolute right-3 top-10 z-20 min-w-28 rounded-lg border border-slate-200 bg-white p-1 text-left shadow-lg">
                    <button
                      type="button"
                      onClick={() => {
                        onDeleteRequest?.(row.id)
                        setOpenMenuRowId(null)
                      }}
                      className="block w-full rounded-md px-2 py-1.5 text-left text-xs text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                ) : null}
              </td>
            </tr>
          ))}
        </>
      }
    />
  )
}
