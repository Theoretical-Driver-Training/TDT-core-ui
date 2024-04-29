import { styled, Typography } from '@mui/material';
import { WidgetWrapper } from '../../../shared/WidgetWrapper';

const WelcomeWidgetWrapper = styled(WidgetWrapper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
}));

export const WelcomeWidget = () => {
  return (
    <WelcomeWidgetWrapper>
      <Typography variant="h6">Добро пожаловать, Артем!</Typography>
    </WelcomeWidgetWrapper>
  );
};
