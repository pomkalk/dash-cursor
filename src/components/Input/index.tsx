import type { InputHTMLAttributes, ReactNode } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  prefixIcon?: ReactNode
  hasError?: boolean
}

export function Input({ prefixIcon, hasError = false, className = '', ...props }: InputProps) {
  return (
    <label className="relative block">
      {prefixIcon ? <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">{prefixIcon}</span> : null}
      <input
        className={`h-9 w-full rounded-lg border bg-white text-sm text-slate-700 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 ${
          hasError ? 'border-red-300 focus-visible:ring-red-200' : 'border-slate-200 focus-visible:ring-blue-200'
        } ${prefixIcon ? 'pl-9' : 'pl-3'} pr-3 ${className}`}
        {...props}
      />
    </label>
  )
}
