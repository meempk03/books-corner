import express from 'express';

export const router = express.Router();

router.get('/books', async (req, res) => {
  try {
    const books = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(
        req.query.search?.toString() ?? ''
      )}`
    );
    res.send(books);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});
