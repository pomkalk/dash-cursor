import type { ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  return <div className="mx-auto w-full max-w-[1340px] px-4 py-4 md:px-6">{children}</div>
}
