import { useContext } from 'react'
import { ApiPage } from '../../models/api-pages'

import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
import { LanguageContext } from '../../context/language.context'
import ApiVersionTag from './api-version'
import MarkdownViewer from './markdown-viewer'
import { useRouter } from 'next/dist/client/router'
import { UserContext } from '../../context/user.context'
import { createSubscription } from '../../services/subscription.service'
import { toast } from 'react-toastify'

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

  const swaggerUrl =
    '/server/portal' + swaggerContent?._links.content.split('portal')[1]

  const { user } = useContext<any>(UserContext)
  const router = useRouter()

  const subscribe = async () => {
    try {
      if (!user) {
        router.push('/user/login')
        return
      }
      await createSubscription(user.id, 'A random comment')
      toast.success('Ready, you have subscribed to this Api')
    } catch (err) {
      toast.error('Error')
    }
  }

  return (
    <>
      {markdownContent && (
        <section id="documentation" className="card">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-primary">
              {t.apiDetails.documentation}
            </h2>
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
            <SwaggerUI url={swaggerUrl} />
          </div>
        </section>
      )}



    </>
  )
}
