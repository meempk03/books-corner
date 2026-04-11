import { API_URL } from '../lib/api';

export default async function Genres() {
  // const genres: string[] = await fetch(`${API_URL}/genres`).then((res) => res.json());
  const genresResp = await fetch(`${API_URL}/genres`);
  const genres: string[] = await genresResp.json();
  console.log('genres', genres);  

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Popular Genres</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-green-50">
          {genres.map((genre) => (
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
  );
}
