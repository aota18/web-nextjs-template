import '@/styles/tailwind.css'
import 'focus-visible'
import { appWithTranslation } from 'next-i18next'
import { Analytics } from '@vercel/analytics/react'
import { CssBaseline, GeistProvider } from '@geist-ui/core'

function App({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
      <Analytics />
    </GeistProvider>
  )
}

export default appWithTranslation(App)
