import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '../context/language.context'

export default function Footer() {
  const { t } = useContext<any>(LanguageContext)
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="bg-blue-primary py-4 w-full">

        <div className="container mx-auto grid grid-cols-12 gap-y-4 mt-4 md:mt-6 mb-20">

          <div className="col-span-10 sm:col-span-5 md:col-span-2 flex flex-col">
            <img
              src="/images/government-full-logo.svg"
              alt="OGTIC logo"
              className='w-1/2 md:w-full'
            />
          </div>

          <div className='col-span-10 sm:col-span-5 md:col-span-2'>

            <div className="h-full border-l border-white w-0 mx-28"></div>
          </div>

          <div className="col-span-10 sm:col-span-5 md:col-span-2 text-sm mx-4 flex flex-col">
            <h3 className='text-white font-medium uppercase mb-8'>{t.footer.help.title}</h3>
            <Link href={'/terms'}>
              <a className='text-white mb-2'>{t.footer.help.terms}</a>
            </Link> <Link href={'/privacy'}>
              <a className='text-white mb-2'>{t.footer.help.privacy}</a>
            </Link> <Link href={'/faq'}>
              <a className='text-white mb-2'>{t.footer.help.faq}</a>
            </Link>
          </div>

          <div className="col-span-10 sm:col-span-5 md:col-span-2 text-sm mx-4 flex flex-col">
            <h3 className='text-white font-medium uppercase mb-8'>{t.footer.info.title}</h3>
            <p className='text-white mb-2'>{t.footer.info.content}</p>
          </div>

          <div className="col-span-10 sm:col-span-5 md:col-span-2 text-sm mx-4 flex flex-col">
            <h3 className='text-white font-medium uppercase mb-8'>{t.footer.call.title}</h3>
            <p className='text-white mb-2'>{t.footer.call.phone}</p>
            <p className='text-white mb-2'>{t.footer.call.fax}</p>
            <p className='text-white mb-2'>{t.footer.call.email}</p>
          </div>


          <div className="col-span-10 sm:col-span-5 md:col-span-2 text-sm mx-4 flex flex-col">
            <h3 className='text-white font-medium uppercase mb-8'>{t.footer.lookForUs.title}</h3>
            <p className='text-white mb-2'>{t.footer.lookForUs.content}</p>
          </div>


        </div>
      </div>
      <div className='bg-white container py-6 text-blue-primary text-sm  flex justify-between flex-col md:flex-row gap-4 p-2'>
        <div className='flex  flex-col md:flex-row gap-4 items-center'>
          <p className='text-center md:text-left'>&copy; {year} {t.footer.copy.rights} {t.footer.copy.poweredBy} </p>
          <img src="/images/logo-ogtic-horizontal-color-black.svg" alt="OGTIC LOGO" className='w-16' />
        </div>
        <div className='flex items-center gap-4  justify-center md:justify-start'>

          <p className='text-blue-primary font-semibold'>{t.footer.copy.follow}</p>


          <Link href={'https://www.facebook.com/Ogticrd/'}>
            <a>
              <img src="/icons/facebook.svg" alt="facebook logo" className='w-4 h-4' />
            </a>
          </Link>

          <Link href={'https://www.youtube.com/channel/UChrVtrHv4vHt3Vwhj2RzlvA/'}>
            <a>
              <img src="/icons/youtube.svg" alt="youtube logo" className='w-4 h-4' />
            </a>
          </Link>
          <Link href={'https://twitter.com/OGTICRDO/'}>
            <a>
              <img src="/icons/twitter.svg" alt="twitter logo" className='w-4 h-4' />
            </a>
          </Link>
          <Link href={'https://www.instagram.com/ogticrd/'}>
            <a>
              <img src="/icons/instagram.svg" alt="instagram logo" className='w-4 h-4' />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
