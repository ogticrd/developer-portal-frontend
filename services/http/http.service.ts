import axios from 'axios'
import { toast } from 'react-toastify'

const origin =
  typeof window !== 'undefined' ? '/server' : 'http://localhost:8083'
const baseUrl = `${origin}/portal/environments/DEFAULT/`

export const get = async (path: string): Promise<any> => {
  const token =
    typeof window !== 'undefined'
      ? window?.localStorage?.getItem('auth-token')
      : ''

  const headers = {
    Authorization: token ? `Bearer ${token}` : null,
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
  try {
    const res = await axios.post(baseUrl + path, payload, options)
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

  const headers = {
    Authorization: token ? `Bearer ${token}` : null,
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
  toast.error("We're sorry, something went wrong")
}
