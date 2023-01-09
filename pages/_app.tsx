import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "Redux/store"
import { NextPageWithLayout } from "types/page"
import "../styles/globals.css"

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  )
}

export default MyApp
