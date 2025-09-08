import db from '#db/client';

export const createBook = async (title, author, coverImage) => {
  const sql = `
    INSERT INTO
      books (title, author, cover_image)
    VALUES
      ($1, $2, $3)
    RETURNING
      *
  `;
  const { rows } = await db.query(sql, [title, author, coverImage]);

  return rows[0];
};

export const getRandomBook = async () => {
  const sql = `
    SELECT
      *
    FROM
      books
    ORDER BY
      RANDOM()
    LIMIT
      1
  `;
  const { rows } = await db.query(sql);

  return rows[0];
};
