import React from 'react';

export default function SearchLoadingComponent() {
  return (
    <div className="flex container justify-center">
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-1/3 mx-auto">
        <div className="animate-pulse flex flex-col items-center">
          <div className="rounded-lg bg-blue-400 h-24 w-24"></div>
          <div className="h-4 bg-blue-400 rounded w-1/2 mt-4"></div>
          <div className="h-4 bg-blue-400 rounded w-3/4 mt-4"></div>
          <div className="h-4 bg-blue-400 rounded w-3/4 mt-4"></div>
          <div className="h-4 bg-blue-400 rounded w-1/4 mt-4"></div>
        </div>
      </div>
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-1/3 mx-auto">
        <div className="animate-pulse flex flex-col items-center">
          <div className="rounded-lg bg-blue-400 h-24 w-24"></div>
          <div className="h-4 bg-blue-400 rounded w-1/2 mt-4"></div>
          <div className="h-4 bg-blue-400 rounded w-3/4 mt-4"></div>
          <div className="h-4 bg-blue-400 rounded w-3/4 mt-4"></div>
          <div className="h-4 bg-blue-400 rounded w-1/4 mt-4"></div>
        </div>
      </div>
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-1/3 mx-auto">
        <div className="animate-pulse flex flex-col items-center">
          <div className="rounded-lg bg-blue-400 h-24 w-24"></div>
          <div className="h-4 bg-blue-400 rounded w-1/2 mt-4"></div>
          <div className="h-4 bg-blue-400 rounded w-3/4 mt-4"></div>
          <div className="h-4 bg-blue-400 rounded w-3/4 mt-4"></div>
          <div className="h-4 bg-blue-400 rounded w-1/4 mt-4"></div>
        </div>
      </div>
    </div>
  );
}
