import React, { useState } from 'react'
import Image from 'next/image'
import { SummaryAPI } from '../../models/summary-api'
import shorten from '../../utils/shorten'
import { useRouter } from 'next/dist/client/router'

export default function ApiSearchItem({
  api,
  selected,
}: {
  api: SummaryAPI
  selected: boolean
}) {
  const [imageUrl, setImageUrl] = useState<string>(api._links.picture)
  const router = useRouter()
  const defaultImageSrc = '/images/no-image-available.svg.png'

  const onImageError = (e: any) => {
    e.preventDefault()
    if (imageUrl != defaultImageSrc) {
      setImageUrl(defaultImageSrc)
    }
  }

  const openApi = () => {
    router.push('/apis/[id]', { pathname: `/apis/${api.id}` })
  }

  return (
    <div
      onClick={openApi}
      className={`flex p-1 mb-1 cursor-pointer hover:bg-blue-200 items-center ${
        selected && 'bg-blue-200'
      }`}
    >
      <div className="object-cover">
        <Image
          src={imageUrl}
          width={50}
          height={50}
          alt={api.name + ' image'}
          onError={onImageError}
        />
      </div>
      <div className="flex flex-col ml-4">
        <h3 className="font-medium">{api.name}</h3>
        <p className="font-thin text-sm text-gray-600">
          {shorten(api.description, 40)}
        </p>
      </div>
    </div>
  )
}
