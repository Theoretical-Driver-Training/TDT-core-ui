import React from 'react';
import { WidgetWrapper } from '../../../../../shared/WidgetWrapper';
import { WidgetHeader } from '../../../../../shared/WidgetWrapper/ui/WidgetHeader';
import { Grid, IconButton, styled, Typography } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PsychologyIcon from '@mui/icons-material/Psychology';

const ActiveWidgetWrapper = styled(WidgetWrapper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: '#fff',
}));

export const EtherActiveTestWidget = () => {
  return (
    <ActiveWidgetWrapper>
      <WidgetHeader label="Продолжим прохождение?" />

      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        paddingTop={2}
      >
        <Grid container item gap={2} xs={8} wrap="nowrap" alignItems="center">
          <PsychologyIcon
            style={{ width: '40px', height: '40px', color: '#fff' }}
          />
          <Grid>
            <Typography whiteSpace="nowrap">EQ-тестирование</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton style={{ color: '#fff' }}>
            <PlayCircleOutlineIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ActiveWidgetWrapper>
  );
};
