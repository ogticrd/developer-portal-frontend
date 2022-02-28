import { useRouter } from 'next/dist/client/router'
import React, { createContext } from 'react'
import { en } from '../public/locales/en'
import { es } from '../public/locales/es'

export const LanguageContext = createContext({})

const LanguageProvider = ({ children }: any) => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'es' ? es : en

  return (
    <LanguageContext.Provider
      value={{
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
