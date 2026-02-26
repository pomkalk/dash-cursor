import type { ReactNode } from 'react'

type BadgeVariant = 'success' | 'warning' | 'danger' | 'neutral' | 'info'

type BadgeProps = {
  label: string
  variant?: BadgeVariant
  icon?: ReactNode
}

const variantClasses: Record<BadgeVariant, string> = {
  success: 'bg-emerald-50 text-emerald-600',
  warning: 'bg-amber-50 text-amber-600',
  danger: 'bg-red-50 text-red-600',
  neutral: 'bg-slate-100 text-slate-600',
  info: 'bg-cyan-50 text-cyan-600',
}

export function Badge({ label, variant = 'neutral', icon }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ${variantClasses[variant]}`}>
      {icon}
      {label}
    </span>
  )
}
