import * as React from 'react';
import { WidgetWrapper } from '../../WidgetWrapper';
import { Grid, styled, Typography } from '@mui/material';

const SidebarBlock = styled(Grid)(() => ({
  maxHeight: 600,
  overflowY: 'auto',
}));

export const Sidebar = () => {
  return (
    <WidgetWrapper
      item
      md={1}
      lg={4}
      height="fit-content"
      position="sticky"
      top={16}
      bottom={16}
    >
      <SidebarBlock container>
        <Typography style={{ width: '100%', wordBreak: 'break-word' }}>
          sidebar
        </Typography>
      </SidebarBlock>
    </WidgetWrapper>
  );
};
