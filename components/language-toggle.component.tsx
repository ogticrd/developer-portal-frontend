import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef, useState } from 'react';

export default function LanguageToggle() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (code: string) => {
    router.push(router.route, router.asPath, { locale: code });
    setOpen(false);
  };

  return (
    <div>
      <span
        className="text-white text-md cursor-pointer flex items-center"
        onClick={() => setOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
        {locale}
      </span>
      <div
        className={isOpen ? 'block' : 'hidden'}
        onBlur={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          className="w-screen h-screen left-0 top-0 fixed z-30"
        >
          <ul className="absolute top-12 right-3 bg-white p-2 rounded-sm shadow-md">
            <li
              className="cursor-pointer text-gray-700 hover:text-black"
              onClick={() => changeLanguage('en')}
            >
              English
            </li>
            <li
              className="cursor-pointer text-gray-700 hover:text-black"
              onClick={() => changeLanguage('es')}
            >
              Español
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
