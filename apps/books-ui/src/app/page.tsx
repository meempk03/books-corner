import { Suspense } from 'react';
import { API_URL } from './lib/api';
import FeaturedBooks from './ui/featured-books';
import Genres from './ui/genres';

export default async function Home() {
  const books = await fetch(`${API_URL}/books?search='harrypotter'`).then(
    (res) => res.json()
  );
  console.log('boooks', books);
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            Discover Your Next Great Read
          </h2>
          <p className="text-moonstone text-lg mb-6">
            Explore thousands of books from every genre and author you love.
          </p>
          <button className="bg-red-700 hover:bg-red-800 text-green-50 px-6 py-3 rounded-md font-semibold transition">
            Browse Books
          </button>
        </div>
      </section>

      {/* Popular Genres */}
      <Suspense fallback={<div className="text-center py-16">Loading genres...</div>}>
        <Genres />
      </Suspense>

      {/* Featured Books */}
      < FeaturedBooks />

      {/* Newsletter Section */}
      <section className="py-16 text-center border-t border-moonstone">
        <div className="max-w-xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-moonstone mb-6">
            Subscribe to our newsletter for the latest books and updates.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-green-50 text-slate-950 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-red-700 hover:bg-red-800 text-green-50 px-6 py-2 rounded-md font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
