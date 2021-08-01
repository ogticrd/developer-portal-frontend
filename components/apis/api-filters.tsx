import  { useContext } from 'react';
import { LanguageContext } from '../../context/language.context';
import { Category } from '../../models/category-response';

export default function ApiFilters({categories}: {categories: Category[]}) {
  const { t } = useContext<any>(LanguageContext);
  const brands = [
    { name: 'Apple', code: 'brand1', quantity: 10 },
    { name: 'Samsung', code: 'brand2', quantity: 214 },
    { name: 'Huawei', code: 'brand3', quantity: 45 },
    { name: 'Sony', code: 'brand4', quantity: 236 },
    { name: 'LG', code: 'brand5', quantity: 84 },
    { name: 'Nokia', code: 'brand6', quantity: 217 },
    { name: 'Blackberry', code: 'brand7', quantity: 654 },
    { name: 'Motorola', code: 'brand8', quantity: 32 },
  ];

  return (
    <aside className="card text-left font-light text-gray-600">
      <div className="py-2">
        <p className="font-semibold mb-2">{t.filters.categories}</p>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <input
                className="cursor-pointer"
                type="radio"
                name="category"
                id={category.id}
              />
              <label className="ml-2 cursor-pointer" htmlFor={category.id}>
                {category.name}
              </label>
              <span className="float-right">{category.total_apis}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-2">
        <p className="font-semibold  mb-2">{t.filters.brands}</p>
        <ul>
          {brands.map((brand) => (
            <li key={brand.code}>
              <input
                className="cursor-pointer"
                type="checkbox"
                id={brand.code}
              />
              <label className="ml-2 cursor-pointer" htmlFor={brand.code}>
                {brand.name}
              </label>
              <span className="float-right">{brand.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="mt-2 bg-blue-primary hover:bg-blue-800 duration-300 w-full p-2 text-sm rounded-md text-white">{t.filters.clearFilters}</button>
    </aside>
  );
}
