import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Navbar from '../components/Navbar'
import { defaultTheme, GlobalStyles } from '../styles/theme'
import '../styles/fonts/font.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>FLORISTMAN | Широкий выбор на любой вкус</title>
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
