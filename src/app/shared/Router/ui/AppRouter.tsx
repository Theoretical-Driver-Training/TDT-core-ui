import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { LayoutRoute } from '../../LayoutRoute';
import React from 'react';
import { ROUTES } from '../lib';
import { HomePage } from '../../../entities/Home';
import { LoginPage } from '../../../entities/Login';
import { RegisterPage } from '../../../entities/Register';
import { ProfilePage } from '../../../entities/Profile';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <LayoutRoute path={ROUTES.HOME.path} exact>
            <HomePage />
          </LayoutRoute>
          <Route path={ROUTES.LOGIN.path} component={LoginPage} />
          <Route path={ROUTES.REGISTER.path} component={RegisterPage} />
          <LayoutRoute path={ROUTES.PROFILE.path}>
            <ProfilePage />
          </LayoutRoute>
          <LayoutRoute path="/test/:testId">test</LayoutRoute>
        </Switch>
      </div>
    </Router>
  );
};
