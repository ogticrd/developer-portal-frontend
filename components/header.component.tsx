import Link from 'next/link'
import Image from 'next/image'
import React, { useContext } from 'react'
import { LanguageContext } from '../context/language.context'
import HeaderMenu from './header-menu'
import SearchBox from './search-box'
import LanguageToggle from './language-toggle.component'

export default function HeaderComponent() {
  const { t } = useContext<any>(LanguageContext)

  return (
    <header className="bg-blue-primary sticky top-0 z-20">

      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <a className="flex items-center gap-4" title={t.header.home}>
              <div className='border-r pr-4 border-gray-400'>

                <Image
                  src="/images/gob-icon.svg"
                  width={30}
                  height={30}
                  alt="Government logo"
                />
              </div>
              <h2 className='text-white'>{t.header.title} <br /> <b> {t.header.subtitle}</b></h2>
            </a>
          </Link>
        </div>
        <div className='flex gap-8 text-white topbar-right'>
          <span>
            <p className='py-4 flex items-center'>{t.header.menu.designers}</p>
          </span>
          <span className="border-t-2 border-blue-primary-light">
            <p className='py-4 flex items-center'>{t.header.menu.developers}</p>
          </span>
          <div className="p-4 flex items-center border-l border-gray-400">

            <LanguageToggle />
          </div>

        </div>
      </div>
      <div className='bg-white py-4 shadow'>
        <div className="container mx-auto flex items-center justify-between">

          <HeaderMenu />
          <div className="w-80">
            <SearchBox />
          </div>
        </div>
      </div>
    </header>
  )
}
