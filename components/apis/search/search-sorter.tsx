import { useState, useContext } from 'react';
import { LanguageContext } from '../../../context/language.context';
import { SearchSortOption } from '../../../models/search-sort-option.model';
import Dropdown from '../../dropdown';

export default function SearchSorter({
  onOptionSelected,
}: {
  onOptionSelected: Function;
}) {
  const { t } = useContext<any>(LanguageContext);

  const options: SearchSortOption[] = [
    { label: t.apiCatalog.searchSortBy.recent, value: 'date' },
    { label: t.apiCatalog.searchSortBy.name, value: 'name' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState(options[0]);

  const onSelect = (option: SearchSortOption) => {
    setSortBy(option);
    onOptionSelected(option.value);
    setIsOpen(false);
  };

  return (
    <div className="h-full relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer border border-blue-primary text-blue-primary h-full flex items-center justify-center rounded-md"
      >
        <span className="mr-2">{sortBy.label}</span>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>
      {isOpen && (
        <Dropdown onClose={() => setIsOpen(false)}>
          <ul className="text-left w-40 px-2">
            {options.map((option) => (
              <li
                key={option.value}
                className="cursor-pointer mb-1 hover:underline"
                onClick={() => onSelect(option)}
              >
                <span>{option.label}</span>
              </li>
            ))}
          </ul>
        </Dropdown>
      )}
    </div>
  );
}
