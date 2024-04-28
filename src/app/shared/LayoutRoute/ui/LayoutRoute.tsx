import { Layout } from '../../../widgets/Layout';
import { Route, RouteProps } from 'react-router-dom';
import React from 'react';

type Props = Omit<RouteProps, 'children'> & React.PropsWithChildren;

export const LayoutRoute: React.FC<Props> = ({ children, ...routeProps }) => {
  return (
    <Route {...routeProps}>
      <Layout>{children}</Layout>
    </Route>
  );
};
