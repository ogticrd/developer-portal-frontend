import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext } from '../../context/language.context';

export default function HeroComponent() {
  const { t } = useContext<any>(LanguageContext);
  return (
    <section className="bg-blue-primary-light flex justify-between items-center px-6 py-12">
      <Image
        src="/images/ogtic-full-logo.png"
        width="200px"
        height="74px"
        alt="OGTIC logo"
      />
      <div className="text-white flex flex-col items-start w-2/5">
        <h3 className="text-2xl mb-4">{t.hero.ctaTitle}</h3>
        <p className="mb-4">{t.hero.ctaDescription}</p>
        <Link href="/apis">
          <a className="bg-green-600 px-4 py-2 rounded-md shadow-md">
            {t.hero.ctaButton}
          </a>
        </Link>
      </div>
    </section>
  );
}
