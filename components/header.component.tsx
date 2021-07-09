import Link from 'next/link';
import { MenuItemModel } from '../models/menu-item.model';

export default function HeaderComponent() {
  const menuItems: MenuItemModel[] = [
    {
      label: 'APIs',
      path: '/apis',
    },
    {
      label: 'Documentation',
      path: '/docs',
    },
    {
      label: 'Github',
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
        </ul>
      </nav>
    </div>
  );
}
