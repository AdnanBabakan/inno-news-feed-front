import '@/assets/css/global.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export default function AppContainer({Component, pageProps}): JSX.Element {
  return <Component {...pageProps} />
}