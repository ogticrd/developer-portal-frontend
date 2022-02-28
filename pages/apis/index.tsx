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
import { useContext, useEffect, useState } from 'react';
import ApiFilters from '../../components/apis/api-filters';
import { Category } from '../../models/category-response';
import SearchApiComponent from '../../components/apis/search/search-api.component';
import { DistributionEnum } from '../../enums/distribution.enum';
import sortBy from '../../utils/sortby';

export default function index({ data }: any) {
  const { t } = useContext<any>(LanguageContext);
  const [apis, setApis] = useState<SummaryAPI[]>(data);
  const [categories, setCategories] = useState<Category[]>([])
  const [searching, setSearching] = useState<boolean>(false);

  const [distribution, setDistribution] = useState<DistributionEnum>(
    DistributionEnum.GRID
  );

  const sortApis = (key: string) => {
    const result: SummaryAPI[] = sortBy([...apis], key);
    setApis(result);
  };

  useEffect(() => {
    const getCategories = async () => {
      const categories: Category[] = await getApiCategories();
      setCategories(categories)
    }

    getCategories();

    return () => {
    };
  }, []);



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
            <div className="flex flex-col md:flex-row items-center container m-auto">
              <div className="text-left text-primary">
                <h1 className="text-center md:text-left text-4xl font-bold mb-4">
                  {t.apiCatalog.title}
                </h1>
                <p className="text-lg font-semibold w-9/12">
                  {t.apiCatalog.description}
                </p>
              </div>
              <div>
                <Image
                  src="/images/apis-header-illustration.svg"
                  width={217}
                  height={163}
                  alt="OGTIC logo"
                />
              </div>

            </div>
          </section>
          <div className="flex container mx-auto">
            <section className="w-full lg:w-9/12 pt-4">
              <SearchApiComponent
                setApis={setApis}
                setSearching={setSearching}
                distribution={distribution}
                setDistribution={setDistribution}
                onOptionSelected={(value: string) => sortApis(value)}
              />
              <p className="text-gray-600 text-left">
                {apis?.length || 0} {t.apiCatalog.searchQuantity}
              </p>
              <div className="h-2 mb-9">
                {searching && <div className="custom-spinner"></div>}
              </div>
              {!searching && !apis.length ? (
                <h4 className="text-lg">{t.apiCatalog.notResults}</h4>
              ) : (
                <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-1  gap-10 mt-5 ">
                  {apis.map((item) => (
                    <CardApiComponent
                      distribution={distribution}
                      key={item.id}
                      data={item}
                    />
                  ))}
                </div>
              )}
            </section>
            <div className="hidden top-12 lg:block w-3/12 ml-4">
              <ApiFilters
                setSearching={setSearching}
                setApis={setApis}
                categories={categories}
              />
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { q }: any = context?.query;
  const data = q ? await searchApi(q) : await getApis();

  return {
    props: {
      data,
    },
  };
}
