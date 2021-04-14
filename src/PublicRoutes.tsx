import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import Login from './modules/auth/pages/Login';
import Register from './modules/auth/pages/Register';
import ResetPassword from './modules/auth/pages/ResetPassword';
import ForgotPassword from './modules/auth/pages/ForgotPassword';
import forgotPasswordConfirmation from './modules/auth/pages/ForgotPasswordConfirmation';
import withSessionPrivate from './withSessionPrivate';
import withSessionPublic from './withSessionPublic';
import RegisterConfirmation from './modules/auth/pages/RegisterConfirmation';

const PublicRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={ withSessionPublic(Login) } />
      <Route path="/register/:id" component={ RegisterConfirmation } />
      <Route path="/register" component={ withSessionPublic(Register) } />
      <Route path="/forgotpassword/:id" component={ forgotPasswordConfirmation } />
      <Route path="/forgotpassword" component={ withSessionPublic(ForgotPassword) } />
      <Route path="/resetpassword" component={ ResetPassword } />
      <Route path="/" component={ withSessionPrivate(Main) } />
    </Switch>
  );
};

export default PublicRoutes;