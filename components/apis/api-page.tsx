import { useContext, useEffect, useState } from 'react'
import { ApiPage } from '../../models/api-pages'

import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
import { LanguageContext } from '../../context/language.context'
import ApiVersionTag from './api-version'
import MarkdownViewer from './markdown-viewer'

export default function ApiPageComponent({
  version,
  swaggerContent,
  markdownContent,
}: {
  version: string
  swaggerContent: ApiPage
  markdownContent: any
}): JSX.Element {
  const { t } = useContext<any>(LanguageContext)

  return (
    <>
      {markdownContent && (
        <section id="documentation" className="card">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold">
              {t.apiDetails.documentation}
            </h2>
            <ApiVersionTag version={version} />
          </div>
          <hr className="mb-3" />
          <MarkdownViewer content={markdownContent} />
        </section>
      )}

      {swaggerContent && (
        <section id="api" className="card w-full overflow-x-auto">
          <div
            style={{
              minWidth: 500,
            }}
          >
            <SwaggerUI url={swaggerContent?._links.content} />
          </div>
        </section>
      )}
    </>
  )
}
