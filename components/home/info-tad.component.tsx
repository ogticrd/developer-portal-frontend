import React, { useContext } from 'react';
import { LanguageContext } from '../../context/language.context';

export default function InfoTad() {
  const { t } = useContext<any>(LanguageContext);

  return (
    <div className="container mx-auto flex my-20 flex-col md:flex-row px-10">
      <p className="w-full md:w-1/2 flex items-center text-4xl md:px-28 font-semibold mb-8 text-blue-900">
        {t.infoTad.title}
      </p>
      <p className="w-full md:w-1/2 flex items-center">{t.infoTad.info}</p>
    </div>
  );
}
