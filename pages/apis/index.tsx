/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head';
import Image from 'next/image';
import { SummaryAPI } from '../../models/summary-api';
import {
  getApis,
  searchApi,
  getApiCategories,
} from '../../services/apis.service';
import CardApiComponent from '../../components/apis/card-api.component';
import { LanguageContext } from '../../context/language.context';
import { useContext, useState } from 'react';
import SearchApiComponent from '../../components/apis/search-api.component';
import ApiFilters from '../../components/apis/api-filters';
import { Category } from '../../models/category-response';

export default function index({ data, categories }: any) {
  const { t } = useContext<any>(LanguageContext);
  const [apis, setApis] = useState<SummaryAPI[]>(data);
  const [searching, setSearching] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>
          {t.app.displayName} - {t.apiCatalog.title}
        </title>
      </Head>
      <div className="min-h-screen pb-10">
        <article className="text-center">
          <section className=" bg-blue-50 py-10">
            <div className="flex items-center justify-around container m-auto">
              <div>
                <Image
                  src="/images/ogtic-full-logo.png"
                  width={179}
                  height={66}
                  alt="OGTIC logo"
                />
              </div>
              <div className="text-left">
                <h1 className="text-3xl font-semibold mb-4">
                  {t.apiCatalog.title}
                </h1>
                <p className="text-lg font-light w-9/12">
                  {t.apiCatalog.description}
                </p>
              </div>
            </div>
          </section>
          <div className="flex container mx-auto">
            <div className="hidden lg:block w-3/12">
              <ApiFilters
                setSearching={setSearching}
                setApis={setApis}
                categories={categories}
              />
            </div>

            <section className="w-full lg:w-9/12">
              <SearchApiComponent
                setApis={setApis}
                setSearching={setSearching}
              />
              <div className="h-2 mb-9">
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
        </article>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { q }: any = context?.query;
  const data = q ? await searchApi(q) : await getApis();
  const categories: Category[] = await getApiCategories();

  return {
    props: {
      data,
      categories,
    },
  };
}
