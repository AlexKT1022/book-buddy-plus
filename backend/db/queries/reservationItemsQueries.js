import db from '#db/client';

export const createReservationItem = async (reservationId, bookId) => {
  const sql = `
    INSERT INTO
      reservation_items (reservation_id, book_id)
    VALUES
      ($1, $2)
    RETURNING
      *
  `;
  const { rows } = await db.query(sql, [reservationId, bookId]);

  return rows[0];
};
