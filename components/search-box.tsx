import { useRouter } from 'next/dist/client/router';
import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../context/language.context';
import { SummaryAPI } from '../models/summary-api';
import { getApis, searchApi } from '../services/apis.service';
import ApiSearchItem from './apis/api-search-item.component';

export default function SearchBox() {
  const { t } = useContext<any>(LanguageContext);
  const [apis, setApis] = useState<SummaryAPI[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [selected, setSelected] = useState<number>(-1);
  const router = useRouter();

  const search = () => {
    searchText.trim().length &&
      router.push({ pathname: '/apis', query: { q: searchText.trim() } });
  };

  const handleKeyPress = (evt: any) => {
    switch (evt.key) {
      case 'ArrowUp':
        selected > 0 && setSelected(selected - 1);
        break;
      case 'ArrowDown':
        selected < apis.length - 1 && setSelected(selected + 1);
        break;
      case 'Enter':
        if (selected >= 0) {
          const id = apis[selected]?.id;
          id && router.push('/apis/[id]', { pathname: `/apis/${id}` });
        } else {
          evt.key.toLowerCase() === 'enter' && search();
        }
        setApis([]);
        break;
    }
  };

  const onSearch = async () => {
    if (searchText.trim()) {
      const data = await searchApi(searchText);
      setApis(data);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => onSearch(), 250);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchText]);

  return (
    <div className="flex items-center w-full relative">
      <input
        className="p-2 border border-gray-300 rounded-l-md w-full"
        type="text"
        placeholder={t.searchBox.placeholder}
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setSelected(-1);
        }}
        onKeyUp={handleKeyPress}
      />
      <button
        onClick={search}
        className="p-2 bg-yellow-primary hover:bg-yellow-600 duration-300 rounded-r-md inline-flex items-center text-white"
      >
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
      {apis.length && searchText.trim() ? (
        <div className="absolute shadow-2xl rounded-md bg-white py-4 w-full top-11">
          {apis.map((api, i) => (
            <ApiSearchItem key={api.id} api={api} selected={selected == i} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
