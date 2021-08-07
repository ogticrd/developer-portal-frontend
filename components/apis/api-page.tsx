import { useContext, useEffect, useState } from 'react';
import { ApiPage } from '../../models/api-pages';
import { getPages, getPageContent } from '../../services/apis.service';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { LanguageContext } from '../../context/language.context';

import Markdown from 'react-markdown';
import ApiVersionTag from './api-version';

export default function ApiPageComponent({ id }: { id: string }): JSX.Element {
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
        <section className="card">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold">{t.apiDetails.documentation}</h2>
            <ApiVersionTag version={'1'}/>
          </div>
          <hr className="mb-3" />
          {
            // eslint-disable-next-line react/no-children-prop
            <Markdown children={markdownPage} />
          }
        </section>
      )}

      {swaggerPage && (
        <section className="card">
          <SwaggerUI url={swaggerPage?._links.content} />
        </section>
      )}
    </>
  );
}
