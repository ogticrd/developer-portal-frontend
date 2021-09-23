import React, { createContext, useEffect, useState } from 'react'
import { UserResponse } from '../models/user-response'
import { getUser } from '../services/user.service'

export const UserContext = createContext({})

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserResponse>()

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
