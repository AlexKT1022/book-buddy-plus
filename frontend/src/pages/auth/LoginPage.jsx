import { Link, useNavigate } from 'react-router';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (FormData) => {
    const email = FormData.get('email');
    const password = FormData.get('password');
    const credentials = {
      email,
      password,
    };

    console.log(credentials);

    // await login(credentials);

    navigate('/books');
  };

  return (
    <>
      <h1>Log in to your account</h1>
      <form action={handleLogin}>
        <label>
          Email
          <input type='text' name='email' />
        </label>
        <label>
          Password
          <input type='password' name='password' />
        </label>
        <button type='submit'>Login</button>
      </form>
      <Link to='/register'>Need an account? Register here.</Link>
    </>
  );
};

export default LoginPage;
