import axios from 'axios'
import { toast } from 'react-toastify'

const origin = '/server'
const baseUrl = `${origin}/portal/environments/DEFAULT/`

export const get = async (path: string): Promise<any> => {
  const token =
    typeof window !== 'undefined'
      ? window?.localStorage?.getItem('auth-token')
      : ''

  const headers = {}
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  try {
    const res = await axios.get(baseUrl + path, { headers })
    return res
  } catch (err) {
    handleError(err)
    return { err }
  }
}

export const post = async (
  path: string,
  payload: any = null,
  options = null,
): Promise<any> => {
  const token =
    typeof window !== 'undefined'
      ? window?.localStorage?.getItem('auth-token')
      : ''

  const headers = {}
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  try {
    const res = await axios.post(baseUrl + path, payload, { headers })
    return res
  } catch (err) {
    handleError(err)
    return { err }
  }
}

export const put = async (
  path: string,
  payload: any = null,
  options = null,
): Promise<any> => {
  const token =
    typeof window !== 'undefined'
      ? window?.localStorage?.getItem('auth-token')
      : ''

  const headers = {}
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  try {
    const res = await axios.put(baseUrl + path, payload, { headers })
    return res
  } catch (err) {
    handleError(err)
    return { err }
  }
}

const handleError = (error: any) => {
  console.error(error)
  // toast.error("We're sorry, something went wrong")
}
