import { useContext } from 'react';
import { LanguageContext } from '../../context/language.context';
import { SummaryAPI } from '../../models/summary-api';
import ApiVersionTag from './api-version';
import Link from 'next/link';

export default function ApiDetailsHeader(props: any) {
  const { t } = useContext<any>(LanguageContext);

  const data: SummaryAPI = props.data;

  return (
    <section className="bg-blue-primary-light">
      <div className="container mx-auto grid grid-cols-12  items-center px-20 h-52">
        <div className="col-span-5 relative">
          <span className="flex flex-col md:flex-row items-center">
            <h1 className="text-4xl mr-44">{data.name}</h1>
            <div className="absolute top-0 right-20">
              <ApiVersionTag version={data.version} />
            </div>
          </span>
          <p>{data.description}</p>
        </div>
        <div className="col-span-3">
          <span className="font-semibold block">{t.apiDetails.owner}:</span>
          <span className="text-blue-800 font-semibold">
            {data.owner.display_name}
          </span>
          <span className="font-semibold block">{t.apiDetails.contact}:</span>
          <Link href={'mailto:' + data.owner.email}>
            <a className="text-blue-800 font-semibold hover:underline">
              {data.owner.email}
            </a>
          </Link>
        </div>
        <p className="col-span-4">
          <span className="font-semibold block">{t.apiDetails.published}</span>
          <span className="text-blue-800 font-semibold">
            {new Date(data.updated_at).toLocaleDateString()}
          </span>
          <span className="font-semibold block">
            {t.apiDetails.termsAndServics}
          </span>
          <Link href={t.apiDetails.legalLink}>
            <a
              className="text-blue-800 font-semibold hover:underline"
              target="_blank"
            >
              {t.apiDetails.legalLink}
            </a>
          </Link>
        </p>
      </div>
    </section>
  );
}
