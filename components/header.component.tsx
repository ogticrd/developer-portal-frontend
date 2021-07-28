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
    <div className="bg-blue-primary flex p-4 items-center justify-between sticky top-0 z-20">
      <div>
        <Link href="/">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
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
  );
}
