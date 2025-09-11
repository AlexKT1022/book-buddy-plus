import { useLoaderData, useNavigate } from 'react-router';
// import { useAuth } from '../../Context/AuthContext';

// I used bootstrap for styling, if we stick with that will need to import bootstrap, we can also style traditionally with css if preferred.
// Reservation endpoint needs to be properly set up.
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const BookPage = () => {
  const book = useLoaderData(); // I think the tables are as follows, I cant remember if its cover_image or coverimage so for now I am going to make a conditional statement for both, if anything else is off I will need to adjust { id, title, author, description, cover_image?, coverimage? available }
  const { token } = 'token';
  const navigate = useNavigate();

  const handleReserve = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ bookId: book?.id }),
      });

      if (!res.ok) {
        const msg = await res.text().catch(() => '');
        throw new Error(msg || `Reservation failed (${res.status})`);
      }

      navigate(`/Books/${book.id}`);
    } catch (err) {
      console.error(err);
      alert('Could not reserve the book. Please try again.');
    }
  };

  if (!book) {
    return (
      <div className='container'>
        <p>Loading…</p>
      </div>
    );
  }

  const coverSrc = book.cover_image || book.coverimage || '';
  const isAvailable = Boolean(book.available);

  return (
    <div className='book-details-container'>
      <div id='book' className='text-center m-3'>
        <figure>
          {coverSrc ? (
            <img
              className='book-details-img'
              src={coverSrc}
              alt={`cover image of ${book.title}`}
            />
          ) : null}
        </figure>
      </div>

      <div className='container col-md-8 col-lg-6 border'>
        <section className='text-left'>
          <h1>{book.title}</h1>
          <p className='lead'>{book.author}</p>
          <p className='lead'>{book.description}</p>

          {token ? (
            isAvailable ? (
              <button
                onClick={handleReserve}
                className='btn btn-outline-primary'
              >
                Reserve this book
              </button>
            ) : (
              <button className='btn btn-outline-primary' disabled>
                Book is already reserved
              </button>
            )
          ) : null}
        </section>
      </div>
    </div>
  );
};

export default BookPage;
