export type NavItem = {
  id: string
  label: string
  href?: string
}

export type FolderSummary = {
  id: string
  title: string
  filesCount: number
  totalSizeLabel: string
}

export type FileStatus = 'valid' | 'invalid' | 'incomplete' | 'expired' | 'pending'

export type RecentFileRow = {
  id: string
  type: string
  fileId: string
  uploadedBy: { name: string; avatarUrl?: string }
  date: string
  expiration: string
  source: string
  status: FileStatus
}

export type ComplianceSegment = {
  id: string
  label: string
  value: number
  colorToken: string
}

export type StorageSegment = {
  id: string
  label: string
  percent: number
  sizeLabel: string
  colorToken: string
}
