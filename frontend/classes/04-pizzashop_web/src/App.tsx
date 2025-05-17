import './global.css'

import { Helmet, HelmetProvider } from '@dr.pogodin/react-helmet'
import { RouterProvider } from 'react-router'

import { Toaster } from '@/components/ui/sonner'

import { router } from './routes'
import { ThemeProvider } from './theme/theme-provider'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme">
        <Helmet titleTemplate="%s | pizza.shop" />
        <RouterProvider router={router} />
        <Toaster richColors />
      </ThemeProvider>
    </HelmetProvider>
  )
}
