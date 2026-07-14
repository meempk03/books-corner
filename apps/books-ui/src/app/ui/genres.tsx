import { API_URL } from '../lib/api';

export default async function Genres() {
  let genres: string[] = [];
  try {
    const response = await fetch(`${API_URL}/genres`);
    genres = await response.json();
  } catch (error) {
    console.error('Error fetching genres:', error);
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {genres.map((genre) => (
        <div
          key={genre}
          className="bg-card hover:bg-gold/20 text-primary py-4 px-6 rounded-lg font-semibold text-center shadow-md transition cursor-pointer border border-border"
        >
          {genre}
        </div>
      ))}
    </div>
  );
}
