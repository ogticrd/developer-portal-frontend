import { useRouter } from 'next/dist/client/router';
import { createContext, useState } from 'react';
import { en } from '../public/locales/en';
import { es } from '../public/locales/es';

export const LanguageContext = createContext({});

const LanguageProvider = ({ children }: any) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : es;

  return (
    <LanguageContext.Provider
      value={{
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
