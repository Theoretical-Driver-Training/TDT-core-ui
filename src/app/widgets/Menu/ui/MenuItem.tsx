import { Link } from 'react-router-dom';
import { Grid, GridProps, ListItem, ListItemText, styled } from '@mui/material';
import React from 'react';

const MenuItemWrapper = styled(Grid)<GridProps>(({ theme }) => ({
  height: 40,
  borderRadius: 8,
  padding: 8,

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

const MenuItemLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.dark,
}));

const MenuItemIconWrapper = styled(Grid)<GridProps>(() => ({
  paddingRight: 16,
}));

interface Props {
  to: string;
  label: string;
  icon?: React.ReactNode;
  drawerOpen: boolean;
}

export const MenuItem = ({ to, label, icon, drawerOpen }: Props) => {
  return (
    <MenuItemLink to={to}>
      <ListItem>
        <MenuItemWrapper container alignItems="center" wrap="nowrap">
          {icon && (
            <MenuItemIconWrapper container alignItems="center" width="auto">
              {icon}
            </MenuItemIconWrapper>
          )}
          {drawerOpen && <ListItemText primary={label} />}
        </MenuItemWrapper>
      </ListItem>
    </MenuItemLink>
  );
};
