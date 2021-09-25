import { User } from '../models/user.model'
import { get, put } from './http/http.service'

export const getUser = async (): Promise<User> => {
  const { data } = await get('user')
  return data
}

export const updateUser = async (user: User): Promise<User> => {
  const { data } = await put('user', user)
  return data
}


