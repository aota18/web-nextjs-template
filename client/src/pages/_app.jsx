import '@/styles/tailwind.css'
import 'focus-visible'
import { appWithTranslation } from 'next-i18next'
import { Analytics } from '@vercel/analytics/react'
import { CssBaseline, GeistProvider, Themes } from '@geist-ui/core'

/* Custom Break Points */

const breakpoints = {
  xs: { min: '0', max: '650px' },
  sm: { min: '650px', max: '768px' },
  md: { min: '768px', max: '1024px' },
  lg: { min: '1024px', max: '1280px' },
  xl: { min: '1280px', max: '1536px' },
  '2xl': { min: '1536px', max: '10000px' },
}

function App({ Component, pageProps }) {
  const myTheme = Themes.createFromLight({
    type: 'myTheme',
    breakpoints,
  })

  return (
    <GeistProvider themes={[myTheme]} themeType="myTheme">
      <CssBaseline />
      <Component {...pageProps} />
      <Analytics />
    </GeistProvider>
  )
}

export default appWithTranslation(App)
