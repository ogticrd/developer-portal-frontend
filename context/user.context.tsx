import React, { createContext, useEffect, useState } from 'react'
import { User } from '../models/user.model'
import { getUser } from '../services/user.service'

export const UserContext = createContext({})

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const getData = async () => {
      const authToken = localStorage.getItem('auth-token')
      if (authToken) {
        const userData = await getUser()
        setUser(userData)
      }
    }
    getData()
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
