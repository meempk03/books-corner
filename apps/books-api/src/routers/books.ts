import express from 'express';
import { Book } from '../models/book.interface';

export const router = express.Router();

router.get('/books', async (req, res) => {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(
        req.query.search?.toString() ?? ''
      )}`
    );
    const booksJson = await response.json();
    const books: Book[] = booksJson.docs.map((book: any) => ({
      title: book.title,
      authorName: book.author_name,
      firstPublishYear: book.first_publish_year,
      authorKey: book.author_key,
    }));  
    res.send(books);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});
