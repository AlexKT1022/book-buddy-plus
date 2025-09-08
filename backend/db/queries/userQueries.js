import db from '#db/client';

export const createUser = async (firstName, lastName, email, password) => {
  const sql = `
    INSERT INTO
      users (first_name, last_name, email, password)
    VALUES
      ($1, $2, $3, $4)
    RETURNING
      *
  `;
  const { rows } = await db.query(sql, [firstName, lastName, email, password]);

  return rows[0];
};
