import React from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { WidgetWrapper } from '../../../../../shared/WidgetWrapper';
import { WidgetHeader } from '../../../../../shared/WidgetWrapper/ui/WidgetHeader';
import { Grid, List, Typography } from '@mui/material';
import { ResultItem } from './ResultItem';
import { Circle } from '@mui/icons-material';

export const ResultsWidget = () => {
  return (
    <WidgetWrapper item>
      <WidgetHeader icon={<DoneAllIcon />} label="Мои результаты" />
      <Grid>
        <List>
          <ResultItem
            label="EQ-тестирование"
            IconComponent={Circle}
            color="#7467ef"
            count={40}
          />
          <ResultItem
            label="Тест Айзека"
            IconComponent={Circle}
            color="#ff9e43"
            count={80}
          />
        </List>
        <Grid container justifyContent="center" paddingTop={2}>
          <Typography variant="body2">Посмотреть все</Typography>
        </Grid>
      </Grid>
    </WidgetWrapper>
  );
};
