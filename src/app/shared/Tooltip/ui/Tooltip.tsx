import { Grid, Tooltip as MaterialTooltip, TooltipProps } from '@mui/material';

import React from 'react';

interface Props {
  open: boolean;
  onClose: VoidFunction;
  placement?: TooltipProps['placement'];
  tooltipChildren: React.ReactNode;
  children: JSX.Element;
}

export const Tooltip: React.FC<React.PropsWithChildren<Props>> = ({
  open,
  onClose,
  placement,
  tooltipChildren,
  children,
}) => {
  return (
    <MaterialTooltip
      open={open}
      components={{
        Tooltip: 'div',
      }}
      disableHoverListener
      onClose={onClose}
      placement={placement ?? 'right'}
      title={
        <Grid
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            borderRadius: '8px',
            backgroundColor: '#fff',
            padding: '16px',
          }}
        >
          {tooltipChildren}
        </Grid>
      }
    >
      {children}
    </MaterialTooltip>
  );
};
