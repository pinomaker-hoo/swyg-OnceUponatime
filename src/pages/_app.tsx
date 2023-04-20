// ** Next Imports
import type { AppProps } from 'next/app'

// ** Theme Imports
import { ThemeProvider } from '@mui/material/styles'
import { GlobalStyles } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import theme from 'theme'
import 'styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ backgroundColor: 'blue' }} />
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
