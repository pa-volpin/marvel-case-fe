import React from 'react';
import { Redirect } from 'react-router-dom';

const withSession = Component => props => {
  const tokenLocalStorage = localStorage.getItem('tokenMarvel');
  const token = tokenLocalStorage;

  if (!token) return <Component {...props} />
  return <Redirect to="/" />
};

export default withSession;
