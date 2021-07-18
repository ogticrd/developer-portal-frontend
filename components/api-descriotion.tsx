import React, { useContext } from 'react';
import { LanguageContext } from '../context/language.context';
import Markdown from 'react-markdown';

export default function ApiDescription({
  description,
}: {
  description: string;
}) {
  const { t } = useContext<any>(LanguageContext);
  return (
    <section className="card">
      <h2 className="text-xl mb-4">{t.apiDetails.apiDescription}</h2>
      <article>
        <Markdown>{description}</Markdown>
      </article>
    </section>
  );
}
