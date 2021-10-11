import { useRouter } from 'next/dist/client/router'
import React, { createContext, useContext, useEffect } from 'react'
import { UserContext } from './user.context'

export const ProtectedRouteContext = createContext({})

const ProtectedRouteProvider = ({ children }: any) => {
  const router = useRouter()
  const { user } = useContext<any>(UserContext)

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
    return () => {}
  }, [user, router])

  return (
    <ProtectedRouteContext.Provider value={null}>
      {children}
    </ProtectedRouteContext.Provider>
  )
}

export default ProtectedRouteProvider
