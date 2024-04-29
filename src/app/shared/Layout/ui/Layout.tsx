import * as React from 'react';
import {
  Grid,
  GridProps,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Sidebar } from '../../Sidebar';
import { AppToolbar } from '../../AppToolbar';

const GridLayout = styled(Grid)<GridProps>(({ theme }) => ({
  padding: theme.spacing(2, 2),
}));

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <AppToolbar />
      <GridLayout container gap={3} wrap="nowrap">
        <Grid item lg={8} md={11} xs={11}>
          {children}
        </Grid>
        {isMobile ? null : <Sidebar />}
      </GridLayout>
    </>
  );
};
