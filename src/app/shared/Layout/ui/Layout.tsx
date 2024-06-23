import * as React from 'react';
import { Grid, GridProps, styled } from '@mui/material';
import { Sidebar } from '../../Sidebar';
import { AppToolbar } from '../../AppToolbar';
import { BreadCrumbsToolbar } from './BreadCrumbs';

const BreadCrumbsWrapper = styled(Grid)<GridProps>(({ theme }) => ({
  padding: theme.spacing(3, 2),
}));

const GridLayout = styled(Grid)<GridProps>(({ theme }) => ({
  padding: theme.spacing(0, 2, 2),
}));

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppToolbar />
      <BreadCrumbsWrapper container>
        <BreadCrumbsToolbar />
      </BreadCrumbsWrapper>
      <GridLayout container gap={3} wrap="nowrap">
        <Grid container item lg={8} md={11} xs={11}>
          {children}
        </Grid>
        <Sidebar />
      </GridLayout>
    </>
  );
};
