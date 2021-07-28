import React, { useContext, useState } from 'react';
import Image from 'next/image';

import { LanguageContext } from '../../context/language.context';
import { SummaryAPI } from '../../models/summary-api';
import formatVersion from '../../utils/format-version';

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
    <section className="flex flex-col md:flex-row card items-center md:items-end relative pt-24">
      <div
        style={{
          backgroundImage: `url(${data._links.background}), url('/images/default-api-bg.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="absolute top-0 left-0 w-full h-44"
      ></div>
      <div className="md:mr-5">
        <Image
          src={imageUrl}
          width={180}
          height={180}
          alt={`${data.name} image`}
          onError={onImageError}
        />
      </div>
      <div className="text-center md:text-left">
        <span className="flex flex-col md:flex-row">
          <h1 className="text-2xl">{data.name}</h1>
          <small
            title={t.apiDetails.version}
            className="my-1 mx-3  bg-blue-500 text-white py-1 text-sm px-1 rounded-full"
          >
            {formatVersion(data.version)}
          </small>
        </span>
        <p className="mt-1 text-gray-600">
          {new Date(data.updated_at).toLocaleDateString()}
        </p>
        <p className="mt-1">
          <span className="text-gray-600">{t.apiDetails.owner}:</span>
          {data.owner.display_name}
        </p>
      </div>
    </section>
  );
}
