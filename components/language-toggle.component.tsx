import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import Image from 'next/image';

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
        <Image
          src={`/icons/lang-${locale}.svg`}
          width={14}
          height={14}
          alt="EN"
        />
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
              className="cursor-pointer text-gray-700 hover:text-black flex items-center"
              onClick={() => changeLanguage('en')}
            >
              <Image src="/icons/lang-en.svg" width={14} height={14} alt="EN" />
              <span className="ml-2">English</span>
            </li>
            <li
              className="cursor-pointer text-gray-700 hover:text-black  flex items-center"
              onClick={() => changeLanguage('es')}
            >
              <Image src="/icons/lang-es.svg" width={14} height={14} alt="ES" />
              <span className="ml-2">Español</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
