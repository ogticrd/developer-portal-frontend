import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext } from '../../context/language.context';
import SearchBox from '../search-box';

export default function HeroComponent() {
  const { t } = useContext<any>(LanguageContext);
  return (
    <div className="bg-blue-primary-light">
      <section className="container mx-auto flex justify-center md:justify-between  items-center px-6 py-12">
        <div className="hidden md:block">
          <Image
            src="/images/hero-illustration.svg"
            width={350}
            height={350}
            alt="Hero illustration"
          />
        </div>
        <div className="text-gray-800 flex flex-col items-start w-full md:w-1/2">
          <Image
            src="/images/ogtic-full-logo.png"
            width="200px"
            height="74px"
            alt="OGTIC logo"
          />
          <p className="my-6 font-medium text-2xl">{t.hero.ctaDescription}</p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <SearchBox />
            <Link href="/apis">
              <a className="w-1/2 md:w-32 border-2 flex items-center justify-center border-blue-primary text-blue-primary   h-10 rounded-md hover:bg-blue-900 hover:text-white duration-300">
                {t.hero.viewAll}
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
