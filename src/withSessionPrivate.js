import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './modules/auth/pages/Login';
import CheckMe from './modules/auth/pages/CheckMe';

const withSession = Component => props => {
  const name = useSelector(state => state.auth.data.name);
  const tokenState = useSelector(state => state.auth.data.token);
  const tokenLocalStorage = localStorage.getItem('tokenMarvel');
  const token = tokenLocalStorage;

  console.log('TOKEN', token, 'NAME', name)

  if (token && name) {
    console.log('Componente')
    return <Component {...props} />
  }
  
  if (token) {
    console.log('Check')
    return <CheckMe />
  }

  console.log('Login')
  return (
    <>
      <Redirect to="/login" />
      <Login />
    </>
  )
};

export default withSession;
