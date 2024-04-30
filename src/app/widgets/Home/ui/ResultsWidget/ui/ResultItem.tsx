import React from 'react';
import { Grid, ListItem, Typography } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface Props {
  label: string;
  IconComponent: SvgIconComponent;
  color?: string;
  count: number;
}

export const ResultItem = ({ label, IconComponent, color, count }: Props) => {
  return (
    <ListItem disablePadding>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        paddingTop={2}
      >
        <Grid container item gap={2} xs={8} wrap="nowrap" alignItems="center">
          <IconComponent style={{ width: '12px', height: '12px', color }} />
          <Typography whiteSpace="nowrap">{label}</Typography>
        </Grid>
        <Grid item>
          <Typography>{count} баллов</Typography>
        </Grid>
      </Grid>
    </ListItem>
  );
};
