import '../src/globals.css'
import type { AppProps } from 'next/app'
import Overlay from '../src/components/overlays'


// app overide to wrap the pages into the overly component
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Overlay>
    <Component {...pageProps} />
  </Overlay>
  )
}

export default MyApp
