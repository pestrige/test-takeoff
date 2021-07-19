import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../elements/private-route/private-route';
import Login from '../pages/login/login';
import Contacts from '../pages/contacts/contacts';
import { AppRoute } from '../../const';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.CONTACTS}
          render={() => <Contacts />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
