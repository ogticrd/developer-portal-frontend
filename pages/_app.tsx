import React from 'react'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Layout from '../components/layout.component'
import LanguageProvider from '../context/language.context'
import Head from 'next/head'
import UserProvider from '../context/user.context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <UserProvider>
        <Head>
          <title>Developer portal</title>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins"
            rel="stylesheet"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </LanguageProvider>
  )
}
export default MyApp
