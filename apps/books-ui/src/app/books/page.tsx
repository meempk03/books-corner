import SearchBar from '../ui/search';
import FilterSidebar from '../ui/filter-sidebar';
import BooksList from '../ui/books-list';
import { Suspense } from 'react';
import BookListSkeleton from '../ui/skeletons/book-list-skeleton';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const filters = await searchParams;
  const queryParams = new URLSearchParams();

  if (filters.search) {
    queryParams.append(
      'search',
      Array.isArray(filters.search) ? filters.search[0] : filters.search
    );
  }
  if (filters.genre) {
    const genres = Array.isArray(filters.genre)
      ? filters.genre
      : [filters.genre];
    genres.forEach((genre) => queryParams.append('genre', genre));
  }

  return (
    <>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <FilterSidebar />

          {/* Books Grid */}
          <section className="lg:col-span-3">
            {/* Search Bar */}
            <SearchBar placeholder="Search books or authors..." />

            <Suspense key={queryParams.toString()} fallback={<BookListSkeleton />}>
              <BooksList queryParams={queryParams.toString()} />
            </Suspense>
          </section>
        </div>
      </main>
    </>
  );
}
