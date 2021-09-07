import Head from 'next/head'
import { useContext } from 'react'
import ApiContextualMenu from '../../components/apis/api-contextual-menu'
import ApiDetailsHeader from '../../components/apis/api-details-header.component'
import ApiPageComponent from '../../components/apis/api-page'

import { LanguageContext } from '../../context/language.context'
import { ApiPage } from '../../models/api-pages'
import { SummaryAPI } from '../../models/summary-api'
import {
  getApiDetails,
  getPages,
  getPageContent,
} from '../../services/apis.service'

export default function ApiDetails({
  data,
  swaggerContent,
  markdownContent,
}: {
  data: SummaryAPI
  swaggerContent: ApiPage
  markdownContent: any
}) {
  const { t } = useContext<any>(LanguageContext)
  return (
    <div className="api-details m-auto border-2 min-h-screen bg-white shadow-md">
      <Head>
        <title>
          {t.app.displayName} - {data.name}
        </title>
      </Head>
      <ApiDetailsHeader data={data} />
      <div className="grid grid-cols-12 container mx-auto">
        <div className="col-span-12 md:col-span-10">
          <ApiPageComponent
            version={data.version}
            swaggerContent={swaggerContent}
            markdownContent={markdownContent}
          />
        </div>
        <div className="col-span-2 hidden md:block">
          <ApiContextualMenu />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const { id }: any = context.query

  const { swagger, markdown } = await getPages(id)

  const markdownContent = markdown
    ? await getPageContent(markdown._links.content)
    : null

  if (id) {
    const data = await getApiDetails(id)
    return {
      props: {
        data,
        swaggerContent: swagger || null,
        markdownContent: markdownContent || null,
      },
    }
  }
}
