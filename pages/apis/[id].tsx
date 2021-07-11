import ApiDetailsHeader from '../../components/api-details-header.component';
import { getApiDetails } from '../../services/apis.service';

export default function ApiDetails({ data }: any) {
  return (
    <div className="m-auto border-2 min-h-screen bg-blue-50  p-8 shadow-md">
      <ApiDetailsHeader data={data} />
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
