import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext } from '../../context/language.context';

export default function HeroComponent() {
  const { t } = useContext<any>(LanguageContext);
  return (
    <section className="bg-blue-primary-light flex justify-center md:justify-between  items-center px-6 py-12">
      <div className="hidden md:block">
      <Image
          src="/images/hero-illustration.svg"
          width={350}
          height={350}
          alt="Hero illustration"
        />
      </div>
      <div className="text-gray-800 flex flex-col items-start w-full md:w-2/5">
        <Image
          src="/images/ogtic-full-logo.png"
          width="200px"
          height="74px"
          alt="OGTIC logo"
        />
        <p className="my-6 font-medium text-2xl">{t.hero.ctaDescription}</p>
        <Link href="/apis">
          <a className="bg-green-600 px-4 py-2 rounded-md shadow-md">
            {t.hero.ctaButton}
          </a>
        </Link>
      </div>
    </section>
  );
}
