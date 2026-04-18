import express from 'express';
import { Book } from '../models/book.interface';

export const router = express.Router();

const API_BASE_URL = 'https://openlibrary.org';

router.get('/books', async (req, res) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search.json?q=${encodeURIComponent(
        req.query.search?.toString() ?? ''
      )}`
    );
    const booksJson = await response.json();
    const books: Book[] = booksJson.docs.map((book: any) => ({
      title: book.title,
      authorName: book.author_name,
      firstPublishYear: book.first_publish_year,
      authorKey: book.author_key,
      coverId: book.cover_i,
    }));
    res.send(books);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

router.get('/genres', async (req, res) => {
  try {
    const genres = [
      'Fiction',
      'Mystery',
      'Fantasy',
      'Romance',
      'Science Fiction',
      'Biography',
      'History',
      'Self-Help',
    ];
    res.send(genres);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

router.get('/featuredBooks', async (req, res) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search.json?q=${encodeURIComponent('featured books')}`
    );
    const booksJson = await response.json();
    console.log('booksJson', booksJson.docs.slice(0, 3));
    const books: Book[] = booksJson.docs
      .slice(0, 3) // Get first 3 books
      .map((book: any) => ({
        title: book.title,
        authorName: book.author_name,
        firstPublishYear: book.first_publish_year,
        authorKey: book.author_key,
        coverId: book.cover_i,
      }));
    res.send(books);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});
