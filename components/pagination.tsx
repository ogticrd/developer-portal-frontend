import React from 'react'

export default function Pagination({
  currentPage,
  totalResults,
  limit,
  onPageChange,
}: {
  currentPage: number
  totalResults: number
  limit: number
  onPageChange: Function
}) {
  const pagesQuantity = Math.ceil(totalResults / limit)
  const pages = new Array(pagesQuantity).fill(0)

  return (
    <div>
      <div className="flex gap-4 mx-auto justify-center my-4">
        {pages.map((_, i) => (
          <span
            className={`cursor-pointer text-lg w-8 h-8 flex items-center justify-center rounded-full ${
              currentPage == i + 1 && 'text-white bg-blue-primary'
            }`}
            key={i}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </span>
        ))}
      </div>
    </div>
  )
}
