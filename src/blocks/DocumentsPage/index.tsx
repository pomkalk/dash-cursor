import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { AlertNoticeCard } from '../AlertNoticeCard'
import { AppShell } from '../AppShell'
import { ContentGrid } from '../ContentGrid'
import { ConfirmModal } from '../ConfirmModal'
import { DocumentComplianceCard } from '../DocumentComplianceCard'
import { DocumentsHeader } from '../DocumentsHeader'
import { FolderCardsSection } from '../FolderCardsSection'
import { NewDocumentModal } from '../NewDocumentModal'
import { PageContainer } from '../PageContainer'
import { RecentFilesSection } from '../RecentFilesSection'
import { StorageUsageCard } from '../StorageUsageCard'
import { TopNav } from '../TopNav'
import { documentsStore } from '../../stores/documentsStore'
import type { ComplianceSegment, FolderSummary, NavItem, StorageSegment } from '../../components/types'

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'policies', label: 'Policies' },
  { id: 'documents', label: 'Documents' },
  { id: 'reminders', label: 'Reminders' },
  { id: 'clients', label: 'Clients' },
  { id: 'agents', label: 'Agents' },
]

const folderItems: FolderSummary[] = [
  { id: 'f1', title: 'Policies 2025', filesCount: 45, totalSizeLabel: '256 Mb' },
  { id: 'f2', title: 'Inspection Reports', filesCount: 30, totalSizeLabel: '512 Mb' },
  { id: 'f3', title: 'Claim Documentation', filesCount: 8, totalSizeLabel: '32 Mb' },
  { id: 'f4', title: 'Verify Required Docs', filesCount: 12, totalSizeLabel: '64 Mb' },
]

const complianceSegments: ComplianceSegment[] = [
  { id: 's1', label: 'Expired', value: 16, colorToken: '#ef4444' },
  { id: 's2', label: 'Incomplete', value: 62, colorToken: '#f59e0b' },
  { id: 's3', label: 'Invalid', value: 22, colorToken: '#06b6d4' },
]

const storageSegments: StorageSegment[] = [
  { id: 'st1', label: 'Policy Files', percent: 12, sizeLabel: '80 GB', colorToken: '#93c5fd' },
  { id: 'st2', label: 'Vehicle Registrations', percent: 7, sizeLabel: '36 GB', colorToken: '#bfdbfe' },
  { id: 'st3', label: 'Inspection Reports', percent: 8, sizeLabel: '30 GB', colorToken: '#dbeafe' },
]

export const DocumentsPage = observer(function DocumentsPage() {
  const [activeNavItem, setActiveNavItem] = useState('documents')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pendingDeleteRowId, setPendingDeleteRowId] = useState<string | null>(null)

  return (
    <AppShell
      header={
        <TopNav
          items={navItems}
          activeItem={activeNavItem}
          onNavigate={setActiveNavItem}
          user={{ name: 'Anna D.', role: 'Manager' }}
        />
      }
    >
      <PageContainer>
        <DocumentsHeader title="Documents" onCreateDocument={() => setIsModalOpen(true)} />
        <ContentGrid
          left={
            <>
              <FolderCardsSection items={folderItems} />
              <RecentFilesSection
                rows={documentsStore.visibleRows}
                filter={documentsStore.filter}
                onFilterChange={(next) => documentsStore.setFilter(next)}
                query={documentsStore.query}
                onQueryChange={(next) => documentsStore.setQuery(next)}
                sort={documentsStore.sort}
                onSortChange={(next) => documentsStore.setSort(next)}
                onDeleteRequest={(rowId) => setPendingDeleteRowId(rowId)}
              />
            </>
          }
          right={
            <>
              <DocumentComplianceCard
                segments={complianceSegments}
                stats={{ expired: 5, incomplete: 23, invalid: 7, valid: 421, pendingReview: 48 }}
              />
              <AlertNoticeCard
                type="warning"
                message="Some are close to expiring, incomplete, or failed validation. Review now to avoid policy delays."
              />
              <StorageUsageCard usedPercent={25} usedLabel="124 GB" totalLabel="500 GB" segments={storageSegments} />
            </>
          }
        />
        <NewDocumentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={(payload) => documentsStore.addDocument(payload)}
        />
        <ConfirmModal
          isOpen={pendingDeleteRowId !== null}
          title="Delete Document"
          description="Are you sure you want to delete this document? This action cannot be undone."
          onCancel={() => setPendingDeleteRowId(null)}
          onConfirm={() => {
            if (pendingDeleteRowId) {
              documentsStore.removeDocument(pendingDeleteRowId)
            }
            setPendingDeleteRowId(null)
          }}
        />
      </PageContainer>
    </AppShell>
  )
})
