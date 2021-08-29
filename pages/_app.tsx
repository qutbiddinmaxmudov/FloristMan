import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from '../store/store'
import Navbar from '../components/Navbar'
import { defaultTheme, GlobalStyles } from '../styles/theme'
import '../styles/fonts/font.css'
import ModalWindow from '../components/ModalWindow'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Head>
        <title>FLORISTMAN | Широкий выбор на любой вкус</title>
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <ModalWindow />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
export default MyApp
