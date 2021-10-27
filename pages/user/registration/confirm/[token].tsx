import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { RegisterForm } from '../../../../models/forms/register.form'
import { useRouter } from 'next/dist/client/router'
import { parseJwt } from '../../../../utils/parseJwt'
import { finalizeRegistration } from '../../../../services/auth.service'
import { toast } from 'react-toastify'

export default function Complete({ token }) {
  const [loading, setLoading] = useState<boolean>()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  const { email, firstname, lastname } = parseJwt(token as string)

  const password = useRef('')
  password.current = watch('password', '')

  const onSubmit = async (data: RegisterForm) => {
    if (Object.keys(errors).length) {
      return
    }

    setLoading(true)
    const res = await finalizeRegistration(
      token as string,
      data.password,
      firstname,
      lastname,
    )
    setLoading(false)
    if (res?.id) {
      router.push('/user/login')
      toast.success('Registration successful!')
      return
    }
    toast.error('Registration failed!')
  }

  return (
    <div className="bg-blue-primary-light">
      <div className="container mx-auto flex items-center justify-center py-20">
        <div className="p-10 bg-white shadow-lg rounded-md">
          <div className="flex items-center gap-2 justify-center mb-4">
            <h2 className="text-3xl font-semibold text-gray-700">
              ¡Completar registro!
            </h2>
            <Image
              src="/icons/hi-hand.svg"
              height={35}
              width={35}
              alt="Hi icon"
            />
          </div>
          <h3 className="text-gray-600 text-lg text-center">
            Crea una contraseña para tu cuenta
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 pt-8 mb-4"
          >
            <span>
              <label className="block text-gray-500" htmlFor="email_field">
                Correo
              </label>
              <input
                className="block border border-gray-200 rounded-md p-2 w-full"
                type="email"
                id="email_field"
                placeholder="johndoe@gmail.com"
                disabled
                readOnly
                defaultValue={email}
              />
              {errors.email?.type === 'required' && (
                <span className="text-red-600 text-sm">
                  Debe especificar su correo electrónico
                </span>
              )}

              {errors.email?.type === 'pattern' && (
                <span className="text-red-600 text-sm">
                  Este correo no es válido
                </span>
              )}
            </span>

            <span>
              <label className="block text-gray-500" htmlFor="password_field">
                Contraseña
              </label>

              <input
                className="block border border-gray-200 rounded-md p-2 w-full"
                type="password"
                id="password_field"
                placeholder="********"
                {...register('password', { required: true, minLength: 8 })}
              />
              {errors.password?.type === 'required' && (
                <span className="text-red-600 text-sm">
                  Debe especificar su contraseña
                </span>
              )}
              {errors.password?.type === 'minLength' && (
                <span className="text-red-600 text-sm">
                  Debe tener al menos 8 digitos
                </span>
              )}
            </span>

            <span>
              <label
                className="block text-gray-500"
                htmlFor="re_password_field"
              >
                Confirmar Contraseña
              </label>

              <input
                className="block border border-gray-200 rounded-md p-2 w-full"
                type="password"
                id="re_password_field"
                placeholder="********"
                {...register('rePassword', {
                  required: true,
                  validate: (value) => value === password.current,
                })}
              />
              {errors.rePassword?.type === 'required' && (
                <span className="text-red-600 text-sm">
                  Debe repetir su contraseña
                </span>
              )}
              {errors.rePassword?.type === 'validate' && (
                <span className="text-red-600 text-sm">
                  Las contraseñas no coinciden
                </span>
              )}
            </span>

            <button
              disabled={loading}
              className={`${
                loading ? 'bg-gray-400' : 'bg-blue-primary'
              } text-white rounded-md py-2`}
            >
              Completar registro
            </button>
          </form>

          <div className="text-center">
            <p className="mb-2">¿Ya tienes una cuenta?</p>
            <Link href="/user/login">
              <a className="text-blue-800 text-lg">Iniciar Sesión</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const { token } = params
  return {
    props: {
      token,
    },
  }
}
