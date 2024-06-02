import React from 'react';
import { Grid, ListItem, Typography } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

interface Props {
  label: string;
  IconComponent: SvgIconComponent;
  color?: string;
  checked?: boolean;
}

export const TasksItem = ({
  label,
  IconComponent,
  color,
  checked = false,
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
          <IconComponent style={{ width: '12px', height: '12px', color }} />
          <Typography>{label}</Typography>
        </Grid>
        <Grid item>
          {checked ? (
            <LibraryAddCheckIcon style={{ color: '#ed6c02' }} />
          ) : (
            <CheckBoxOutlineBlankIcon style={{ color: '#3b46b0' }} />
          )}
        </Grid>
      </Grid>
    </ListItem>
  );
};
