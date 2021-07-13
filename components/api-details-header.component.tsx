import React, { useState } from 'react';
import Image from 'next/image';

import { SummaryAPI } from '../models/popular-api';

export default function ApiDetailsHeader(props: any) {
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
          width={150}
          height={150}
          alt={`${data.name} image`}
          onError={onImageError}
        />
      </div>
      <div className="col-span-9">
        <h1 className="text-2xl">{data.name}</h1>
        {/* <p className="text-md">{data.description}</p> */}
      </div>
    </section>
  );
}
