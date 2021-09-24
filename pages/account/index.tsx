import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { UserContext } from '../../context/user.context'
import { useForm } from 'react-hook-form'
import { User } from '../../models/user.model'
import { updateUser } from '../../services/user.service'
import { UpdateUserDataForm } from '../../models/forms/update-user-data.form'

export default function index() {
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const { user, setUser }: { user: User; setUser: Function } =
    useContext<any>(UserContext)

  useEffect(() => {
    reset(user)
  }, [user])

  const onSubmit = async (data: UpdateUserDataForm) => {
    const newUser = await updateUser({
      id: user.id,
      email: data.email,
      first_name: data.firstname,
      last_name: data.lastname,
      organization: data.organization,
    })

    setUser(newUser)
  }

  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/

  return (
    <div className="bg-blue-primary-light py-8">
      <div className="container mx-auto">
        <div className="card">
          <div className="flex gap-8 items-center">
            <Image
              src="/images/no-avatar.png"
              alt={`a${1}`}
              width={110}
              height={110}
              className="rounded-md"
            />
            <div>
              <div className="flex gap-3 mb-2">
                <button
                  type="button"
                  className="bg-blue-primary hover:bg-blue-800 duration-300 py-2 text-sm rounded-md text-white px-8"
                >
                  Subit imagen
                </button>
                <button
                  type="button"
                  className="border border-blue-primary duration-300 py-2 text-sm rounded-md text-blue-primary px-8"
                >
                  Reset
                </button>
              </div>
              <span className="text-gray-700">
                Formato JPG, GIF or PNG. Tamaño Maximo of 800kB
              </span>
            </div>
          </div>

          <form
            className="grid grid-cols-2 gap-6 my-8"
            onSubmit={handleSubmit && handleSubmit(onSubmit)}
          >
            <span className="col-span-1">
              <label className="block text-gray-500" htmlFor="firstname">
                Nombre
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="John"
                className="block border border-gray-200 rounded-md p-2 w-full"
                {...register('firstname', { required: true })}
                defaultValue={user?.first_name}
              />
              {errors.firstname && (
                <span className="text-red-600 text-sm">
                  Debe especificar su nombre
                </span>
              )}
            </span>
            <span className="col-span-1">
              <label className="block text-gray-500" htmlFor="lastname">
                Apellido
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Doe"
                className="block border border-gray-200 rounded-md p-2 w-full"
                {...register('lastname', { required: true })}
                defaultValue={user?.last_name}
              />
              {errors.lastname && (
                <span className="text-red-600 text-sm">
                  Debe especificar su apellido
                </span>
              )}
            </span>
            <span className="col-span-1">
              <label className="block text-gray-500" htmlFor="email">
                Correo
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="granger007@hogward.com"
                className="block border border-gray-200 rounded-md p-2 w-full"
                {...register('email', {
                  required: true,
                  pattern: emailPattern,
                })}
                defaultValue={user?.email}
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
            <span className="col-span-1">
              <label className="block text-gray-500" htmlFor="organization">
                Empresa
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder="Clevision Technologies"
                className="block border border-gray-200 rounded-md p-2 w-full"
                {...register('organization')}
                defaultValue={user?.organization}
              />
            </span>
            <div className="flex gap-3 mb-2">
              <button
                type="submit"
                className="bg-blue-primary hover:bg-blue-800 duration-300 py-2 text-sm rounded-md text-white px-8"
              >
                Guardar cambios
              </button>
              <button
                type="reset"
                className="border border-blue-primary duration-300 py-2 text-sm rounded-md text-blue-primary px-8"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
