import { useLoaderData } from 'react-router';

import BookList from '../../components/books/BookList';

const BooksPage = () => {
  const booksData = useLoaderData() || [];

  return (
    <>
      <h1>Catalog</h1>
      <BookList books={booksData} />
    </>
  );
};

export default BooksPage;
