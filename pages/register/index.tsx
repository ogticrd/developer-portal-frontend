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
              ¡Registrate!
            </h2>
            <Image
              src="/icons/hi-hand.svg"
              height={35}
              width={35}
              alt="Hi icon"
            />
          </div>
          <h3 className="text-gray-600 text-lg text-center">
            Inicie sesión en su cuenta para utilizar las APIs <br />
            ¡Haz el uso de APIs fácil y simple!
          </h3>

          <form className="flex flex-col gap-6 pt-8 mb-4">
            <span>
              <label className="block text-gray-500" htmlFor="name_field">
                Nombre
              </label>
              <input
                className="block border border-gray-200 rounded-md p-2 w-full"
                type="text"
                id="name_field"
                placeholder="John"
              />
            </span>
            <span>
              <label className="block text-gray-500" htmlFor="last_name_field">
                Apellido
              </label>
              <input
                className="block border border-gray-200 rounded-md p-2 w-full"
                type="text"
                id="last_name_field"
                placeholder="Doe"
              />
            </span>
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
              <label className="block text-gray-500" htmlFor="org_name_field">
                Nombre de tu organización o Institucion
              </label>
              <input
                className="block border border-gray-200 rounded-md p-2 w-full"
                type="text"
                id="org_name_field"
                placeholder="Tu organización"
              />
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
              />
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
              />
            </span>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                Estoy de acuerdo con <br />
                <Link href="conditions">
                  <a className="text-blue-800 text-lg">
                    Terminos de privacidad y policitcas
                  </a>
                </Link>
              </label>
            </div>
            <button className="bg-blue-primary text-white rounded-md py-2">
              Iniciar sesión
            </button>
          </form>

          <div className="text-center">
            <p className="mb-2">¿Ya tienes una cuenta?</p>
            <Link href="login">
              <a className="text-blue-800 text-lg">Iniciar Sesión</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
