import React, { useEffect } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import Layout from '../components/layout.component'

import LanguageProvider from '../context/language.context'
import UserProvider from '../context/user.context'
import { ToastContainer } from 'react-toastify'
import Script from 'next/script'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <UserProvider>
        <Head>
          <title>Portal de APIs Dominicano</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <official-header></official-header>
        </Head>

        <Layout>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
      <Script src="https://cdn.jsdelivr.net/gh/opticrd/official-header/main.js"></Script>
    </LanguageProvider>
  )
}
export default MyApp
