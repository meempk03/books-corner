import { Book } from '../lib/book.interface';
import Image from 'next/image';

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-black shadow-2xl">
      {/* Background image or fallback */}
      <Image
        src={book.coverImage}
        alt={book.title}
        width={180}
        height={280}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

      {/* Decorative border */}
      <div className="absolute inset-3 rounded-2xl border border-border" />

      {/* Content */}
      <div className="absolute bottom-0 z-10 p-5 text-primary">
        <h2 className="mt-3 text-xl font-bold leading-tight drop-shadow-lg">
          {book.title}
        </h2>
        <p className="mt-2 text-sm text-secondary">{book.firstPublishYear}</p>
      </div>
    </div>
  );
}
