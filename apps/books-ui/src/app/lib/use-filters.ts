'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';

type Filters = Record<string, string[]>;

export function useFilters() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [localFilters, setLocalFilters] = useState<Filters | null>(null);

  // Parse URL → filters object
  const filters: Filters = useMemo(() => {
    const result: Filters = {};

    searchParams.forEach((value, key) => {
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(value);
    });

    return result;
  }, [searchParams]);

  // Use local filters if set, otherwise URL filters
  const currentFilters = localFilters || filters;

  // Helper to build URL
  const createQueryString = useCallback(
    (newFilters: Filters) => {
      const params = new URLSearchParams();

      Object.entries(newFilters).forEach(([key, values]) => {
        values.forEach((value) => {
          params.append(key, value);
        });
      });

      return params.toString();
    },
    []
  );

  // Add / update filter
  const setFilter = useCallback((key: string, value: string) => {
    setLocalFilters((prev) => {
      const updated = { ...(prev || filters) };
      if (!updated[key]) updated[key] = [];
      if (!updated[key].includes(value)) {
        updated[key].push(value);
      }
      return updated;
    });
  }, [filters]);

    // Add / update query
    const setQuery = useCallback(
      (value: string) => {
        const newFilters = { ...currentFilters };
  
        if (value) {
          newFilters['query'] = [value];
        } else {
          delete newFilters['query'];
        }
  
        const query = createQueryString(newFilters);
        replace(`${pathname}?${query}`);
      },
      [filters, replace, createQueryString]
    );

  // Remove filter
  const removeFilter = useCallback((key: string, value: string) => {
    setLocalFilters((prev) => {
      const updated = { ...(prev || filters) };
      if (!updated[key]) return prev;
      updated[key] = updated[key].filter((v) => v !== value);
      if (updated[key].length === 0) delete updated[key];
      return updated;
    });
  }, [filters]);

  // apply filters
  const applyFilters = useCallback(() => {
    const query = createQueryString(currentFilters);
    replace(query ? `${pathname}?${query}` : `${pathname}`);
    setLocalFilters(null);
  }, [currentFilters, replace, createQueryString, pathname]);

  // Clear all filters
  const clearFilters = useCallback(() => {
    replace(pathname);
    setLocalFilters(null);
  }, [replace, pathname]);

  return {
    filters: currentFilters,
    setFilter,
    setQuery,
    removeFilter,
    applyFilters,
    clearFilters,
  };
}