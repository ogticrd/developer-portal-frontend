import React, { useContext, useEffect, useState } from 'react'
import { User } from '../models/user.model'
import Image from 'next/image'
import Dropdown from './dropdown'
import Link from 'next/link'
import { LanguageContext } from '../context/language.context'

export default function HeaderUserButton({ user }: { user: User }) {
  const [isOpen, setIsOpen] = useState(false)
  const defaultImageSrc = '/images/no-avatar.png'
  const [imageUrl, setImageUrl] = useState<string>(defaultImageSrc)
  const { t } = useContext<any>(LanguageContext)

  useEffect(() => {
    if (user) {
      setImageUrl(user._links.avatar)
    }
  }, [user])

  const onImageError = (e: any) => {
    e.preventDefault()
    if (imageUrl !== defaultImageSrc) {
      setImageUrl(defaultImageSrc)
    }
  }

  const options = [
    { path: '/account/', text: t.account.myAccount },
    {
      path: '/account/password',
      text: t.account.password,
    },
    {
      path: '/account/apis',
      text: t.account.apis,
    },
  ]

  const signOut = () => {
    window.localStorage.removeItem('auth-token')
    setIsOpen(false)
  }

  return (
    <div>
      <div
        className="flex items-center gap-2 ml-6 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col">
          <span className="text-white capitalize">{user.display_name}</span>
        </div>
        <img
          className="rounded-full"
          src={imageUrl}
          alt={`${user.display_name} profile`}
          height={40}
          width={40}
          onError={onImageError}
        />
      </div>

      {isOpen && (
        <Dropdown onClose={() => setIsOpen(false)} padding={false}>
          <div className="w-60">
            <div className="flex gap-4 p-2 items-center">
              <img
                className="rounded-full h-9 w-9"
                src={imageUrl}
                alt={`${user.display_name} profile`}
                height={35}
                width={35}
                onError={onImageError}
              />
              <div>
                <h3 className="capitalize text-sm">{user.display_name}</h3>
                <span className="text-xs text-gray-600">{user.email}</span>
              </div>
            </div>

            <ul>
              {options.map((o) => (
                <li key={o.path}>
                  <Link href={o.path}>
                    <a
                      className="hover:bg-blue-400 w-full block py-1 px-6"
                      onClick={() => setIsOpen(false)}
                    >
                      {o.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={signOut}
              className="w-full border-t text-yellow-600 py-2 mt-3"
            >
              {t.account.signOut}
            </button>
          </div>
        </Dropdown>
      )}
    </div>
  )
}
