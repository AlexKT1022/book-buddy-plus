import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </ul>
  );
};

export default BookList;
