import { Link, useNavigate } from 'react-router';

import { useAuth } from '../../context/AuthContext';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = async (FormData) => {
    const firstname = FormData.get('firstname');
    const lastname = FormData.get('lastname');
    const email = FormData.get('email');
    const password = FormData.get('password');
    const credentials = {
      firstname,
      lastname,
      email,
      password,
    };

    await register(credentials);

    // navigate('/books');
  };

  return (
    <div className='register-container'>
      <h1>Register for an account</h1>
      <form action={handleRegister}>
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
      <Link to='/login'>Already have an account? Log in here</Link>
    </div>
  );
};

export default RegisterPage;
