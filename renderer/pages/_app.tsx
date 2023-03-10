import Head from 'next/head'
import type { AppProps } from 'next/app'

import { CssBaseline, ThemeProvider } from '@mui/material'

import type { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

import Layout from '@components/layout'
import theme from '@lib/theme'
import createEmotionCache from '@lib/create-emotion-cache'

const clientSideEmotionCache = createEmotionCache()

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const {Component, pageProps, emotionCache = clientSideEmotionCache} = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}
