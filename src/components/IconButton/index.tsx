import type { ButtonHTMLAttributes, ReactNode } from 'react'

type IconButtonVariant = 'ghost' | 'subtle'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode
  variant?: IconButtonVariant
  label: string
}

const variantClasses: Record<IconButtonVariant, string> = {
  ghost: 'bg-transparent hover:bg-slate-100 active:bg-slate-200',
  subtle: 'bg-white border border-slate-200 hover:bg-slate-50 active:bg-slate-100',
}

export function IconButton({ icon, variant = 'ghost', label, className = '', ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon}
    </button>
  )
}
