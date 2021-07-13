import { useEffect, useState } from 'react';
import { ApiPage } from '../models/api-pages';
import { getPages } from '../services/apis.service';

export default function ApiPageComponent({ id }: { id: string }) {
  const [pages, setPages] = useState<ApiPage[]>([]);

  useEffect(() => {
    const getPageInfo = async () => {
      const res = await getPages(id);
      console.log('res', res);
      setPages(res);
    };

    getPageInfo();
    return () => {};
  }, [id]);

  return (
    <section className="card">
      <h2 className="text-2xl mb-6">Endpoints</h2>
      {pages.map((page) => (
        <div key={page.id}>
          <h3 className="text-md">Name: {page.name}</h3>
          <p>Type: {page.type}</p>
          <p>Last updated: {new Date(page.updated_at).toLocaleDateString()}</p>
        </div>
      ))}
    </section>
  );
}
