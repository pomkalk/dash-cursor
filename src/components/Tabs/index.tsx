type TabsItem = {
  id: string
  label: string
}

type TabsProps = {
  items: TabsItem[]
  value: string
  onChange: (next: string) => void
}

export function Tabs({ items, value, onChange }: TabsProps) {
  return (
    <div className="inline-flex rounded-lg bg-slate-100 p-1">
      {items.map((item) => {
        const isActive = item.id === value
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
              isActive ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
