import { Link } from 'react-router';

const BookCard = ({ book }) => {
  return (
    <li className='card'>
      <img src={book.cover_image} />
      <Link to={`/books/${book.id}`}>{book.title}</Link>
    </li>
  );
};

export default BookCard;
