import { SummaryAPI } from '../../models/popular-api';
import { getApis } from '../../services/apis.service';
import CardApiComponent from '../../components/card-api.component';
import { LanguageContext } from '../../context/language.context';
import { useContext } from 'react';

export default function index({ data }: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useContext<any>(LanguageContext);

  const apis = data as SummaryAPI[];
  return (
    <div className="container">
      <section className="container m-auto text-center py-8">
        <h2 className="text-2xl">{t.apiCatalog.title}</h2>
        <p className="text-lg font-light mx-auto lg:w-2/3 md:w-full my-10">{t.apiCatalog.description}</p>
        <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-1  gap-10 mt-5 px-10">
          {apis.map((item) => (
            <CardApiComponent key={item.id} data={item} />
          ))}
        </div>
      </section>
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
