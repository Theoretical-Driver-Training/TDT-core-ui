import { Breadcrumbs, Link, styled, Typography } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
import * as React from 'react';
import { ROUTES } from '../../Router';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';

const StyledRouteLink = styled(RouteLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
}));

export const BreadCrumbsToolbar = () => {
  const breadcrumbs = useReactRouterBreadcrumbs();

  const visibleBreadcrumbs = breadcrumbs.filter((crumb) => crumb.breadcrumb);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography fontWeight={600} variant="body1">
        Навигация
      </Typography>
      {visibleBreadcrumbs.map((crumb, index) => {
        const routeName =
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (crumb.breadcrumb as any).props.children.toUpperCase();

        const route = ROUTES[routeName];

        if (!route || !route?.label) {
          return null;
        }

        const isLastRoute = visibleBreadcrumbs.length - 1 === index;

        if (isLastRoute) {
          return <Typography>{ROUTES[routeName]?.label}</Typography>;
        }

        return (
          <Link key={crumb.key} style={{ textDecoration: 'none' }}>
            <StyledRouteLink to={ROUTES[routeName]?.path}>
              {ROUTES[routeName]?.label}
            </StyledRouteLink>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
