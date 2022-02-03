import Link from 'next/link'
import Image from 'next/image'
import React, { useContext } from 'react'
import { LanguageContext } from '../context/language.context'
import HeaderMenu from './header-menu'
import SearchBox from './search-box'
import ChangePortal from './change-portal'
import LogoHeader from './logo-header'

export default function HeaderComponent() {
  const { t } = useContext<any>(LanguageContext)

  return (
    <header className="bg-blue-primary relative md:sticky top-0 z-20">

      <div className="container mx-4 md:mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
        <LogoHeader />
        <div className="hidden md:block">

          <ChangePortal />
        </div>

      </div>
      <div className='bg-white py-4 shadow'>
        <div className="container mx-auto flex items-center justify-between">

          <HeaderMenu />

        </div>
      </div>
    </header>
  )
}
