import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import { en } from '../../public/locales/en';
import { es } from '../../public/locales/es';

export default function HeroComponent() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : es;

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
