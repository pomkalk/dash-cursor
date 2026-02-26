import type { ReactNode } from 'react'

type ContentGridProps = {
  left: ReactNode
  right: ReactNode
}

export function ContentGrid({ left, right }: ContentGridProps) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
      <div className="space-y-4">{left}</div>
      <aside className="space-y-4">{right}</aside>
    </div>
  )
}
