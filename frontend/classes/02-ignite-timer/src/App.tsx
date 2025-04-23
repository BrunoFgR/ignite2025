import { BrowserRouter } from 'react-router'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/default'
import { GlobalStyles } from './global'
import { Router } from './Router'
import { CycleContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
