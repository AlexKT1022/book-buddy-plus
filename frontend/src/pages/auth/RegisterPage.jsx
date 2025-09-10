import { Link, useNavigate } from 'react-router';

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const tryRegister = async (formdata) => {
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const email = formData.get('email');
    const password = formData.get('password');
    await register({ firstname, lastname, email, password });
    navigate('books');
  };

  return (
    <>
      <h1>Resgister for an account</h1>
      <form action='tryRegister'>
        <label>
          First Name
          <input type='text' name='firstname' required />
        </label>
        <label>
          Last Name
          <input type='text' name='lasttname' required />
        </label>
        <label>
          Email
          <input type='text' name='email' required />
        </label>
        <label>
          Password
          <input type='text' name='password' required />
        </label>
        <button type='submit'>Register</button>
      </form>
      <Link to='./login'>Already hace an account? Log in here</Link>
    </>
  );
};

export default RegisterPage;
