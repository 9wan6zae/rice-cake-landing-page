import AppFooter from '../components/appFooter'
import AppHeader from '../components/appHeader'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
      <AppFooter />
    </>
  )
}

export default MyApp
