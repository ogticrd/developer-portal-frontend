import React, { useState } from 'react';
import Image from 'next/image';

import { SummaryAPI } from '../models/popular-api';

export default function ApiDetailsHeader(props: any) {
  const data: SummaryAPI = props.data;

  const defaultImageSrc = '/images/no-image-available.svg.png';
  const [imageUrl, setImageUrl] = useState<string>(data._links.picture);
  const onImageError = () => {
    if (imageUrl != defaultImageSrc) {
      setImageUrl(defaultImageSrc);
    }
  };

  return (
    <section className="flex bg-white shadow-md p-4">
      <div className="w-56">
        {<Image
          src={imageUrl}
          width="100%"
          height="100%"
          alt={`${data.name} image`}
          onError={onImageError}
        />}
      </div>
      <div>
        <h1 className="text-2xl">{data.name}</h1>
        <p className="text-md">{data.description}</p>
      </div>
    </section>
  );
}
