import { Book } from '../lib/book.interface';
import BookCard from '../ui/book';
import SearchBar from '../ui/search';
import FilterSidebar from '../ui/filter-sidebar';

const SAMPLE_BOOKS: Book[] = [
  {
    title: 'The Midnight Library',
    authorName: 'Matt Haig',
    firstPublishYear: 2020,
    authorKey: ['author1'],
    coverId: 1,
    coverImage: 'https://covers.openlibrary.org/b/id/1-M.jpg',
  },
  {
    title: 'Dune',
    authorName: 'Frank Herbert',
    firstPublishYear: 1965,
    authorKey: ['author2'],
    coverId: 2,
    coverImage: 'https://covers.openlibrary.org/b/id/2-M.jpg',
  },
  {
    title: 'The Silent Patient',
    authorName: 'Alex Michaelides',
    firstPublishYear: 2019,
    authorKey: ['author3'],
    coverId: 3,
    coverImage: 'https://covers.openlibrary.org/b/id/3-M.jpg',
  },
  {
    title: 'Sapiens',
    authorName: 'Yuval Noah Harari',
    firstPublishYear: 2014,
    authorKey: ['author4'],
    coverId: 4,
    coverImage: 'https://covers.openlibrary.org/b/id/4-M.jpg',
  },
  {
    title: 'The Seven Husbands of Evelyn Hugo',
    authorName: 'Taylor Jenkins Reid',
    firstPublishYear: 2017,
    authorKey: ['author5'],
    coverId: 5,
    coverImage: 'https://covers.openlibrary.org/b/id/5-M.jpg',
  },
  {
    title: 'Project Hail Mary',
    authorName: 'Andy Weir',
    firstPublishYear: 2021,
    authorKey: ['author6'],
    coverId: 6,
    coverImage: 'https://covers.openlibrary.org/b/id/6-M.jpg',
  },
];

const GENRES = [
  'All Books',
  'Fiction',
  'Non-Fiction',
  'Sci-Fi',
  'Mystery',
  'Romance',
];
const AUTHORS = [
  'Matt Haig',
  'Frank Herbert',
  'Alex Michaelides',
  'Yuval Noah Harari',
  'Taylor Jenkins Reid',
  'Andy Weir',
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {

  const filters = await searchParams;
  let selectedGenres: string[] = [];
  let selectedAuthors: string[] = [];
  const searchQuery: string = Array.isArray(filters.query) ? filters.query[0] : '';
  if (filters.genre) {
    selectedGenres = Array.isArray(filters.genre)
    ? filters.genre
    : [filters.genre].filter(Boolean);
  }
  if (filters.author) {
  selectedAuthors = Array.isArray(filters.author)
    ? filters.author
    : [filters.author].filter(Boolean);
  }
  const filteredBooks = SAMPLE_BOOKS.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.authorName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesAuthor =
      selectedAuthors.length === 0 || selectedAuthors.includes(book.authorName);

    return matchesSearch && matchesAuthor;
  });

  return (
    <>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <FilterSidebar genres={GENRES} authors={AUTHORS} />

          {/* Books Grid */}
          <section className="lg:col-span-3">
            {/* Search Bar */}
            <SearchBar placeholder="Search books or authors..." />

            <div className="mb-6">
              <p className="text-moonstone">
                Showing{' '}
                <span className="font-semibold">{filteredBooks.length}</span>{' '}
                books
              </p>
            </div>

            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book) => (
                  <BookCard key={book.coverId} book={book} />
                ))}
              </div>
            ) : (
              <div className="bg-green-50 rounded-md p-12 text-center border border-moonstone">
                <p className="text-moonstone text-lg">
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
