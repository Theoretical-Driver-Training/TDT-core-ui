import * as React from 'react';
import { WidgetWrapper } from '../../WidgetWrapper';
import { Grid, styled, useMediaQuery, useTheme } from '@mui/material';
import { ActiveTestsWidget } from '../../../widgets/ActiveTestsWidget';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const SidebarBlock = styled(Grid)(({ theme }) => ({
  maxHeight: 600,
  overflowY: 'auto',
  [theme.breakpoints.down('lg')]: {
    width: 24,
  },
}));

export const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <WidgetWrapper
      container
      item
      md={1}
      lg={4}
      width="max-content"
      height={'fit-content'}
      position="sticky"
      top={isMobile ? 0 : 16}
      bottom={isMobile ? 0 : 16}
      gap={isMobile ? 0 : 3}
      padding={isMobile ? 1 : 2}
    >
      <SidebarBlock container item>
        {isMobile ? <KeyboardArrowLeftIcon /> : <ActiveTestsWidget />}
      </SidebarBlock>
    </WidgetWrapper>
  );
};
