import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
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

async function getData(id: string) {
  const { swagger, markdown } = await getPages(id)
  const markdownContent = markdown
    ? await getPageContent(markdown._links.content)
    : null

  if (id) {
    const data = await getApiDetails(id)
    return {
      data,
      swaggerContent: swagger || null,
      markdownContent: markdownContent || null,
    }
  }
}

export default function ApiDetails() {
  const { t } = useContext<any>(LanguageContext)

  const router = useRouter()
  const id = router.query.id as string
  const [data, setData] = useState<SummaryAPI>()
  const [swaggerContent, setSwaggerContent] = useState<ApiPage>()
  const [markdownContent, setMarkdownContent] = useState<string>()
  useEffect(() => {
    const getApiData = async () => {
      const res = await getData(id)

      setData(res?.data)
      setSwaggerContent(res?.swaggerContent)
      setMarkdownContent(res?.markdownContent)
    }

    getApiData()
    return () => { }
  }, [id])

  return (
    <div className="api-details m-auto border-2 min-h-screen bg-white shadow-md">
      <Head>
        <title>
          {t.app.displayName} - {data?.name}
        </title>
      </Head>
      <ApiDetailsHeader data={data} />

      <div className="grid grid-cols-12 container mx-auto">
        <div className="col-span-12 md:col-span-10">
          <ApiPageComponent
            version={data?.version}
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
