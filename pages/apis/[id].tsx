import Head from 'next/head';
import { useContext } from 'react';
import ApiDescription from '../../components/api-descriotion';
import ApiDetailsHeader from '../../components/api-details-header.component';
import ApiPageComponent from '../../components/api-page';

import { LanguageContext } from '../../context/language.context';
import { SummaryAPI } from '../../models/summary-api';
import { getApiDetails } from '../../services/apis.service';

export default function ApiDetails({ data }: { data: SummaryAPI }) {
  const { t } = useContext<any>(LanguageContext);
  return (
    <div className="m-auto border-2 min-h-screen bg-blue-50  p-8 shadow-md">
      <Head>
        <title>
          {t.app.displayName} - {data.name}
        </title>
      </Head>
      <ApiDetailsHeader data={data} />
      <ApiDescription description={data.description} />
       <ApiPageComponent id={data.id}/>
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
