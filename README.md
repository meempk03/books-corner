# Books Explorer

A monorepo workspace for exploring and searching books using the Open Library API. Built with Nx, Next.js, and Node.js.

## Project Structure

- **`apps/books-ui`** - Next.js frontend application for browsing and searching books
- **`apps/books-api`** - Node.js backend API that fetches and filters books and genres from Open Library
- **`libs/`** - Shared libraries across the monorepo

## Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm

### Installation

```bash
pnpm install
```

## Development

Run the development server for a specific project.

### Frontend

```bash
nx dev books-ui
```

### Backend

```bash
nx dev books-api
```

Open `http://localhost:3000` to view the Books UI application.

## Features

- **Landing Page** - Discover books across various categories
- **Books Listing Page** - Browse and search books with filtering
- **Open Library Integration** - Real-time book data from Open Library API
- **Genre Filtering** - Filter books by genres returned from the books API

## Tech Stack

### Frontend

- Next.js
- React
- Tailwind CSS

### Backend

- Node.js

### Monorepo

- Nx

### Package Manager

- pnpm

### Data Source

- Open Library API
