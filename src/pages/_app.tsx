// ** Next Imports
import type { AppProps } from 'next/app'

// ** Theme Imports
import { ThemeProvider } from '@mui/material/styles'
import { GlobalStyles } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import theme from 'theme'
import 'styles/globals.css'

// ** Redux Imports
import { Provider } from 'react-redux'
import { store } from 'store'

// ** Other Imports
import { isMobile } from 'react-device-detect'
import ProtectRoute from 'hooks/withAuth'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={{ backgroundColor: 'blue' }} />
        <CssBaseline />
        <div className={isMobile ? '' : 'container'}>
          <div className={isMobile ? '' : 'wrapper'}>
            <div className={isMobile ? '' : 'content'}>
              <ProtectRoute>
                <Component {...pageProps} />
              </ProtectRoute>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default App
