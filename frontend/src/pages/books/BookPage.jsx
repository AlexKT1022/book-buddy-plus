import { useLoaderData } from 'react-router';

const BookPage = () => {
  const bookData = useLoaderData() || {};

  return (
    <>
      <h1>{bookData.title}</h1>
      <p>{bookData.author}</p>
      <p>{bookData.description}</p>
    </>
  );
};

export default BookPage;
