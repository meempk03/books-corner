'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useFilters } from '../lib/use-filters';
import { API_URL } from '../lib/api';

export default function FilterSidebar() {
  const [genres, setGenres] = useState<string[]>([]);
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

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(`${API_URL}/genres`);
        const data = await response.json();
        setGenres(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };

    fetchGenres();
  }, []);

  const filterSection = (title: string, items: string[], type: string) => {
    const isOpen = openSections[type as keyof typeof openSections];
    const selectedFilters = filters[type] || [];

    return (
      <div className="border-b border-muted pb-3">
        <button
          onClick={() =>
            setOpenSections((prev) => ({
              ...prev,
              [type]: !prev[type as keyof typeof prev],
            }))
          }
          className="flex items-center justify-between w-full mb-3 font-semibold text-primary hover:text-gold transition"
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
                  className="w-4 h-4 accent-gold rounded"
                />
                <span className="text-sm text-secondary">{item}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="lg:col-span-1">
      <div className="bg-surface rounded-md p-6 sticky top-0">
        <h2 className="text-lg font-bold mb-6 text-primary">Filters</h2>

        {filterSection('Genre', genres, 'genre')}
        {/* {filterSection('Author', authors, 'author')} */}

        <div className="flex gap-4 mt-6">
          <button
            onClick={clearFilters}
            className="flex-1 px-4 py-2 border border-gold text-gold hover:bg-gold/10 rounded-md font-semibold transition"
          >
            Reset
          </button>
          <button
            onClick={applyFilters}
            className="flex-1 px-4 py-2 bg-gold hover:bg-gold/90 text-surface rounded-md font-semibold transition"
          >
            Apply
          </button>
        </div>
      </div>
    </aside>
  );
}
