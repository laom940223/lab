import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { AuthContextProvider } from './context/auth-context.tsx'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
              <App />
              </AuthContextProvider>
        </QueryClientProvider>
      </BrowserRouter>

  </React.StrictMode>,
)
