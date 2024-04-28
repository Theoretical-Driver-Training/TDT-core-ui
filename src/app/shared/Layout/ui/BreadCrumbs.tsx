import { useLocation } from 'react-router-dom';
import { Breadcrumbs, Link, styled } from '@mui/material';
import * as React from 'react';
import { BASE_ROUTE, ROUTE_NAMES } from '../../Router';

const Item = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textDecoration: 'none',
}));

export const BreadCrumbsToolbar = () => {
  const location = useLocation();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Item>{ROUTE_NAMES[BASE_ROUTE]}</Item>
      {location.pathname && location.pathname !== BASE_ROUTE && (
        <Item>
          {ROUTE_NAMES[location.pathname as keyof typeof ROUTE_NAMES]}
        </Item>
      )}
    </Breadcrumbs>
  );
};
