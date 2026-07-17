import express from 'express';
import { Book } from '../models/book.interface';
import { buildBooksQuery } from '../lib/books-query';

export const router = express.Router();

const popularGenres = ['Fiction', 'Mystery', 'Fantasy', 'History', 'Horror', 'Thriller'];

const API_BASE_URL = 'https://openlibrary.org';

const formatBook = (book: any): Book => ({
  title: book.title,
  authorName: book.author_name ?? ['Unknown Author'],
  authorKey: book.author_key,
  firstPublishYear: book.first_publish_year,
  coverId: book.cover_i,
  language: book.language,
  coverEditionKey: book.cover_edition_key,
  id: book.key,
  coverImage: book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : `/assets/${Math.random() > 0.5 ? 'fallback1' : 'fallback2'}.png`,
});

router.get('/books', async (req, res) => {
  try {
    const fields =
      'title,author_name,author_key,cover_i,first_publish_year,key,language,cover_edition_key';
    const query = buildBooksQuery(req.query);
    let url = `${API_BASE_URL}/search.json?q=${encodeURIComponent(query)}&fields=${fields}`;
    if (req.query.limit) {
      url += `&limit=${req.query.limit}`;
    }
    const response = await fetch(url);
    const booksJson = await response.json();
    const books: Book[] = booksJson.docs.map((book: any) => formatBook(book));
    res.send(books);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

router.get('/popularGenres', async (req, res) => {
  try {
    res.send(popularGenres);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

router.get('/genres', async (req, res) => {
  try {
    const genres = popularGenres.concat([
      'Biography',
      'Romance',
      'Self-Help',
      'Classics',
      'Motivational',
    ]);
    res.send(genres);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});
