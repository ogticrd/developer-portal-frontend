import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import Image from 'next/image';
import Dropdown from './dropdown';

export default function LanguageToggle({ closeMenu }: { closeMenu: Function }) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (code: string) => {
    router.push(router.route, router.asPath, { locale: code });
    setOpen(false);
    closeMenu();
  };

  return (
    <>
      <div className="relative hidden md:block">
        <span
          className="text-white text-md cursor-pointer flex items-center"
          onClick={() => setOpen(!isOpen)}
        >
          <span className="w-5 h-5 flex ">
            <Image
              src={`/icons/lang-${locale}.svg`}
              width={14}
              height={14}
              alt={locale}
            />
          </span>
          <span className="mx-2">{locale}</span>
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
        </span>
        {isOpen && (
          <Dropdown onClose={() => setOpen(false)}>
            <ul className="w-24">
              <li
                className="cursor-pointer text-gray-700 hover:text-black flex items-center"
                onClick={() => changeLanguage('en')}
              >
                <Image
                  src="/icons/lang-en.svg"
                  width={14}
                  height={14}
                  alt="EN"
                />
                <span className="ml-2">English</span>
              </li>
              <li
                className="cursor-pointer text-gray-700 hover:text-black  flex items-center"
                onClick={() => changeLanguage('es')}
              >
                <Image
                  src="/icons/lang-es.svg"
                  width={14}
                  height={14}
                  alt="ES"
                />
                <span className="ml-2">Español</span>
              </li>
            </ul>
          </Dropdown>
        )}
      </div>

      <div className="flex md:hidden gap-4 mt-8">
        <span
          className={`${
            locale == 'en' && 'font-bold underline'
          } cursor-pointer text-white flex items-center`}
          onClick={() => changeLanguage('en')}
        >
          <Image src="/icons/lang-en.svg" width={14} height={14} alt="EN" />
          <span className="ml-2">English</span>
        </span>
        <span
          className={`${
            locale == 'es' && 'font-bold underline'
          } cursor-pointer text-white flex items-center`}
          onClick={() => changeLanguage('es')}
        >
          <Image src="/icons/lang-es.svg" width={14} height={14} alt="ES" />
          <span className="ml-2">Español</span>
        </span>
      </div>
    </>
  );
}
