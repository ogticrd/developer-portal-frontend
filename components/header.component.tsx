import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { LanguageContext } from '../context/language.context';
import HeaderMenu from './header-menu';

export default function HeaderComponent() {
  const { t } = useContext<any>(LanguageContext);

  return (
    <header className="bg-blue-primary sticky top-0 z-20">
      <div className="container mx-auto flex px-3 md:px-12 py-1 items-center justify-between">
        <div>
          <Link href="/">
            <a title={t.header.home}>
              <Image
                src="/images/logo-ogtic-horizontal-color-white.png"
                width={109}
                height={52}
                alt="OGTIC logo"
              />
            </a>
          </Link>
        </div>
        <HeaderMenu/>
      </div>
    </header>
  );
}
