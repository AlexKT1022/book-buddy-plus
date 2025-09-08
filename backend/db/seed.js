import db from '#db/client';
import { createBook, getRandomBook } from '#db/queries/booksQueries';
import { createReservation } from '#db/queries/reservationQueries';
import { createUser } from '#db/queries/userQueries';

const fetchBooks = async () => {
  const res = await fetch(
    'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books'
  );
  const data = res.json();

  return data;
};

const seed = async () => {
  const books = await fetchBooks();

  for (const { title, author, coverimage } of books) {
    await createBook(title, author, coverimage);
  }

  const user = await createUser(
    'firstname',
    'lastname',
    'email@email.com',
    'password'
  );

  for (let i = 0; i < 5; i++) {
    const randomBook = await getRandomBook();
    const checkInDate = new Date();

    await createReservation(checkInDate, user.id, randomBook.id);
  }
};

await db.connect();
await seed();
await db.end();

console.log('🌱 Database seeded.');
