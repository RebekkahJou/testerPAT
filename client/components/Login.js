import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../store';

const Login = (props) => {
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  //  useEffect(() => {});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate(username, password, 'login'));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} name='login'>
        <div>
          <label htmlFor='username'>
            <small>Username</small>
          </label>
          <input name='username' type='text' />
        </div>
        <div>
          <label htmlFor='password'>
            <small>Password</small>
          </label>
          <input name='password' type='password' />
        </div>
        <div>
          <button type='submit' value='submit'>
            Log In
          </button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

export default Login;
