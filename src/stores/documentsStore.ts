import { makeAutoObservable } from 'mobx'
import type { FileStatus, RecentFileRow } from '../components/types'

type NewDocumentPayload = {
  type: string
  uploadedByName: string
  date: string
  expiration: string
  source: string
  status: FileStatus
}

class DocumentsStore {
  rows: RecentFileRow[] = [
    { id: 'r1', type: 'Policy File', fileId: '#35698', uploadedBy: { name: 'Michael S.' }, date: '18-05-26', expiration: '18-05-30', source: 'Uploaded by Agent', status: 'valid' },
    { id: 'r2', type: 'Registration', fileId: '#35697', uploadedBy: { name: 'Sam W.' }, date: '16-05-26', expiration: '16-05-30', source: 'Client', status: 'invalid' },
    { id: 'r3', type: 'Policy File', fileId: '#35695', uploadedBy: { name: 'Liam Johnson' }, date: '16-05-25', expiration: '16-05-30', source: 'Uploaded by Agent', status: 'valid' },
    { id: 'r4', type: 'Report', fileId: '#35694', uploadedBy: { name: 'Sophia Brown' }, date: '12-05-25', expiration: '12-05-30', source: 'Auto-imported', status: 'invalid' },
    { id: 'r5', type: 'Registration', fileId: '#35693', uploadedBy: { name: 'Mason Smith' }, date: '11-05-25', expiration: '11-05-30', source: 'Client', status: 'valid' },
    { id: 'r6', type: 'Policy File', fileId: '#35692', uploadedBy: { name: 'Olivia Davis' }, date: '08-05-25', expiration: '08-05-30', source: 'Uploaded by Agent', status: 'valid' },
  ]

  filter = 'import'
  query = ''
  sort = 'date'

  constructor() {
    makeAutoObservable(this)
  }

  setFilter(next: string) {
    this.filter = next
  }

  setQuery(next: string) {
    this.query = next
  }

  setSort(next: string) {
    this.sort = next
  }

  get visibleRows() {
    const loweredQuery = this.query.toLowerCase().trim()

    const filtered = loweredQuery
      ? this.rows.filter(
          (row) =>
            row.type.toLowerCase().includes(loweredQuery) ||
            row.fileId.toLowerCase().includes(loweredQuery) ||
            row.uploadedBy.name.toLowerCase().includes(loweredQuery),
        )
      : this.rows

    if (this.sort === 'status') {
      return [...filtered].sort((a, b) => a.status.localeCompare(b.status))
    }

    if (this.sort === 'name') {
      return [...filtered].sort((a, b) => a.uploadedBy.name.localeCompare(b.uploadedBy.name))
    }

    return [...filtered].sort((a, b) => b.fileId.localeCompare(a.fileId))
  }

  addDocument(payload: NewDocumentPayload) {
    const nextId = `r${this.rows.length + 1}`
    const nextFileNumeric = this.getNextFileNumber()

    const newRow: RecentFileRow = {
      id: nextId,
      fileId: `#${nextFileNumeric}`,
      type: payload.type.trim(),
      uploadedBy: { name: payload.uploadedByName.trim() },
      date: payload.date.trim(),
      expiration: payload.expiration.trim(),
      source: payload.source.trim(),
      status: payload.status,
    }

    this.rows = [newRow, ...this.rows]
  }

  removeDocument(rowId: string) {
    this.rows = this.rows.filter((row) => row.id !== rowId)
  }

  private getNextFileNumber() {
    const maxNumeric = this.rows.reduce((max, row) => {
      const numeric = Number.parseInt(row.fileId.replace('#', ''), 10)
      if (Number.isNaN(numeric)) {
        return max
      }
      return Math.max(max, numeric)
    }, 35690)

    return maxNumeric + 1
  }
}

export const documentsStore = new DocumentsStore()
