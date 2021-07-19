/* eslint-disable react-hooks/rules-of-hooks */
import { SummaryAPI } from '../../models/summary-api';
import { getApis } from '../../services/apis.service';
import CardApiComponent from '../../components/apis/card-api.component';
import { LanguageContext } from '../../context/language.context';
import { useContext, useState } from 'react';
import SearchApiComponent from '../../components/apis/search-api.component';
import Head from 'next/head';

export default function index({ data }: any) {
  const { t } = useContext<any>(LanguageContext);
  const [apis, setApis] = useState<SummaryAPI[]>(data);
  const [searching, setSearching] = useState<boolean>(false);
  return (
    <div>
      <Head>
        <title>
          {t.app.displayName} - {t.apiCatalog.title}
        </title>
      </Head>
      <div className="bg-blue-50 min-h-screen">
        <section className="container m-auto text-center py-8 ">
          <h2 className="text-2xl">{t.apiCatalog.title}</h2>
          <p className="text-lg font-light mx-auto lg:w-2/3 md:w-full my-8 px-10">
            {t.apiCatalog.description}
          </p>
          <SearchApiComponent setApis={setApis} setSearching={setSearching} />
          <div className="h-10">
            {searching && <div className="custom-spinner"></div>}
          </div>
          {!searching && !apis.length ? (
            <h4 className="text-lg">{t.apiCatalog.notResults}</h4>
          ) : (
            <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-1  gap-10 mt-5 px-10">
              {apis.map((item) => (
                <CardApiComponent key={item.id} data={item} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getApis();

  return {
    props: {
      data,
    },
  };
}
