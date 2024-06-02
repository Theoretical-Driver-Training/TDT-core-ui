import React from 'react';
import { WidgetWrapper } from '../../../../../shared/WidgetWrapper';
import { WidgetHeader } from '../../../../../shared/WidgetWrapper/ui/WidgetHeader';
import { Grid, styled, Typography } from '@mui/material';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

const PopularWidgetWrapper = styled(WidgetWrapper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
}));

export const EtherTaskWidget = () => {
  return (
    <PopularWidgetWrapper>
      <WidgetHeader label="Тестов пройдено за сегодня" />

      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        paddingTop={2}
      >
        <Grid container item gap={2} xs={8} wrap="nowrap" alignItems="center">
          <LibraryAddCheckIcon
            style={{ width: '40px', height: '40px', color: '#fff' }}
          />
          <Grid>
            <Typography whiteSpace="nowrap" variant="h6">
              1/5
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </PopularWidgetWrapper>
  );
};
