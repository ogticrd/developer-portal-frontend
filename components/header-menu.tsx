import React, { useContext, useState } from 'react'
import { LanguageContext } from '../context/language.context'
import { MenuItemModel } from '../models/menu-item.model'
import Link from 'next/link'
import LanguageToggle from './language-toggle.component'
import ChangePortal from './change-portal'
import LogoHeader from './logo-header'
import SearchBox from './search-box'


export default function HeaderMenu() {
  const { t } = useContext<any>(LanguageContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems: MenuItemModel[] = [
    {
      label: t.header.menu.apis,

      path: '/apis',
    },
    {
      label: t.header.menu.documentation,

      path: '/docs',
    },
    {
      label: t.header.menu.github,

      path: 'https://github.com/ogticrd/',
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
              <li key={i} className="mr-5 text-white hover:underline uppercase">
                <Link href={item.path}>
                  <a
                    onClick={closeMenu}
                    target={item.external ? '_blank' : '_self'}
                    className="flex"
                  >
                    <span className="text-blue-primary font-medium">{item.label}</span>
                  </a>
                </Link>
              </li>
            )
          })}

          {/* <li>
            {user ? (
              <HeaderUserButton user={user} setUser={setUser} />
            ) : (
              <Link href="/user/login">
                <a className="btn-primary-dark">Acceder</a>
              </Link>
            )}
          </li> */}

        </ul>
      </nav>



      <div className="block md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ccc"
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
              className="h-6 w-6 mx-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ccc"
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
              className="fixed w-full left-0 top-0 bg-blue-primary shadow-2xl p-6"
            >
              <LogoHeader />
              <ChangePortal />

              <ul className="flex flex-col mt-8">
                {menuItems.map((item, i) => {
                  return (
                    <li key={i} className="mr-5 text-white my-2">
                      <Link href={item.path}>
                        <a
                          target={item.external ? '_blank' : '_self'}
                          className="flex"
                          onClick={closeMenu}
                        >
                          <span className="ml-2">{item.label}</span>
                        </a>
                      </Link>
                    </li>
                  )
                })}
                <li>

                  <LanguageToggle />
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>

      {!isMenuOpen && <div className="w-full md:w-80">
        <SearchBox />
      </div>}
    </>
  )
}
