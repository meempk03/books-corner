'use client';

import { useEffect, useState } from 'react';
import { API_URL } from '../lib/api';
import { Book } from '../lib/book.interface';
import BookCard from './book';

export default function FeaturedBooks({ type }: { type: string }) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${API_URL}/books?genre=${type}&limit=5`);
        const data = await response.json();
        console.log('Featured Books:', data);
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Loading {type} books...</div>;
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12">{type}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {books.map((book) => (
            < BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
