import { RegisterForm } from '../models/forms/register.form'
import { post } from './http/http.service'

export const createAccount = async (
  registerForm: RegisterForm,
): Promise<any> => {
  const { data } = await post(`users/registration`, {
    firstname: registerForm.firstName,
    lastname: registerForm.lastName,
    email: registerForm.email,
  })

  // const res = await finalizeRegistration(data, registerForm.password)
  return data
}

export const finalizeRegistration = async (
  token: string,
  password: string,
  firstname: string,
  lastname: string,
): Promise<any> => {
  const { data } = await post(`users/registration/_finalize`, {
    token,
    password,
    firstname,
    lastname,
  })

  return data
}

export const login = async (username: string, password: string) => {
  const token = Buffer.from(`${username}:${password}`, 'utf8').toString(
    'base64',
  )
  const { data } = await post(
    `auth/login`,
    {},
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    },
  )
  return data
}
