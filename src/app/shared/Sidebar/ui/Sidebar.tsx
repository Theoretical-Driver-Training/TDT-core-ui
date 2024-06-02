import * as React from 'react';
import { WidgetWrapper } from '../../WidgetWrapper';
import { Grid, styled } from '@mui/material';
import { ActiveTestsWidget } from './ActiveTestsWidget';

const SidebarBlock = styled(Grid)(() => ({
  maxHeight: 600,
  overflowY: 'auto',
}));

export const Sidebar = () => {
  return (
    <WidgetWrapper
      container
      item
      md={1}
      lg={4}
      height="fit-content"
      position="sticky"
      top={16}
      bottom={16}
      gap={3}
    >
      <SidebarBlock container item>
        <ActiveTestsWidget />
      </SidebarBlock>
    </WidgetWrapper>
  );
};
