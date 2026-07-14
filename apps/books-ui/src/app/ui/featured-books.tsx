import { API_URL } from '../lib/api';
import { Book } from '../lib/book.interface';
import BookCard from './book';

export default async function FeaturedBooks({ type }: { type: string }) {
  let books: Book[] = [];
  try {
    books = await fetch(
      `${API_URL}/books?genre=${type}&limit=5`
    ).then((res) => res.json());
  } catch (error) {
    console.error('Error fetching featured books:', error);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
