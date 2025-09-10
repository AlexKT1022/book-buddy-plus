import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <>
      <div className='nav-bar'>
        <NavLink to='/'>📚 Books</NavLink>
        <div className='nav-items'>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
