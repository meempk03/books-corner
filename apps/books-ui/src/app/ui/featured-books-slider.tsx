'use client';

import Slider from 'react-slick';
import BookCard from './book';
import { Book } from '../lib/book.interface';

export default function FeaturedBooksSlider({ books }: { books: Book[] }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      {books.map((book) => (
        <div key={book.id} className="p-4">
          <BookCard book={book} />
        </div>
      ))}
    </Slider>
  );
}