import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '../context/language.context'

export default function Footer() {
  const { t } = useContext<any>(LanguageContext)

  return (
    <footer className="bg-blue-primary p-10 w-full">
      <div className="container mx-auto grid grid-cols-12 items-center gap-y-4 h-36">
        <div className="col-span-12 md:col-span-3 mx-auto">
          <Image
            src="/images/logo-ogtic-white.png"
            width={213 * 0.9}
            height={88 * 0.9}
            alt="OGTIC logo"
          />
        </div>
        <div className="col-span-12 md:col-span-3 mx-auto">
          <Image
            src="/images/minimal-logo-white.png"
            width={70}
            height={70}
            alt="OGTIC logo"
          />
        </div>
        <ul className="col-span-12 md:col-span-3 text-white mx-auto text-center md:text-left">
          <li className="hover:underline">
            <Link href="/apis">
              <a>{t.footer.apis}</a>
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/docs">
              <a>{t.footer.documentation}</a>
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/">
              <a>{t.footer.terms}</a>
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/">
              <a>{t.footer.privacy}</a>
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/">
              <a>{t.footer.contact}</a>
            </Link>
          </li>
        </ul>

        <div className="col-span-12 md:col-span-3 flex flex-row items-center gap-4 mx-auto">
          <p className="text-white">{t.footer.follow}</p>
          <Link href="https://twitter.com/OGTICRDO">
            <a title="Twitter" target="_blank">
              <Image
                src="/icons/twitter.svg"
                width={32}
                height={32}
                alt="Twitter"
              />
            </a>
          </Link>
          <Link href="https://github.com/opticrd">
            <a title="GitHub" target="_blank">
              <Image
                src="/icons/github.svg"
                width={32}
                height={40}
                alt="Github"
              />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
