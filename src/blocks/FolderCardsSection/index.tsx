import { FolderCard } from '../FolderCard'
import type { FolderSummary } from '../../components/types'

type FolderCardsSectionProps = {
  items: FolderSummary[]
  onOpenFolder?: (id: string) => void
}

export function FolderCardsSection({ items, onOpenFolder }: FolderCardsSectionProps) {
  return (
    <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <FolderCard
          key={item.id}
          title={item.title}
          filesCount={item.filesCount}
          totalSizeLabel={item.totalSizeLabel}
          onOpen={onOpenFolder ? () => onOpenFolder(item.id) : undefined}
        />
      ))}
    </section>
  )
}
