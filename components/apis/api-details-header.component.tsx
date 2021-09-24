import React, { useContext } from 'react'
import { LanguageContext } from '../../context/language.context'
import { SummaryAPI } from '../../models/summary-api'
import ApiVersionTag from './api-version'
import Link from 'next/link'
import shorten from '../../utils/shorten'

export default function ApiDetailsHeader(props: any) {
  const { t } = useContext<any>(LanguageContext)

  const data: SummaryAPI = props.data

  return (
    <section className="bg-blue-primary-light">
      <div className="container mx-auto grid grid-cols-12 gap-6 py-5 h-auto">
        <div className="col-span-12 md:col-span-5 relative">
          <span className="flex flex-row items-center">
            <h1 className="text-4xl mr-44">{data.name}</h1>
            <div className="absolute top-0 right-0">
              <ApiVersionTag version={data.version} />
            </div>
          </span>
          <p>{shorten(data.description, 268)}</p>
        </div>
        <div className="col-span-12 md:col-span-3">
          <span className="font-semibold block">{t.apiDetails.owner}:</span>
          <span className="text-blue-800 font-semibold">
            {data.owner.display_name}
          </span>
          {data.owner.email && (
            <>
              <span className="font-semibold block">
                {t.apiDetails.contact}:
              </span>
              <Link href={'mailto:' + data.owner.email}>
                <a className="break-all text-blue-800 font-semibold hover:underline">
                  {data.owner.email}
                </a>
              </Link>
            </>
          )}
        </div>
        <p className="col-span-12 md:col-span-4">
          <span className="font-semibold block">{t.apiDetails.published}</span>
          <span className="text-blue-800 font-semibold">
            {new Date(data.updated_at).toLocaleDateString()}
          </span>
          <span className="font-semibold block mt-4">
            {t.apiDetails.termsAndServics}
          </span>
          <Link href={t.apiDetails.legalLink}>
            <a
              className="break-all text-blue-800 font-semibold hover:underline"
              target="_blank"
            >
              {t.apiDetails.legalLink}
            </a>
          </Link>
        </p>
      </div>
    </section>
  )
}
