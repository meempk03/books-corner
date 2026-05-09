'use client';

import { Search } from 'lucide-react';
import { useDebouncedCallback } from 'use-debounce';
import { useFilters } from '../lib/use-filters';

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const { filters, setQuery } = useFilters();
  const searchQuery: string = Array.isArray(filters.query) ? filters.query[0] : '';

  const handleSearch = useDebouncedCallback((query: string) => setQuery(query), 300);

  return (
    <div className="mb-8 flex items-center gap-2 bg-green-50 rounded-md px-4 py-3">
      <Search className="w-5 h-5 text-moonstone" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchQuery?.toString()}
        className="flex-grow bg-transparent outline-none text-oxfordblue placeholder-moonstone"
      />
    </div>
  );
}
