import Link from 'next/link';
import { API_URL } from '../lib/api';

export default async function PopularGenres() {
  let genres: string[] = [];
  try {
    console.log('Fetching popular genres from API...', `${API_URL}/popularGenres`);
    const response = await fetch(`${API_URL}/popularGenres')}`);
    console.log('Response status for genres:', response);
    genres = await response.json();
  } catch (error) {
    console.error('Error fetching genres:', error);
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {genres.map((genre) => (
        <Link
          href={`/books?genre=${encodeURIComponent(genre)}`}
          key={genre}
          className="bg-card hover:bg-gold/20 text-primary py-4 px-6 rounded-lg font-semibold text-center shadow-md transition cursor-pointer border border-border"
        >
          {genre}
        </Link>
      ))}
    </div>
  );
}
