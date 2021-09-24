import { EffectCallback } from 'hoist-non-react-statics/node_modules/@types/react'
import React, { createContext, useEffect, useState } from 'react'
import { User } from '../models/user.model'
import { getUser } from '../services/user.service'

export const UserContext = createContext({})

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>()

  useEffect(async () => {
    const userData = await getUser()
    setUser(userData)
    return () => {}
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
