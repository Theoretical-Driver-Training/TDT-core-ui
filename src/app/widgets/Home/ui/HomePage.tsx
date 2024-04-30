import { Grid } from '@mui/material';
import { WelcomeWidget } from './WelcomeWidget';
import { ResultsWidget } from './ResultsWidget';

export const HomePage = () => {
  return (
    <Grid container xs={12} gap={3}>
      <Grid xs={12}>
        <WelcomeWidget />
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={6}>
        <ResultsWidget />
      </Grid>
    </Grid>
  );
};
