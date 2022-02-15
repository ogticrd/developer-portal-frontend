import React, { useContext } from 'react'
import { LanguageContext } from '../../context/language.context'
import { SummaryAPI } from '../../models/summary-api'
import ApiVersionTag from './api-version'
import Link from 'next/link'
import shorten from '../../utils/shorten'

export default function ApiDetailsHeader(props: any) {
  const { t } = useContext<any>(LanguageContext)

  const data: SummaryAPI = props.data

  return data ? (
    <section className="bg-blue-primary-light text-primary pt-8">
      <div className="container mx-auto">
        <div className="w-20">
          <ApiVersionTag version={data?.version} />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-6 py-5 h-auto">
        <div className="col-span-12 md:col-span-5 relative">
          <span className="flex flex-col items-start gap-4">
            <h1 className=" font-bold text-4xl mr-44">{data?.name}</h1>
          </span>
          <p className='mt-4 font-bold'>{shorten(data.description, 268)}</p>
        </div>

        <div className='col-span-12 md:col-span-5 grid grid-cols-2 gap-4' style={{
          height: 'fit-content'
        }}>

          <div className='col-span-1'>
            <span className="font-semibold block">{t.apiDetails.owner}:</span>
            <span className="text-blue-600 font-semibold">
              {data.owner.display_name}
            </span>
          </div>
          <div className='col-span-1'>

            {data.owner.email && (
              <>
                <span className="font-semibold block">
                  {t.apiDetails.contact}:
                </span>
                <Link href={'mailto:' + data.owner.email}>
                  <a className="break-all text-blue-600 font-semibold hover:underline">
                    {data.owner.email}
                  </a>
                </Link>
              </>
            )}
          </div>

          <div className='col-span-1'>

            <span className="font-semibold block">{t.apiDetails.published}</span>
            <span className="text-blue-600 font-semibold">
              {new Date(data.updated_at).toLocaleDateString()}
            </span>
          </div>
          <div className='col-span-1'>

            <span className="font-semibold block">
              {t.apiDetails.termsAndServics}
            </span>
            <Link href={t.apiDetails.legalLink}>
              <a
                className="break-all text-blue-600 font-semibold hover:underline"
                target="_blank"
              >
                {t.apiDetails.legalLink}
              </a>
            </Link>
          </div>

        </div>

      </div>

    </section>
  ) : (
    <p></p>
  )
}
