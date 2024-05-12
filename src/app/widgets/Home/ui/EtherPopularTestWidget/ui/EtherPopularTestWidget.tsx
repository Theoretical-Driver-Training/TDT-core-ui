import React from 'react';
import { WidgetWrapper } from '../../../../../shared/WidgetWrapper';
import { WidgetHeader } from '../../../../../shared/WidgetWrapper/ui/WidgetHeader';
import { Grid, IconButton, styled, Typography } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

const PopularWidgetWrapper = styled(WidgetWrapper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
}));

export const EtherPopularTestWidget = () => {
  return (
    <PopularWidgetWrapper>
      <WidgetHeader label="Популярно среди пользователей!" />

      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        paddingTop={2}
      >
        <Grid container item gap={2} xs={8} wrap="nowrap" alignItems="center">
          <PsychologyAltIcon
            style={{ width: '40px', height: '40px', color: '#fff' }}
          />
          <Grid>
            <Typography whiteSpace="nowrap">Тест Айзенка</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton style={{ color: '#fff' }}>
            <PlayCircleOutlineIcon />
          </IconButton>
        </Grid>
      </Grid>
    </PopularWidgetWrapper>
  );
};
