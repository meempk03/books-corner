import { Book } from '../lib/book.interface';
import Image from 'next/image';

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="bg-moonstone rounded-lg shadow-lg text-slate-950 overflow-hidden flex flex-col h-full">
      <div className="bg-green-50 w-full aspect-[3/4] overflow-hidden">
        <Image
          src={book.coverImage}
          alt={book.title}
          width={180}
          height={280}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h4 className="text-xl font-semibold mb-2">{book.title}</h4>
        {/* <p className="text-sm self-end">
          {book.authorName.map((author, index) => 
            index === book.authorName.length - 1 ? author : `${author}, `
          ).join('')}
          </p> */}
        <p className="text-sm">
          A short summary of the book goes here. Make it catchy and concise!
        </p>
      </div>
    </div>
  );
}
