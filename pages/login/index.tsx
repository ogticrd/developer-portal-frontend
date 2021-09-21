import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { LoginForm } from '../../models/forms/login.form'
import { login } from '../../services/auth.service'
import { useRouter } from 'next/dist/client/router'

export default function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [invalidCredentials, setInvalidCredentials] = useState<boolean>(false)
  const router = useRouter()
  const onSubmit = async (data: LoginForm) => {
    if (Object.keys(errors).length) {
      return
    }
    const res = await login(data.email, data.password)
    if (res?.token) {
      localStorage.setItem('auth-token', res.token)
      setInvalidCredentials(false)
      router.push('/')
    } else {
      setInvalidCredentials(true)
    }
  }
  return (
    <div className="bg-blue-primary-light">
      <div className="container mx-auto flex items-center justify-center py-20">
        <div className="p-10 bg-white shadow-lg rounded-md">
          <div className="flex items-center gap-4 justify-center mb-4">
            <h2 className="text-3xl font-semibold text-gray-700">
              ¡Bienvenido!
            </h2>
            <Image
              src="/icons/hi-hand.svg"
              height={35}
              width={35}
              alt="Hi icon"
            />
          </div>
          <h3 className="text-gray-600 text-lg">
            Inicie sesión en su cuenta para utilizar las APIs
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 pt-8 mb-4"
          >
            {invalidCredentials && (
              <span className="text-red-600 text-center">
                Usuario o contraseña incorrecta
              </span>
            )}
            <span>
              <label className="block text-gray-500" htmlFor="email_field">
                Correo
              </label>
              <input
                className="block border border-gray-200 rounded-md p-2 w-full"
                type="text"
                id="email_field"
                placeholder="johndoe@gmail.com"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-red-600 text-sm">
                  Debe especificar su email
                </span>
              )}
            </span>
            <span>
              <span className="flex justify-between">
                <label className="block text-gray-500" htmlFor="password_field">
                  Contraseña
                </label>
                <Link href="recover-password">
                  <a className="text-blue-800">Recuperar contraseña</a>
                </Link>
              </span>
              <input
                className="block border border-gray-200 rounded-md p-2 w-full"
                type="password"
                id="password_field"
                placeholder="*********"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className="text-red-600 text-sm">
                  Debe especificar su contraseña
                </span>
              )}
            </span>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Recordarme</label>
            </div>

            <button className="bg-blue-primary text-white rounded-md py-2">
              Iniciar sesión
            </button>
          </form>

          <div className="text-center">
            <p className="mb-2 text-gray-600">¿Nuevo en nuestra plataforma?</p>
            <Link href="register">
              <a className="text-blue-800 text-lg">Crear una cuenta</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
