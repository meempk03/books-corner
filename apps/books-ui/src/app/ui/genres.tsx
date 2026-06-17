'use client';

import { useEffect, useState } from 'react';
import { API_URL } from '../lib/api';

export default function Genres() {
  const [genres, setGenres] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(`${API_URL}/genres`);
        const data = await response.json();
        console.log('Genres:', data);
        setGenres(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Loading genres...</div>;
  }

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-primary">Popular Genres</h3>
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
      </div>
    </section>
  );
}
