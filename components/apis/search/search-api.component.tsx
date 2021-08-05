import React, { useEffect, useState } from 'react';
import { getApis, searchApi } from '../../../services/apis.service';
import SearchChangeDistribution from './search-change-distribution';
import SearchSorter from './search-sorter';
export default function SearchApiComponent({ setApis, setSearching }: any) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const onSearch = async () => {
    if (searchTerm.length) setSearching(true);
    const data = searchTerm.trim()
      ? await searchApi(searchTerm)
      : await getApis();
    setApis(data);
    setSearching(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => onSearch(), 250);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <div className="container m-auto my-5 px-10 grid grid-cols-12 gap-3">
      <div className="bg-white col-span-8 border shadow-md w-full flex items-center m-auto px-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
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
        <input
          className="w-full p-2 outline-none text-lg"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value.trim())}
          value={searchTerm}
        />
      </div>
      <div className="col-span-2">
        <SearchSorter />
      </div>
      <div className="col-span-2">
        <SearchChangeDistribution />
      </div>
    </div>
  );
}
