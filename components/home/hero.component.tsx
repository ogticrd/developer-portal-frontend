import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext } from '../../context/language.context';
import SearchBox from '../search-box';

export default function HeroComponent() {
  const { t } = useContext<any>(LanguageContext);
  return (
    <div className="bg-blue-primary-light">
      <section className="container mx-auto flex justify-between  items-center py-4">
        <div className="text-gray-800 flex flex-col items-start w-full md:w-1/2">

          <p className="my-6 font-bold text-4xl text-blue-primary leading-relaxed">{t.hero.ctaDescription}</p>
          <div className="flex flex-col md:flex-row items-center gap-4">

            <Link href="/apis">
              <a className="view-all-apis-button border-2 flex items-center justify-center border-blue-primary bg-blue-primary hover:bg-blue-900 text-white duration-300">
                {t.hero.viewAll}
              </a>
            </Link>
          </div>
        </div>

        <div className="hidden md:block w-1/2 text-center">
          <Image
            src="/images/hero-illustration.svg"
            width={400}
            height={400}
            alt="Hero illustration"
          />
        </div>

      </section>
    </div>
  );
}
