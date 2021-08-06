import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { LanguageContext } from '../context/language.context';
import { MenuItemModel } from '../models/menu-item.model';
import LanguageToggle from './language-toggle.component';

export default function HeaderComponent() {
  const { t } = useContext<any>(LanguageContext);

  const menuItems: MenuItemModel[] = [
    {
      label: t.header.menu.apis,
      icon: 'clouds.svg',
      path: '/apis',
    },
    {
      label: t.header.menu.documentation,
      icon: 'docs.svg',
      path: '/docs',
    },
    {
      label: t.header.menu.github,
      icon: 'github.svg',
      path: 'https://github.com/opticrd/',
      external: true,
    },
  ];

  return (
    <header className="bg-blue-primary sticky top-0 z-20">
      <div className="container mx-auto flex px-12 py-1 items-center justify-between">
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
        <nav>
          <ul className="flex">
            {menuItems.map((item, i) => {
              return (
                <li key={i} className="mr-5 text-white hover:underline">
                  <Link href={item.path}>
                    <a
                      target={item.external ? '_blank' : '_self'}
                      className="flex"
                    >
                      <Image
                        src={'/icons/' + item.icon}
                        width={18}
                        height={18}
                        alt={item.label + ' icon'}
                      />
                      <span className="ml-2">{item.label}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
            <li>
              <LanguageToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
