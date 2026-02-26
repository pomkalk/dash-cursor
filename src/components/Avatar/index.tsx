type AvatarProps = {
  name: string
  role?: string
  src?: string
  size?: 'sm' | 'md'
}

const sizeClass = {
  sm: 'h-7 w-7 text-xs',
  md: 'h-9 w-9 text-sm',
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((chunk) => chunk[0]?.toUpperCase() ?? '')
    .join('')
}

export function Avatar({ name, role, src, size = 'md' }: AvatarProps) {
  return (
    <div className="inline-flex items-center gap-2">
      {src ? (
        <img src={src} alt={name} className={`${sizeClass[size]} rounded-full object-cover`} />
      ) : (
        <span className={`${sizeClass[size]} inline-flex items-center justify-center rounded-full bg-slate-200 font-medium text-slate-600`}>
          {getInitials(name)}
        </span>
      )}
      {role ? (
        <span className="leading-tight">
          <span className="block text-xs font-semibold text-slate-700">{name}</span>
          <span className="block text-[11px] text-slate-400">{role}</span>
        </span>
      ) : null}
    </div>
  )
}
