import { API_BASE_URL } from "./lib/api";

export default async function Home() {
  console.log('API_BASE_URL', API_BASE_URL);
  // const books = await fetch(`${API_BASE_URL}/books?search='harrypotter'`).then((res) => res.json());
  // console.log('boooks', books);
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
        Base url {API_BASE_URL}
          <h2 className="text-4xl font-bold mb-4">Discover Your Next Great Read</h2>
          <p className="text-moonstone text-lg mb-6">
            Explore thousands of books from every genre and author you love.
          </p>
          <button className="bg-red-700 hover:bg-red-800 text-green-50 px-6 py-3 rounded-md font-semibold transition">
            Browse Books
          </button>
        </div>
      </section>

      {/* Popular Genres */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Popular Genres</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-green-50">
            {[
              'Fiction',
              'Mystery',
              'Fantasy',
              'Romance',
              'Science Fiction',
              'Biography',
              'History',
              'Self-Help',
            ].map((genre) => (
              <div
                key={genre}
                className="bg-moonstone hover:bg-cyan-200 text-slate-950 py-4 px-6 rounded-lg font-semibold text-center shadow-md transition cursor-pointer"
              >
                {genre}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Featured Books */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Books</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((book) => (
              <div key={book} className="bg-moonstone rounded-lg shadow-lg p-6 text-slate-950">
                <div className="h-48 bg-green-50 rounded mb-4"></div>
                <h4 className="text-xl font-semibold mb-2">Book Title</h4>
                <p className="text-sm">
                  A short summary of the book goes here. Make it catchy and concise!
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 text-center border-t border-moonstone">
        <div className="max-w-xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-moonstone mb-6">Subscribe to our newsletter for the latest books and updates.</p>
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

