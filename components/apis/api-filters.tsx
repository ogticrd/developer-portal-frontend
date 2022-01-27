import { useContext } from 'react';
import { LanguageContext } from '../../context/language.context';
import { Category } from '../../models/category-response';
import { getApisByCategory, getApis } from '../../services/apis.service';

export default function ApiFilters({
  categories,
  setApis,
  setSearching,
}: {
  categories: Category[];
  setApis: Function;
  setSearching: Function;
}) {
  const { t } = useContext<any>(LanguageContext);

  const handleCategoryChange = async (e: any) => {
    const { id, value } = e.target;
    setSearching(true);
    value && setApis(await getApisByCategory(id));
    setSearching(false);
  };

  const cleanData = async (evt: any) => {
    evt.preventDefault();
    const form: any = document.getElementById('filter-form');
    form.reset();
    setSearching(true);
    setApis(await getApis());
    setSearching(false);
  };

  return (
    <aside className="card text-left font-light text-gray-600 sticky top-16">
      <form id="filter-form">
        <div className="py-2">
          <p className="font-semibold mb-2">{t.filters.categories}</p>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="category"
                  onClick={handleCategoryChange}
                  id={category.id}
                />
                <label className="ml-2 cursor-pointer" htmlFor={category.id}>
                  {category.name}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={cleanData}
          className="mt-6 bg-blue-primary hover:bg-blue-800 duration-300 w-full p-2 text-sm rounded-full text-white"
        >
          {t.filters.clearFilters}
        </button>
      </form>
    </aside>
  );
}
