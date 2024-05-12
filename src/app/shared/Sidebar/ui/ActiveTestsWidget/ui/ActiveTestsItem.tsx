import { Grid, ListItem, Typography } from '@mui/material';
import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';

interface Props {
  label: string;
  date?: string;
  IconComponent: SvgIconComponent;
  iconColor?: string;
  endAdornment?: React.ReactNode;
}

export const ActiveTestsItem = ({
  label,
  date,
  IconComponent,
  iconColor,
  endAdornment,
}: Props) => {
  return (
    <ListItem disablePadding>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        paddingTop={2}
      >
        <Grid container item gap={2} xs={8} wrap="nowrap" alignItems="center">
          <IconComponent
            style={{ width: '40px', height: '40px', color: iconColor }}
          />
          <Grid>
            <Typography whiteSpace="nowrap">{label}</Typography>
            <Typography whiteSpace="nowrap" color="#aaa" variant="subtitle2">
              {date}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>{endAdornment}</Grid>
      </Grid>
    </ListItem>
  );
};
