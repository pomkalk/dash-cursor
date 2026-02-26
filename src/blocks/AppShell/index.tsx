import type { ReactNode } from 'react'

type AppShellProps = {
  header: ReactNode
  children: ReactNode
}

export function AppShell({ header, children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      {header}
      <main className="pb-8">{children}</main>
    </div>
  )
}
