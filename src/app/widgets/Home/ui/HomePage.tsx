import { Grid, useMediaQuery } from '@mui/material';
import { WelcomeWidget } from './WelcomeWidget';
import { ResultsWidget } from './ResultsWidget';
import { StatisticWidget } from './StatisticWidget';
import { useTheme } from '@mui/material/styles';
import { EtherActiveTestWidget } from './EtherActiveTestWidget';
import { EtherPopularTestWidget } from './EtherPopularTestWidget';
import { TableTestsWidget } from './TableTestsWidget';

export const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container xs={12} gap={3}>
      <Grid xs={12}>
        <WelcomeWidget />
      </Grid>
      <Grid container xs={12} gap={3} wrap={isMobile ? 'wrap' : 'nowrap'}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <ResultsWidget />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <StatisticWidget />
        </Grid>
      </Grid>
      <Grid container xs={12} gap={3} wrap={isMobile ? 'wrap' : 'nowrap'}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <EtherActiveTestWidget />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <EtherPopularTestWidget />
        </Grid>
      </Grid>
      <Grid xs={12}>
        <TableTestsWidget />
      </Grid>
    </Grid>
  );
};
