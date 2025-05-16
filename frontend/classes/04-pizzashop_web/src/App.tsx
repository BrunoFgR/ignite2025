import './global.css'

import { Helmet, HelmetProvider } from '@dr.pogodin/react-helmet'
import { RouterProvider } from 'react-router'

import { Toaster } from '@/components/ui/sonner'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={router} />
      <Toaster richColors />
    </HelmetProvider>
  )
}
