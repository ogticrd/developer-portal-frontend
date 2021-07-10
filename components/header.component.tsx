import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { Fragment } from 'react';
import { MenuItemModel } from '../models/menu-item.model';
import { en } from '../public/locales/en';
import { es } from '../public/locales/es';
import LanguageToggle from './language-toggle.component';

export default function HeaderComponent() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : es;

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
    <div className="bg-blue-primary flex p-4 items-center justify-between">
      <div></div>
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
