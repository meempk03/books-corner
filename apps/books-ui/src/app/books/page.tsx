'use client';

import { useState } from 'react';
// import { Search, Star, ChevronDown } from 'lucide-react';
import { Book } from '../lib/book.interface';
import BookCard from '../ui/book';

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

const GENRES = ['All Books', 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'Romance'];
const AUTHORS = ['Matt Haig', 'Frank Herbert', 'Alex Michaelides', 'Yuval Noah Harari', 'Taylor Jenkins Reid', 'Andy Weir'];

function FilterSection({
  title,
  items,
  selected,
  onToggle,
}: {
  title: string;
  items: string[];
  selected: Set<string>;
  onToggle: (item: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mb-3 font-semibold text-gray-900 hover:text-blue-600"
      >
        {title}
        {/* <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? '' : 'rotate-180'}`} /> */}
      </button>
      {isOpen && (
        <div className="space-y-2">
          {items.map((item) => (
            <label key={item} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selected.has(item)}
                onChange={() => onToggle(item)}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-sm text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set(['All Books']));
  const [selectedAuthors, setSelectedAuthors] = useState<Set<string>>(new Set());
  const [minYear, setMinYear] = useState(0);

  const toggleGenre = (genre: string) => {
    const newGenres = new Set(selectedGenres);
    if (genre === 'All Books') {
      newGenres.clear();
      newGenres.add('All Books');
    } else {
      newGenres.delete('All Books');
      if (newGenres.has(genre)) {
        newGenres.delete(genre);
      } else {
        newGenres.add(genre);
      }
    }
    setSelectedGenres(newGenres);
  };

  const toggleAuthor = (author: string) => {
    const newAuthors = new Set(selectedAuthors);
    if (newAuthors.has(author)) {
      newAuthors.delete(author);
    } else {
      newAuthors.add(author);
    }
    setSelectedAuthors(newAuthors);
  };

  const filteredBooks = SAMPLE_BOOKS.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.authorName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesAuthor = selectedAuthors.size === 0 || selectedAuthors.has(book.authorName);

    const matchesYear = book.firstPublishYear >= minYear;

    return matchesSearch && matchesAuthor && matchesYear;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Books</h1>
            <div className="flex-grow flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 max-w-md">
              {/* <Search className="w-5 h-5 text-gray-500" /> */}
              <input
                type="text"
                placeholder="Search books or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow bg-transparent outline-none text-gray-900 placeholder-gray-600"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Filters</h2>

              <FilterSection
                title="Genre"
                items={GENRES}
                selected={selectedGenres}
                onToggle={toggleGenre}
              />

              <FilterSection
                title="Author"
                items={AUTHORS}
                selected={selectedAuthors}
                onToggle={toggleAuthor}
              />

              <div className="border-b pb-4">
                <label className="font-semibold text-gray-900 block mb-3">Publish Year</label>
                <div className="space-y-2">
                  {[0, 1990, 2000, 2010, 2020].map((year) => (
                    <label key={year} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="year"
                        checked={minYear === year}
                        onChange={() => setMinYear(year)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-sm text-gray-700">
                        {year === 0 ? 'All Years' : `${year}+`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedGenres(new Set(['All Books']));
                  setSelectedAuthors(new Set());
                  setMinYear(0);
                }}
                className="w-full mt-6 py-2 text-blue-600 hover:text-blue-700 font-medium text-sm border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Books Grid */}
          <section className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredBooks.length}</span> books
              </p>
            </div>

            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book) => (
                  <BookCard key={book.coverId} book={book} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-gray-600 text-lg">No books found matching your filters.</p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}