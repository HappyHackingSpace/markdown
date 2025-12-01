import * as React from 'react'

import '@happyhackingspace/theme/fonts/reg-ital-bold.css'
import theme from '@happyhackingspace/theme'
import { ThemeProvider } from 'theme-ui'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
