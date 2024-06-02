import { Grid, useMediaQuery } from '@mui/material';
import { WelcomeWidget } from './WelcomeWidget';
import { TasksWidget } from './TasksWidget';
import { StatisticWidget } from './StatisticWidget';
import { useTheme } from '@mui/material/styles';
import { EtherActiveTestWidget } from './EtherActiveTestWidget';
import { EtherTaskWidget } from './EtherTaskWidget';
import { BaseTestsWidget } from './BaseTestsWidget';
import { TestWidget } from './TestWidget';
import { useState } from 'react';
import { QuestionWidget } from './QuestionWidget';
import { HistoryWidget } from './HistoryWidget';

export const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isOpenTest, setIsOpenTest] = useState(false);
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
        <BaseTestsWidget
          setIsOpenTest={setIsOpenTest}
          setIsOpenQuestion={setIsOpenQuestion}
        />
      </Grid>

      <TestWidget open={isOpenTest} setIsOpenTest={setIsOpenTest} />
      <QuestionWidget
        open={isOpenQuestion}
        setIsOpenQuestion={setIsOpenQuestion}
      />
      <HistoryWidget open={isOpenHistory} setIsOpenHistory={setIsOpenHistory} />
    </Grid>
  );
};
