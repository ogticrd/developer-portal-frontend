import React, { useContext } from 'react';
import { LanguageContext } from '../context/language.context';

export default function ApiDescription({ description }: any) {
  const { t } = useContext<any>(LanguageContext);
  return (
    <section className="card">
      <h2 className="text-xl mb-4">{t.apiDetails.apiDescription}</h2>
      <p>{description}</p>
    </section>
  );
}
