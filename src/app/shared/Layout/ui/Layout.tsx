import * as React from 'react';
import { Grid, GridProps, styled } from '@mui/material';
import { Sidebar } from '../../Sidebar';

const GridLayout = styled(Grid)<GridProps>(({ theme }) => ({
  padding: theme.spacing(2, 2),
}));

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <GridLayout container gap={3} wrap="nowrap">
      <Grid item lg={8} md={11}>
        {children}
      </Grid>
      <Sidebar />
    </GridLayout>
  );
};
