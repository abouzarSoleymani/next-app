import React from 'react'
import '../styles/globals.css'
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import theme from '../config/theme'
import store from '../config/store'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
