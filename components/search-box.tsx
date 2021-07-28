import React, { useContext } from 'react';
import { LanguageContext } from '../context/language.context';

export default function SearchBox() {
  const { t } = useContext<any>(LanguageContext);

  return (
    <div className="flex items-center w-full md:w-auto">
      <input
        className="p-2 border border-gray-200 rounded-l-md w-full"
        type="text"
        placeholder={t.searchBox.placeholder}
      />
      <button className="p-2 bg-yellow-primary hover:bg-yellow-600 duration-300 rounded-r-md inline-flex items-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {t.searchBox.button}
      </button>
    </div>
  );
}
