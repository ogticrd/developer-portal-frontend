import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function index() {
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

          <form className="flex flex-col gap-6 pt-8 mb-4">
            <span>
              <label className="block text-gray-500" htmlFor="email_field">
                Correo
              </label>
              <input
                className="block border border-gray-200 rounded-md p-2 w-full"
                type="email"
                id="email_field"
                placeholder="johndoe@gmail.com"
              />
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
                placeholder="Su contraseña"
              />
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
            <p className="mb-2">¿Nuevo en nuestra plataforma?</p>
            <Link href="register">
              <a className="text-blue-800 text-lg">Crear una cuenta</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
