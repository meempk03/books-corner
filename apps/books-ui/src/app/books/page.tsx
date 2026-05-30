import { Book } from '../lib/book.interface';
import BookCard from '../ui/book';
import SearchBar from '../ui/search';
import FilterSidebar from '../ui/filter-sidebar';
import { API_URL } from '../lib/api';

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

  const [genres, filteredBooks]: [string[], Book[]] = await Promise.all([
    fetch(`${API_URL}/genres`).then((res) => res.json()),
    fetch(`${API_URL}/books?${queryParams.toString()}`).then((res) =>
      res.json()
    ),
  ]);
  
  return (
    <>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <FilterSidebar genres={genres} />

          {/* Books Grid */}
          <section className="lg:col-span-3">
            {/* Search Bar */}
            <SearchBar placeholder="Search books or authors..." />

            <div className="mb-6">
              <p className="text-muted">
                Showing{' '}
                <span className="font-semibold">{filteredBooks.length}</span>{' '}
                books
              </p>
            </div>

            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="bg-card rounded-md p-12 text-center border border-muted">
                <p className="text-muted text-lg">
                  No books found matching your filters. 
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
