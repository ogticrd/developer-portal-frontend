import { RegisterForm } from '../models/forms/register.form'
import { post } from './http/http.service'

const origin =
  typeof window !== 'undefined'
    ? `${window?.location?.origin}/server`
    : 'http://localhost:8083'
const apiUrl = `${origin}/portal/environments/DEFAULT/`

export const createAccount = async (
  registerForm: RegisterForm,
): Promise<any> => {
  const { data } = await post(`${apiUrl}users/registration`, {
    firstname: registerForm.firstName,
    lastname: registerForm.lastName,
    email: registerForm.email,
    newsletter: true,
    password: registerForm.password,
  })

  const res = await finalizeRegistration(data, registerForm.password)
  return res
}

const finalizeRegistration = async (
  params: any,
  password: string,
): Promise<any> => {
  const { data } = await post(`${apiUrl}users/registration/_finalize`, {
    token: params.id,
    firstname: params.first_name,
    lastname: params.last_name,
    password,
  })

  return data
}

export const login = async (username: string, password: string) => {
  const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
  const { data } = await post(
    `${apiUrl}auth/login`,
    {},
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    },
  )

  return data
}
