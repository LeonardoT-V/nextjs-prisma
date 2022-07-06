import '../styles/globals.css'
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SnackbarProvider hideIconVariant>
        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  )

}

export default MyApp
