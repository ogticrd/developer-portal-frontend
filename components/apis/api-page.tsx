import { useContext, useEffect, useState } from 'react';
import { ApiPage } from '../../models/api-pages';
import { getPages, getPageContent } from '../../services/apis.service';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { LanguageContext } from '../../context/language.context';
import ApiVersionTag from './api-version';
import MarkdownViewer from './markdown-viewer';

export default function ApiPageComponent({
  id,
  version,
}: {
  id: string;
  version: string;
}): JSX.Element {
  const [swaggerPage, setSwaggerPage] = useState<ApiPage>();
  const [markdownPage, setMarkdownPage] = useState<string>();

  const { t } = useContext<any>(LanguageContext);

  useEffect(() => {
    const getPagesInfo = async () => {
      const { swagger, markdown } = await getPages(id);
      setSwaggerPage(swagger);
      if (markdown) {
        const content = await getPageContent(markdown._links.content);
        setMarkdownPage(content);
      }
    };

    getPagesInfo();
    return () => {};
  }, [id]);

  return (
    <>
      {markdownPage && (
        <section id="documentation" className="card">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold">
              {t.apiDetails.documentation}
            </h2>
            <ApiVersionTag version={version} />
          </div>
          <hr className="mb-3" />
          <MarkdownViewer content={markdownPage} />
        </section>
      )}

      {swaggerPage && (
        <section id="api" className="card w-full overflow-x-auto">
          <div
            style={{
              minWidth: 500,
            }}
          >
            <SwaggerUI url={swaggerPage?._links.content} />
          </div>
        </section>
      )}
    </>
  );
}
