import { BrowserRouter } from 'react-router'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/default'
import { GlobalStyles } from './global'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
