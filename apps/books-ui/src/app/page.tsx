import { Suspense } from 'react';
import Link from 'next/link';
import FeaturedBooks from './ui/featured-books';
import PopularGenres from './ui/popular-genres';
import BookListSkeleton from './ui/skeletons/book-list-skeleton';
import GenresSkeleton from './ui/skeletons/genres-skeleton';

export default async function Page() {
  return (
    <>
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Discover Your Next Great Read
          </h2>
          <p className="text-secondary text-lg mb-6">
            Explore thousands of books from every genre and author you love.
          </p>
          <Link href="/books" className="bg-gold hover:bg-gold/80 text-surface px-6 py-3 rounded-md font-semibold transition">
            Browse Books
          </Link>
        </div>
      </section>

      {/* Popular Genres */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            Popular Genres
          </h3>
          <Suspense fallback={<GenresSkeleton />}>
            <PopularGenres />
          </Suspense>
        </div>
      </section>

      {/* Featured Books Sections */}
      {['Romance', 'Classics', 'Motivational'].map((type) => (
        <section key={type} className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-12 text-primary">{type}</h3>
            <Suspense key={type} fallback={<BookListSkeleton count={5} />}>
              <FeaturedBooks key={type} type={type} />
            </Suspense>
          </div>
        </section>
      ))}
    </>
  );
}
