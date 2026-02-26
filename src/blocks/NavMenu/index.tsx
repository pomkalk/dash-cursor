import type { NavItem } from '../../components/types'

type NavMenuProps = {
  items: NavItem[]
  activeItem: string
  onNavigate: (id: string) => void
}

export function NavMenu({ items, activeItem, onNavigate }: NavMenuProps) {
  return (
    <nav className="hidden items-center gap-1 md:flex">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onNavigate(item.id)}
          className={`rounded-lg px-3 py-1.5 text-xs transition ${
            item.id === activeItem ? 'bg-slate-100 text-slate-700' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
