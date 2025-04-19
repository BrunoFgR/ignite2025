import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/default'
import { GlobalStyles } from './global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <p>App</p>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
