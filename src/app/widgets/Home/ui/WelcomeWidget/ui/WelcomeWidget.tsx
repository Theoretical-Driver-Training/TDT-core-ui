import { GridProps, styled, Typography } from '@mui/material';
import { WidgetWrapper } from '../../../../../shared/WidgetWrapper';

const WelcomeWidgetWrapper = styled(WidgetWrapper)<GridProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
}));

export const WelcomeWidget = () => {
  return (
    <WelcomeWidgetWrapper>
      <Typography variant="h6">Добро пожаловать, Артем!</Typography>
      <Typography variant="body2" paddingTop={2}>
        Рады видеть Вас на платформе тестирования водителей
        Theoretical-Driver-Training!
      </Typography>
    </WelcomeWidgetWrapper>
  );
};
