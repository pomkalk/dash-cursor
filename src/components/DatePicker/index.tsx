type DatePickerProps = {
  label: string
  value: string
  onChange: (next: string) => void
  id?: string
}

export function DatePicker({ label, value, onChange, id }: DatePickerProps) {
  return (
    <label className="text-xs text-slate-600">
      {label}
      <div className="relative mt-1">
        <input
          id={id}
          type="date"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 pr-9 text-sm text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">📅</span>
      </div>
    </label>
  )
}
