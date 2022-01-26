import Link from 'next/link'
import Image from 'next/image'
import React, { useContext } from 'react'
import { LanguageContext } from '../context/language.context'
import HeaderMenu from './header-menu'
import { useRouter } from 'next/router'
import SearchBox from './search-box'

export default function HeaderComponent() {
  const { t } = useContext<any>(LanguageContext)
  const router = useRouter()

  return (
    <header className="bg-blue-primary sticky top-0 z-20">

      <div className="container mx-auto flex px-8 py-1 items-center justify-between">
        <div>
          <Link href="/">
            <a className="flex items-center gap-4" title={t.header.home}>
              <Image
                src="/images/gob-icon.svg"
                width={40}
                height={40}
                alt="Government logo"
              />
              <span className="text-white text-xl"> |</span>
              <Image
                src="/images/logo-ogtic-horizontal-color-white.svg"
                width={109}
                height={52}
                alt="OGTIC logo"
              />
            </a>
          </Link>
        </div>
        {!['/', '/apis'].includes(router.asPath) && <SearchBox />}
        <HeaderMenu />
      </div>
    </header>
  )
}
