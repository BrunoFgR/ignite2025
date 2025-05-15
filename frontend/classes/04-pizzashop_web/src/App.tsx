import './global.css'

import { Button } from './components/ui/button'

export function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Pizza Shop</h1>
      <p className="text-xl text-gray-600">Welcome to our pizza shop!</p>
      <Button>Enviar</Button>
    </div>
  )
}
