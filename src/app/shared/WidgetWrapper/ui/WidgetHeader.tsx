import React from 'react';
import { Box, Grid, GridProps, Typography } from '@mui/material';

interface Props extends GridProps {
  icon?: React.ReactNode;
  label: string;
}

export const WidgetHeader: React.FC<React.PropsWithChildren<Props>> = ({
  icon,
  label,
  children,
  ...gridProps
}) => {
  return (
    <Grid container alignItems="center" gap={2} {...gridProps}>
      <Box display="flex" alignItems="center">
        {icon}
        <Typography variant="h6" paddingLeft={2}>
          {label}
        </Typography>
      </Box>
      {children}
    </Grid>
  );
};
