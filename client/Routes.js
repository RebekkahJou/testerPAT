import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './components/Home';
import { me } from './store';

const Routes = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => !!state.auth.id);

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Switch>
          <Route path='/home' component={Home} />
          <Redirect to='/home' />
        </Switch>
      ) : (
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Switch>
      )}
    </div>
  );
};

/**
 * CONTAINER
 */

export default withRouter(Routes);
