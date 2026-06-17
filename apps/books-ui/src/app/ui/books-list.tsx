import { API_URL } from '../lib/api';
import { Book } from '../lib/book.interface';
import BookCard from './book';

export default async function BooksList({
  queryParams,
}: {
  queryParams: string;
}) {
  const filteredBooks: Book[] = await fetch(
    `${API_URL}/books?${queryParams}`
  ).then((res) => res.json());

  return (
    <>
      <div className="mb-6">
        <p className="text-muted">
          Showing <span className="font-semibold">{filteredBooks.length}</span>{' '}
          books
        </p>
      </div>

      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="bg-card rounded-md p-12 text-center border border-muted">
          <p className="text-muted text-lg">
            No books found matching your filters.
          </p>
        </div>
      )}
    </>
  );
}
