import db from '#db/client';

export const createReservation = async (checkInDate, userId, bookId) => {
  const sql = `
    INSERT INTO
      reservations (check_in, user_id, book_id)
    VALUES
      ($1, $2, $3)
    RETURNING
      *
  `;
  const { rows } = await db.query(sql, [checkInDate, userId, bookId]);

  return rows[0];
};
