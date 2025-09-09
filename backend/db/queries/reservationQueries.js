import db from '#db/client';

export const createReservation = async (checkInDate, userId) => {
  const sql = `
    INSERT INTO
      reservations (check_in, user_id)
    VALUES
      ($1, $2)
    RETURNING
      *
  `;
  const { rows } = await db.query(sql, [checkInDate, userId]);

  return rows[0];
};
