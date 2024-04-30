import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { LayoutRoute } from '../../LayoutRoute';
import { LoginPage } from '../../../widgets/Login';
import { RegisterPage } from '../../../widgets/Register';
import { ProfilePage } from '../../../widgets/Profile';
import React from 'react';
import { HomePage } from '../../../widgets/Home';
import { ROUTES } from '../lib';

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
          <LayoutRoute path="/tests" exact>
            testhome
          </LayoutRoute>
          <LayoutRoute path="/test/:testId">test</LayoutRoute>
        </Switch>
      </div>
    </Router>
  );
};
