import React from 'react';
import { Grid, styled, Typography } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { WidgetWrapper } from '../../../shared/WidgetWrapper';
import { WidgetHeader } from '../../../shared/WidgetWrapper/ui/WidgetHeader';

const ActiveWidgetWrapper = styled(WidgetWrapper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: '#fff',
}));

export const EtherActiveTestWidget = () => {
  return (
    <ActiveWidgetWrapper>
      <WidgetHeader label="Уровень функциональной готовности" />

      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        paddingTop={2}
      >
        <Grid container item gap={2} xs={8} wrap="nowrap" alignItems="center">
          <WhatshotIcon
            style={{ width: '40px', height: '40px', color: '#fff' }}
          />
          <Grid>
            <Typography whiteSpace="nowrap" variant="h6">
              Очень высокий
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ActiveWidgetWrapper>
  );
};
