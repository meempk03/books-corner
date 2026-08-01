import BookSkeleton from './book-skeleton';

export default function BookListSkeleton({ count }: { count?: number }) {
  if (count === undefined) {
    count = 12;
  }
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: count }).map((_, index) => (
        <BookSkeleton key={index} />
      ))}
    </div>
  );
}
