import UserProvider from '../context/user.context'
import { UserResponse } from '../models/user-response'
import { get } from './http/http.service'

export const getUser = async (): Promise<UserResponse> => {
  const { data } = await get('user')
  return data
}
