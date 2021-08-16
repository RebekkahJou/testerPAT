import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  const isLoggedIn = useSelector((state) => !!state.auth.id);

  console.log(handleClick);
  return (
    <div>
      <h1>Navbar header</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            <Link to='/home'>Home</Link>
            <a href='#' onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
