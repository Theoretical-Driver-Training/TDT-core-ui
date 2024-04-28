import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { LayoutRoute } from '../../LayoutRoute';
import { LoginPage } from '../../../widgets/Login';
import { RegisterPage } from '../../../widgets/Register';
import { ProfilePage } from '../../../widgets/Profile';
import React from 'react';

export const APP_ROUTES = {
  HOME: '/',
  PROFILE: '/profile',
};

export const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  ...APP_ROUTES,
} as const;

export const ROUTE_NAMES = {
  [ROUTES.HOME]: 'Главная',
  [ROUTES.PROFILE]: 'Профиль',
} as const;

export const BASE_ROUTE = ROUTES.HOME;

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <LayoutRoute path={ROUTES.HOME} exact>
            home
          </LayoutRoute>
          <Route path={ROUTES.LOGIN} component={LoginPage} />
          <Route path={ROUTES.REGISTER} component={RegisterPage} />
          <LayoutRoute path={ROUTES.PROFILE}>
            <ProfilePage />
          </LayoutRoute>
        </Switch>
      </div>
    </Router>
  );
};
