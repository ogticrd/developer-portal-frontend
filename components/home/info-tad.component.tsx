import React, { useContext } from 'react';
import { LanguageContext } from '../../context/language.context';

export default function InfoTad() {
  const { t } = useContext<any>(LanguageContext);

  return (
    <div className="container mx-auto flex my-20">
      <p className="w-1/2 flex items-center text-3xl px-36 font-medium">
        {t.infoTad.title}
      </p>
      <p className="w-1/2 flex items-center">{t.infoTad.info}</p>
    </div>
  );
}
