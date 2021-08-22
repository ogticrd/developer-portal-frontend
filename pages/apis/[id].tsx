import Head from 'next/head';
import { useContext } from 'react';
import ApiContextualMenu from '../../components/apis/api-contextual-menu';
import ApiDetailsHeader from '../../components/apis/api-details-header.component';
import ApiPageComponent from '../../components/apis/api-page';

import { LanguageContext } from '../../context/language.context';
import { SummaryAPI } from '../../models/summary-api';
import { getApiDetails } from '../../services/apis.service';

export default function ApiDetails({ data }: { data: SummaryAPI }) {
  const { t } = useContext<any>(LanguageContext);
  return (
    <div className="api-details m-auto border-2 min-h-screen bg-white shadow-md">
      <Head>
        <title>
          {t.app.displayName} - {data.name}
        </title>
      </Head>
      <ApiDetailsHeader data={data} />
      <div className="grid grid-cols-12 container mx-auto">
        <div className="col-span-12 md:col-span-10">
          <ApiPageComponent id={data.id} version={data.version} />
        </div>
        <div className="col-span-2 hidden md:block">
          <ApiContextualMenu />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { id }: any = context.query;
  if (id) {
    const data = await getApiDetails(id);
    return {
      props: {
        data,
      },
    };
  }
}
