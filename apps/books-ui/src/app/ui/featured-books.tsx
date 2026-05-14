'use client';

import { useEffect, useState } from 'react';
import { API_URL } from '../lib/api';
import { Book } from '../lib/book.interface';
import BookCard from './book';

export default function FeaturedBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${API_URL}/featuredBooks`);
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
    return <div className="text-center py-16">Loading featured books...</div>;
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Featured Books</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {books.map((book) => (
            < BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
