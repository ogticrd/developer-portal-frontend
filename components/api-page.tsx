import { useContext, useEffect, useState } from 'react';
import { ApiPage } from '../models/api-pages';
import { getPages } from '../services/apis.service';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { LanguageContext } from '../context/language.context';

export default function ApiPageComponent({ id }: { id: string }) {
  const [pages, setPages] = useState<ApiPage[]>([]);
  const [selectedPage, setSelectedPage] = useState<ApiPage>();

  const { t } = useContext<any>(LanguageContext);

  useEffect(() => {
    const getPageInfo = async () => {
      const res = await getPages(id);
      setPages(res);
      res.length && setSelectedPage(res[0]);
    };

    getPageInfo();
    return () => {};
  }, [id]);

  return (
    pages.length > 0 && (
      <section>
        <div className="bg-white shadow-md card">
          <h2 className="text-xl mb-4">{t.apiDetails.pages.title}</h2>
          <div>
            {pages.map((page) => (
              <span
                key={page.id}
                onClick={() => setSelectedPage(page)}
                className={`cursor-pointer border flex-1 inline-block p-3 hover:bg-blue-800 hover:text-white duration-300 ${
                  page == selectedPage && 'bg-blue-primary text-white'
                }`}
              >
                <span>{page.name}</span>
              </span>
            ))}
          </div>
        </div>

        {pages.map(
          (page) =>
            selectedPage == page && (
              <div key={page.id} className="card">
                <SwaggerUI url={page._links.content} />
              </div>
            )
        )}
      </section>
    )
  );
}
