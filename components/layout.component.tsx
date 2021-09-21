import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import Footer from './footer'
import HeaderComponent from './header.component'
import PageLoadingComponent from './page-loading.component'

export default function Layout({ children }: any) {
  const router = useRouter()
  const [routeChanging, setRouteChanging] = useState(false)

  useEffect(() => {
    const handleRouteChangeStart = () => setRouteChanging(true)
    const handleRouteChangeComplete = () => setRouteChanging(false)

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])

  return (
    <div>
      {routeChanging && <PageLoadingComponent />}
      <HeaderComponent />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
