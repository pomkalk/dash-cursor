import { useMemo, useState } from 'react'

type DropdownItem = {
  id: string
  label: string
}

type DropdownProps = {
  items: DropdownItem[]
  value?: string
  onSelect: (id: string) => void
  align?: 'left' | 'right'
  trigger?: string
}

export function Dropdown({ items, value, onSelect, align = 'left', trigger = 'Select' }: DropdownProps) {
  const [open, setOpen] = useState(false)

  const current = useMemo(() => items.find((item) => item.id === value), [items, value])

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-600 hover:bg-slate-50"
      >
        {current?.label ?? trigger}
      </button>
      {open ? (
        <div
          className={`absolute top-11 z-20 min-w-36 rounded-lg border border-slate-200 bg-white p-1 shadow-lg ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
        >
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className="block w-full rounded-md px-2 py-1 text-left text-xs text-slate-600 hover:bg-slate-100"
              onClick={() => {
                onSelect(item.id)
                setOpen(false)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
