import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../../context/language.context';
import { SummaryAPI } from '../../models/summary-api';
import CardApiComponent from './card-api.component';

export default function PopularApisComponent(props: any) {
  const apis: SummaryAPI[] = props.pupularApis;
  const { t } = useContext<any>(LanguageContext);

  return (
    <section className="container m-auto text-center py-8 ">
      <div className="flex flex-col md:flex-row items-center justify-between px-10">
        <h2 className="text-2xl text-blue-primary font-semibold w-64 text-center md:text-left">
          {t.popularApis.title}
        </h2>
        <div className="w-full border-b border-gray-400"></div>
      </div>
      <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-1  gap-10 mt-5 px-10 mb-6">
        {apis.map((item) => (
          <CardApiComponent key={item.id} data={item} />
        ))}
      </div>
      <Link href="/apis">
        <a className="bg-blue-primary hover:bg-blue-900 duration-300 py-1 px-24 rounded-md uppercase text-white">
          {t.popularApis.viewMore}
        </a>
      </Link>
    </section>
  );
}
