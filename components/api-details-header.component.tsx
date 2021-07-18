import React, { useContext, useState } from 'react';
import Image from 'next/image';

import { SummaryAPI } from '../models/summary-api';
import Link from 'next/link';
import { LanguageContext } from '../context/language.context';
import formatVersion from '../utils/format-version';

export default function ApiDetailsHeader(props: any) {
  const { t } = useContext<any>(LanguageContext);

  const data: SummaryAPI = props.data;

  const defaultImageSrc = '/images/no-image-available.svg.png';
  const [imageUrl, setImageUrl] = useState<string>(data._links.picture);
  const onImageError = (e: any) => {
    e.preventDefault();
    if (imageUrl != defaultImageSrc) {
      setImageUrl(defaultImageSrc);
    }
  };

  return (
    <section className="flex card">
      <div className="mr-5">
        <Image
          src={imageUrl}
          width={180}
          height={180}
          alt={`${data.name} image`}
          onError={onImageError}
        />
      </div>
      <div className="col-span-9">
        <h1 className="text-2xl">{data.name}</h1>
        <p className="mt-1">
          <b>{t.apiDetails.version}:</b> {formatVersion(data.version)}
        </p>
        <p className="mt-1">
          <b>{t.apiDetails.owner}:</b> {data.owner.display_name}
        </p>
        <p className="mt-1">
          <b>{t.apiDetails.published}:</b>{' '}
          {new Date(data.updated_at).toLocaleDateString()}
        </p>
        <span className="mt-2">
          <p>
            <b>{t.apiDetails.entryPoints}:</b>
          </p>
          {data.entrypoints.map((item) => (
            <Link key={item} href={item}>
              <a className="text-blue-900 hover:underline" target="_blank">
                {item}
              </a>
            </Link>
          ))}
        </span>
      </div>
    </section>
  );
}
