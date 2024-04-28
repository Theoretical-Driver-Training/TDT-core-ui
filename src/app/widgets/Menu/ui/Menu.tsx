import React from 'react';
import { List } from '@mui/material';
import { MenuItem } from './MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { APP_ROUTES, BASE_ROUTE, ROUTE_NAMES } from '../../../shared/Router';

interface Props {
  drawerOpen: boolean;
}

export const Menu = ({ drawerOpen }: Props) => {
  return (
    <List dense={false}>
      <MenuItem
        to={BASE_ROUTE}
        label={ROUTE_NAMES[BASE_ROUTE]}
        icon={<HomeIcon />}
        drawerOpen={drawerOpen}
      />
      <MenuItem
        to={APP_ROUTES.PROFILE}
        label={ROUTE_NAMES[APP_ROUTES.PROFILE]}
        icon={<AccountCircleIcon />}
        drawerOpen={drawerOpen}
      />
    </List>
  );
};
