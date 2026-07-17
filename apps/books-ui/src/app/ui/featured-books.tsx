import { API_URL } from '../lib/api';
import { Book } from '../lib/book.interface';
import FeaturedBooksSlider from './featured-books-slider';

export default async function FeaturedBooks({ type }: { type: string }) {
  let books: Book[] = [];
  try {
    const response = await fetch(`${API_URL}/books?genre=${type}&limit=15`);
    books = await response.json();
  } catch (error) {
    console.error('Error fetching featured books:', error);
  }

  return (
    <FeaturedBooksSlider books={books} />
  );
}
