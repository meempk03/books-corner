'use client';

import { useEffect, useState } from 'react';
import { API_URL } from '../lib/api';
import { Book } from '../lib/book.interface';

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
            <div
              key={book.coverId}
              className="bg-moonstone rounded-lg shadow-lg p-6 text-slate-950"
            >
              <div className="h-48 bg-green-50 rounded mb-4"></div>
              <h4 className="text-xl font-semibold mb-2">{book.title}</h4>
              <p className="text-sm">
                A short summary of the book goes here. Make it catchy and
                concise!
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
