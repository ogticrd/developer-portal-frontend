import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext } from '../context/language.context';
import { MenuItemModel } from '../models/menu-item.model';
import LanguageToggle from './language-toggle.component';
import Image from 'next/image';

export default function HeaderComponent() {
  const { t } = useContext<any>(LanguageContext);

  const menuItems: MenuItemModel[] = [
    {
      label: t.header.menu.apis,
      path: '/apis',
    },
    {
      label: t.header.menu.documentation,
      path: '/docs',
    },
    {
      label: t.header.menu.github,
      path: 'https://github.com/opticrd/',
      external: true,
    },
  ];

  return (
    <div className="bg-blue-primary flex p-4 items-center justify-between sticky top-0 z-20">
      <div>
        <Link href="/">
          <a>
            <Image
              src="/images/ogtic-full-logo.png"
              height="40rem"
              width="100%"
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
                  <a target={item.external ? '_blank' : '_self'}>
                    {item.label}
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
  );
}
