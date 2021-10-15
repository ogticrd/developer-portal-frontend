import React, { useContext, useState } from 'react'
import { LanguageContext } from '../context/language.context'
import { MenuItemModel } from '../models/menu-item.model'
import Image from 'next/image'
import Link from 'next/link'

import LanguageToggle from './language-toggle.component'
import { UserContext } from '../context/user.context'
import HeaderUserButton from './header-user-button'

export default function HeaderMenu() {
  const { t } = useContext<any>(LanguageContext)
  const { user, setUser } = useContext<any>(UserContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems: MenuItemModel[] = [
    {
      label: t.header.menu.apis,
      icon: 'clouds.svg',
      path: '/apis',
    },
    {
      label: t.header.menu.documentation,
      icon: 'docs.svg',
      path: '/docs',
    },
    {
      label: t.header.menu.github,
      icon: 'github.svg',
      path: 'https://github.com/opticrd/',
      external: true,
    },
  ]

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex items-center">
          {menuItems.map((item, i) => {
            return (
              <li key={i} className="mr-5 text-white hover:underline">
                <Link href={item.path}>
                  <a
                    onClick={closeMenu}
                    target={item.external ? '_blank' : '_self'}
                    className="flex"
                  >
                    <Image
                      src={'/icons/' + item.icon}
                      width={18}
                      height={18}
                      alt={item.label + ' icon'}
                    />
                    <span className="ml-2">{item.label}</span>
                  </a>
                </Link>
              </li>
            )
          })}
          <li>
            <LanguageToggle closeMenu={closeMenu} />
          </li>

          <li>
            {user ? (
              <HeaderUserButton user={user} setUser={setUser} />
            ) : (
              <Link href="/login">
                <a className="btn-primary-dark">Acceder</a>
              </Link>
            )}
          </li>
        </ul>
      </nav>

      <div className="block md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {isMenuOpen && (
          <div
            onClick={closeMenu}
            className=" fixed w-screen h-screen top-0 left-0"
          >
            <nav
              onClick={(e) => e.stopPropagation()}
              className="fixed w-full left-0 top-16 bg-blue-primary shadow-2xl p-6"
            >
              <ul className="flex flex-col">
                {menuItems.map((item, i) => {
                  return (
                    <li key={i} className="mr-5 text-white my-2">
                      <Link href={item.path}>
                        <a
                          target={item.external ? '_blank' : '_self'}
                          className="flex"
                          onClick={closeMenu}
                        >
                          <Image
                            src={'/icons/' + item.icon}
                            width={18}
                            height={18}
                            alt={item.label + ' icon'}
                          />
                          <span className="ml-2">{item.label}</span>
                        </a>
                      </Link>
                    </li>
                  )
                })}
                <li>
                  <LanguageToggle closeMenu={closeMenu} />
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  )
}
