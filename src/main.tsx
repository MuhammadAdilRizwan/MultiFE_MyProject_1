import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CustomerApp from './customer/App.tsx'
import StoreDashboardPage from './store/dashboard/page.tsx'

function AppRouter() {
  const path = window.location.pathname.replace(/\/+$/, '')
  const storePath = '/multife-local/store'

  if (path === storePath || path.endsWith('/store')) {
    return <StoreDashboardPage />
  }

  return <CustomerApp />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
