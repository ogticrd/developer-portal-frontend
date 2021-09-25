import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { UserContext } from '../../context/user.context'
import { useForm } from 'react-hook-form'
import { User } from '../../models/user.model'
import { updateUser } from '../../services/user.service'
import { UpdateUserDataForm } from '../../models/forms/update-user-data.form'
import { LanguageContext } from '../../context/language.context'

export default function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const { user, setUser }: { user: User; setUser: Function } =
    useContext<any>(UserContext)
  const { t } = useContext<any>(LanguageContext)
  const defaultImageSrc = '/images/no-avatar.png'
  const [image, setImage] = useState(defaultImageSrc)

  const onImageError = (e: any) => {
    e.preventDefault()
    if (image !== defaultImageSrc) {
      setImage(defaultImageSrc)
    }
  }

  useEffect(() => {
    reset(user)
    const imageUrl = user?._links.avatar
    setImage(imageUrl)
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
            <img
              src={image || '/images/no-avatar.png'}
              alt={`${user?.display_name} profile image`}
              width={110}
              height={110}
              className="rounded-md shadow-sm"
              onError={onImageError}
            />
            <div>
              <div className="flex gap-3 mb-2">
                <button
                  type="button"
                  className="bg-blue-primary hover:bg-blue-800 duration-300 py-2 text-sm rounded-md text-white px-8"
                >
                  {t.account.form.loadImage}
                </button>
                <button
                  type="button"
                  className="border border-blue-primary duration-300 py-2 text-sm rounded-md text-blue-primary px-8"
                >
                  {t.account.form.reset}
                </button>
              </div>
              <span className="text-gray-700">{t.account.form.maxSize}</span>
            </div>
          </div>

          <form
            className="grid grid-cols-2 gap-6 my-8"
            onSubmit={handleSubmit && handleSubmit(onSubmit)}
          >
            <span className="col-span-1">
              <label className="block text-gray-500" htmlFor="firstname">
                {t.account.form.firstName}
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder={t.account.form.firstNamePlaceholder}
                className="block border border-gray-200 rounded-md p-2 w-full"
                {...register('firstname', { required: true })}
                defaultValue={user?.first_name}
              />
              {errors.firstname && (
                <span className="text-red-600 text-sm">
                  {t.account.form.fistNameRequired}
                </span>
              )}
            </span>
            <span className="col-span-1">
              <label className="block text-gray-500" htmlFor="lastname">
                {t.account.form.lastName}
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder={t.account.form.lastNamePlaceholder}
                className="block border border-gray-200 rounded-md p-2 w-full"
                {...register('lastname', { required: true })}
                defaultValue={user?.last_name}
              />
              {errors.lastname && (
                <span className="text-red-600 text-sm">
                  {t.account.form.lastNameRequired}
                </span>
              )}
            </span>
            <span className="col-span-1">
              <label className="block text-gray-500" htmlFor="email">
                {t.account.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t.account.form.emailPlaceholder}
                className="block border border-gray-200 rounded-md p-2 w-full"
                {...register('email', {
                  required: true,
                  pattern: emailPattern,
                })}
                defaultValue={user?.email}
              />

              {errors.email?.type === 'required' && (
                <span className="text-red-600 text-sm">
                  {t.account.form.emailRequired}
                </span>
              )}

              {errors.email?.type === 'pattern' && (
                <span className="text-red-600 text-sm">
                  {t.account.form.emailInvalid}
                </span>
              )}
            </span>
            <span className="col-span-1">
              <label className="block text-gray-500" htmlFor="organization">
                {t.account.form.organization}
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder={t.account.form.organizationPlaceholder}
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
                {t.account.form.save}
              </button>
              <button
                type="reset"
                className="border border-blue-primary duration-300 py-2 text-sm rounded-md text-blue-primary px-8"
              >
                {t.account.form.cancel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}