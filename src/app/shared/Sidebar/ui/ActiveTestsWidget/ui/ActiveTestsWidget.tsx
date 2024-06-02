import { Grid, IconButton, List } from '@mui/material';
import { WidgetHeader } from '../../../../WidgetWrapper/ui/WidgetHeader';
import { ActiveTestsItem } from './ActiveTestsItem';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react';

export const ActiveTestsWidget = () => {
  return (
    <Grid container gap={2}>
      <Grid container xs={12}>
        <WidgetHeader label="Предыдущий тест" />
        <Grid xs={12}>
          <List>
            <ActiveTestsItem
              label="Таблицы Шульте"
              IconComponent={PsychologyIcon}
              endAdornment={
                <IconButton style={{ color: '#ed6c02' }}>
                  <CheckCircleOutlineIcon />
                </IconButton>
              }
            />
          </List>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <WidgetHeader label="Следующий тест" />
        <Grid xs={12}>
          <List>
            <ActiveTestsItem
              label="Тест Светофор"
              IconComponent={PsychologyIcon}
              endAdornment={
                <IconButton style={{ color: '#3b46b0' }}>
                  <PlayCircleOutlineIcon />
                </IconButton>
              }
            />
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};
