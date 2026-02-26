import type { ReactNode } from 'react'

type CardProps = {
  title?: string
  actions?: ReactNode
  children: ReactNode
  padding?: 'sm' | 'md' | 'lg'
  elevated?: boolean
  className?: string
}

const paddingClasses = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-5',
}

export function Card({ title, actions, children, padding = 'md', elevated = false, className = '' }: CardProps) {
  return (
    <section className={`rounded-2xl border border-slate-200 bg-white ${elevated ? 'shadow-sm' : ''} ${paddingClasses[padding]} ${className}`}>
      {title || actions ? (
        <header className="mb-3 flex items-center justify-between">
          {title ? <h3 className="text-sm font-semibold text-slate-800">{title}</h3> : <span />}
          {actions}
        </header>
      ) : null}
      {children}
    </section>
  )
}
