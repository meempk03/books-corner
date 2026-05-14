import FeaturedBooks from './ui/featured-books';
import Genres from './ui/genres';

export default function Page() {
  return (
    <>
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
      <Genres />

      {/* Featured Books */}
      <FeaturedBooks type={'Popular'}/>
      <FeaturedBooks type={'Romance'}/>
      <FeaturedBooks type={'Classics'}/>
      <FeaturedBooks type={'Motivational'}/>
    </>
  );
}
