type SearchFilters = {
  genre?: string[];
  authors?: string[];
  search?: string;
  language?: string;
};

const constructFilters = (query: Record<string, any>) => {
  const filters: SearchFilters = {};

  if (query.search) {
    filters.search = Array.isArray(query.search) ? query.search[0] : query.search;
  }
  if (query.genre) {
    filters.genre = Array.isArray(query.genre) ? query.genre : [query.genre];
  }
  if (query.authors) {
    filters.authors = Array.isArray(query.authors)
      ? query.authors
      : [query.authors];
  }
  if (query.language) {
    filters.language = Array.isArray(query.language)
      ? query.language[0]
      : query.language;
  }

  return filters;
}

export function buildBooksQuery(query: Record<string, any>): string {
  const filters = constructFilters(query);
  const queryParts: string[] = [];

  // General search
  if (filters.search) {
    queryParts.push(`(${filters.search})`);
  }

  // Subjects
  if (filters.genre?.length) {
    const subjectQuery = filters.genre
      .map((subject) => `subject_key:"${subject.toLowerCase()}"`)
      .join(' OR ');

    queryParts.push(`(${subjectQuery})`);
  }

  // Authors
  if (filters.authors?.length) {
    const authorQuery = Array(filters.authors) ? filters.authors : [filters.authors]
      .map((author) => `author:"${author}"`)
      .join(' OR ');

    queryParts.push(`(${authorQuery})`);
  }

    // Language
    if (filters.language) {
      queryParts.push(`language:${filters.language}`);
    }
  
  if (queryParts.length === 0) {
    return 'latest popular'; // Default query to show something when no filters are applied
  }

  return queryParts.join(' AND ');
}
