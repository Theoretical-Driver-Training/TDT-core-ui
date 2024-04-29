import { Grid, GridProps, styled } from '@mui/material';
import React from 'react';

const GridSidebar = styled(Grid)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(3),
  background: theme.palette.background.paper,
  boxShadow:
    'rgba(0, 0, 0, 0.06) 0px 3px 3px -2px, rgba(0, 0, 0, 0.04) 0px 3px 4px 0px, rgba(0, 0, 0, 0.04) 0px 1px 8px 0px !important',
}));

export const WidgetWrapper: React.FC<React.PropsWithChildren<GridProps>> = ({
  children,
  ...gridProps
}) => {
  return <GridSidebar {...gridProps}>{children}</GridSidebar>;
};
