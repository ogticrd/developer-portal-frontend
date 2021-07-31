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
    <div className="rounded-lg col-span-4 shadow-xl text-left bg-white text-gray-700">
      <div className="w-full h-44 grid object-cover">
        <Image
          src={imageUrl}
          width="100"
          height="100"
          alt={`${data.name} image`}
          onError={onImageError}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{data.name}</h3>
        <p>{data.owner.display_name}</p>
        <p className="text-sm my-4">{shorten(data.description, 120)}</p>
      </div>
      <div className="flex p-4 border-t items-center justify-between">
        <Link href={`/apis/${data.id}`}>
          <a className="text-blue-900 font-semibold">
            {t.popularApis.readmore}
          </a>
        </Link>

        <div className="flex">
          <span className="flex">
            <Image
              src="/icons/comment.svg"
              height={20}
              width={20}
              alt="Icon comment"
            />
            <span className="ml-1">12</span>
          </span>

          <span className="flex ml-3">
            <Image
              src="/icons/heart.svg"
              height={20}
              width={20}
              alt="Icon heart"
            />
            <span className="ml-1">6</span>
          </span>
        </div>
      </div>
    </div>
  );
}
