import React from 'react';
import { Grid, Typography } from '@mui/material';

interface Props {
  icon?: React.ReactNode;
  label: string;
}

export const WidgetHeader = ({ icon, label }: Props) => {
  return (
    <Grid container alignItems="center" gap={2}>
      {icon}
      <Typography variant="h6">{label}</Typography>
    </Grid>
  );
};
