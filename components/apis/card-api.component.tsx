import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { LanguageContext } from '../../context/language.context'
import { DistributionEnum } from '../../enums/distribution.enum'
import { SummaryAPI } from '../../models/summary-api'
import shorten from '../../utils/shorten'

export default function CardApiComponent(props: any) {
  const {
    data,
    distribution,
  }: { data: SummaryAPI; distribution: DistributionEnum } = props
  const { t } = useContext<any>(LanguageContext)

  const distro = distribution || DistributionEnum.GRID

  const isDistributionGrid = distro === DistributionEnum.GRID
  const defaultImageSrc = '/images/no-image-available.svg.png'
  const [imageUrl, setImageUrl] = useState<string>(data._links.picture)

  const onImageError = () => {
    if (imageUrl !== defaultImageSrc) {
      setImageUrl(defaultImageSrc)
    }
  }

  return (
    <Link href={`/apis/${data?.id}`}>
      <div
        className={`rounded-md relative col-span-4 block cursor-pointer border border-gray-300 ${isDistributionGrid ? 'h-96' : 'md:col-span-12 md:grid grid-cols-12'
          } shadow-none hover:shadow-lg text-left bg-white text-gray-700 duration-300`}
      >
        <div
          className={`w-full ${isDistributionGrid ? 'h-44' : 'h-48'
            } grid object-cover col-span-3`}
        >
          <Image
            src={imageUrl}
            width="100"
            height="100"
            className="rounded-t-md"
            alt={`${data?.name} image`}
            onError={onImageError}
          />
        </div>
        <div className="col-span-9">
          <div className="p-4 ">
            <Link href={`/apis/${data?.id}`}>
              <a>
                <h3 className="text-md font-semibold hover:underline">
                  {data?.name}
                </h3>
              </a>
            </Link>
            <p>{data?.owner.display_name}</p>
            <p className="text-sm my-4">{shorten(data?.description, 72)}</p>
          </div>
          <div
            className={`flex p-4 border-t items-center bottom-0 w-full justify-between ${isDistributionGrid ? 'absolute' : 'md:justify-end gap-6'
              }`}
          >

            <a className="text-blue-900 font-semibold hover:underline">
              {t.popularApis.readmore}
            </a>


            {/* <div className="flex">
              <span className="flex">
                <Image
                  src="/icons/comment.svg"
                  height={20}
                  width={20}
                  alt="Icon comment"
                />
                <span className="ml-1">0</span>
              </span>
              <span className="flex ml-3">
                <Image
                  src="/icons/heart.svg"
                  height={20}
                  width={20}
                  alt="Icon heart"
                />
                <span className="ml-1">0</span>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  )
}
