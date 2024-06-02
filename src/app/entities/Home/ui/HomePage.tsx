import { Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { WelcomeWidget } from '../../../widgets/WelcomeWidget';
import { TasksWidget } from '../../../widgets/TasksWidget';
import { StatisticWidget } from '../../../widgets/StatisticWidget';
import { EtherActiveTestWidget } from '../../../widgets/EtherActiveTestWidget';
import { EtherTaskWidget } from '../../../widgets/EtherTaskWidget';
import { BaseTestsWidget } from '../../../widgets/BaseTestsWidget';
import { QuestionWidget } from '../../../widgets/QuestionWidget';
import { HistoryWidget } from '../../../widgets/HistoryWidget';

export const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isOpenQuestion, setIsOpenQuestion] = useState(false);
  const [isOpenHistory, setIsOpenHistory] = useState(false);

  return (
    <Grid container xs={12} gap={3}>
      <Grid xs={12}>
        <WelcomeWidget />
      </Grid>
      <Grid container xs={12} gap={3} wrap={isMobile ? 'wrap' : 'nowrap'}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <TasksWidget setIsOpenHistory={setIsOpenHistory} />
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
          <EtherTaskWidget />
        </Grid>
      </Grid>
      <Grid xs={12}>
        <BaseTestsWidget setIsOpenQuestion={setIsOpenQuestion} />
      </Grid>
      <QuestionWidget
        open={isOpenQuestion}
        setIsOpenQuestion={setIsOpenQuestion}
      />
      <HistoryWidget open={isOpenHistory} setIsOpenHistory={setIsOpenHistory} />
    </Grid>
  );
};
