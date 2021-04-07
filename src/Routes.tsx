import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Characters from './modules/characters/pages/Characters';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={ Characters } />
    </Switch>
  );
};

export default Routes;