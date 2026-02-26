import { useState } from 'react'
import { Button } from '../../components/Button'
import { DatePicker } from '../../components/DatePicker'
import type { FileStatus } from '../../components/types'

type NewDocumentModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (payload: {
    type: string
    uploadedByName: string
    date: string
    expiration: string
    source: string
    status: FileStatus
  }) => void
}

const initialForm = {
  type: '',
  uploadedByName: '',
  date: '',
  expiration: '',
  source: '',
  status: 'valid' as FileStatus,
}

function formatIsoDateToDisplay(isoDate: string) {
  const [year, month, day] = isoDate.split('-')
  if (!year || !month || !day) {
    return isoDate
  }
  return `${day}-${month}-${year.slice(-2)}`
}

export function NewDocumentModal({ isOpen, onClose, onSubmit }: NewDocumentModalProps) {
  const [form, setForm] = useState(initialForm)

  if (!isOpen) {
    return null
  }

  const updateField = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const isInvalid =
    !form.type.trim() ||
    !form.uploadedByName.trim() ||
    !form.date.trim() ||
    !form.expiration.trim() ||
    !form.source.trim()

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/45 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Add New Document</h2>
          <button type="button" onClick={onClose} className="rounded-md px-2 py-1 text-slate-500 hover:bg-slate-100">
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="text-xs text-slate-600">
            Document Type
            <input
              className="mt-1 h-10 w-full rounded-lg border border-slate-200 px-3 text-sm"
              value={form.type}
              onChange={(event) => updateField('type', event.target.value)}
              placeholder="Policy File"
            />
          </label>

          <label className="text-xs text-slate-600">
            Uploaded By
            <input
              className="mt-1 h-10 w-full rounded-lg border border-slate-200 px-3 text-sm"
              value={form.uploadedByName}
              onChange={(event) => updateField('uploadedByName', event.target.value)}
              placeholder="Anna D."
            />
          </label>

          <DatePicker label="Date" value={form.date} onChange={(next) => updateField('date', next)} id="document-date" />
          <DatePicker
            label="Expiration"
            value={form.expiration}
            onChange={(next) => updateField('expiration', next)}
            id="document-expiration"
          />

          <label className="text-xs text-slate-600">
            Source
            <input
              className="mt-1 h-10 w-full rounded-lg border border-slate-200 px-3 text-sm"
              value={form.source}
              onChange={(event) => updateField('source', event.target.value)}
              placeholder="Uploaded by Agent"
            />
          </label>

          <label className="text-xs text-slate-600">
            Status
            <select
              className="mt-1 h-10 w-full rounded-lg border border-slate-200 px-3 text-sm"
              value={form.status}
              onChange={(event) => updateField('status', event.target.value as FileStatus)}
            >
              <option value="valid">Valid</option>
              <option value="invalid">Invalid</option>
              <option value="incomplete">Incomplete</option>
              <option value="expired">Expired</option>
              <option value="pending">Pending</option>
            </select>
          </label>
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              onSubmit({
                ...form,
                date: formatIsoDateToDisplay(form.date),
                expiration: formatIsoDateToDisplay(form.expiration),
              })
              setForm(initialForm)
              onClose()
            }}
            disabled={isInvalid}
          >
            Add Document
          </Button>
        </div>
      </div>
    </div>
  )
}
