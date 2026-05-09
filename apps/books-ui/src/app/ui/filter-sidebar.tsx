'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useFilters } from '../lib/use-filters';

export default function FilterSidebar({
  genres,
  authors,
}: {
  genres: string[];
  authors: string[];
}) {
  const [openSections, setOpenSections] = useState({
    genre: true,
    author: true,
  });
  const { filters, setFilter, removeFilter, clearFilters, applyFilters } =
    useFilters();

  const handleToggle = (type: string, item: string) => {
    if (filters[type]?.includes(item)) {
      removeFilter(type, item);
    } else {
      setFilter(type, item);
    }
  };

  const filterSection = (title: string, items: string[], type: string) => {
    const isOpen = openSections[type as keyof typeof openSections];
    const selectedFilters = filters[type] || [];

    return (
      <div className="border-b border-moonstone pb-3">
        <button
          onClick={() =>
            setOpenSections((prev) => ({
              ...prev,
              [type]: !prev[type as keyof typeof prev],
            }))
          }
          className="flex items-center justify-between w-full mb-3 font-semibold text-oxfordblue hover:text-moonstone transition"
        >
          {title}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? '' : 'rotate-180'
            }`}
          />
        </button>
        {isOpen && (
          <div className="space-y-2">
            {items.map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(item)}
                  onChange={() => handleToggle(type, item)}
                  className="w-4 h-4 accent-red-700 rounded"
                />
                <span className="text-sm text-oxfordblue">{item}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="lg:col-span-1">
      <div className="bg-green-50 rounded-md p-6 sticky top-24">
        <h2 className="text-lg font-bold mb-6 text-oxfordblue">Filters</h2>

        {filterSection('Genre', genres, 'genre')}
        {filterSection('Author', authors, 'author')}

        <div className="flex gap-4 mt-6">
          <button
            onClick={clearFilters}
            className="flex-1 px-4 py-2 border border-red-700 text-red-700 hover:bg-red-50 rounded-md font-semibold transition"
          >
            Reset
          </button>
          <button
            onClick={applyFilters}
            className="flex-1 px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-md font-semibold transition"
          >
            Apply
          </button>
        </div>
      </div>
    </aside>
  );
}
