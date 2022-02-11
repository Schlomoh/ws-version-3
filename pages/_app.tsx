import '../src/globals.css'
import type { AppProps } from 'next/app'
import Overlay from '../src/components/overlays'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Overlay>
    <Component {...pageProps} />
  </Overlay>
  )
}

export default MyApp
