import React, { useContext } from 'react';
import { LanguageContext } from '../../context/language.context';
import { SummaryAPI } from '../../models/summary-api';
import CardApiComponent from './card-api.component';

export default function PopularApisComponent(props: any) {
  const apis: SummaryAPI[] = props.pupularApis;
  const { t } = useContext<any>(LanguageContext);

  return (
    <section className="container m-auto text-center py-8">
      <h2 className="text-2xl text-blue-900 font-semibold">{t.popularApis.title}</h2>
      <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-1  gap-10 mt-5 px-10">
        {apis.map((item) => (
          <CardApiComponent key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
