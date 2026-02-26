import { useEffect } from 'react'
import { DocumentsPage } from './blocks/DocumentsPage'
import { themeStore } from './stores/themeStore'

function App() {
  useEffect(() => {
    themeStore.initialize()
  }, [])

  return <DocumentsPage />
}

export default App
