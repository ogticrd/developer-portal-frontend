import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { LanguageContext } from '../../context/language.context';
import { SummaryAPI } from '../../models/summary-api';
import shorten from '../../utils/shorten';

export default function CardApiComponent(props: any) {
  const { t } = useContext<any>(LanguageContext);
  const data: SummaryAPI = props.data;

  const defaultImageSrc = '/images/no-image-available.svg.png';
  const [imageUrl, setImageUrl] = useState<string>(data._links.picture);

  const onImageError = () => {
    if (imageUrl != defaultImageSrc) {
      setImageUrl(defaultImageSrc);
    }
  };

  return (
    <div className="card col-span-4 p-5 text-center shadow-md">
      <Image
        src={imageUrl}
        width="100%"
        height="100%"
        alt={`${data.name} image`}
        onError={onImageError}
      />
      <h3 className="text-lg">{data.name}</h3>
      <p className="text-sm my-4">{shorten(data.description, 120)}</p>
      <Link href={`/apis/${data.id}`}>
        <a className="text-blue-900">{t.popularApis.readmore}</a>
      </Link>
    </div>
  );
}
