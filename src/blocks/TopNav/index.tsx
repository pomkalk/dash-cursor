import { NavMenu } from '../NavMenu'
import { TopActionIcons } from '../TopActionIcons'
import { UserMenu } from '../UserMenu'
import type { NavItem } from '../../components/types'

type TopNavProps = {
  items: NavItem[]
  activeItem: string
  onNavigate: (id: string) => void
  user: { name: string; role: string; avatarUrl?: string }
}

export function TopNav({ items, activeItem, onNavigate, user }: TopNavProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1340px] items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-50 text-blue-600">P</span>
          <span className="text-sm font-semibold text-slate-800">PolicyPilot</span>
        </div>
        <NavMenu items={items} activeItem={activeItem} onNavigate={onNavigate} />
        <div className="flex items-center gap-2">
          <TopActionIcons />
          <UserMenu user={user} />
        </div>
      </div>
    </header>
  )
}
