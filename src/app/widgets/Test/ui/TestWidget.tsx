import { WidgetWrapper } from '../../../shared/WidgetWrapper';
import { WidgetHeader } from '../../../shared/WidgetWrapper/ui/WidgetHeader';
import { Button, Grid, styled, Typography } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { PRIMARY_GRADIENT } from '../../../app';

const StartButton = styled(Button)(() => ({
  background: PRIMARY_GRADIENT,
  color: '#fff',
  width: 300,
}));

export const TestWidget = () => {
  return (
    <WidgetWrapper item xs={12}>
      <WidgetHeader icon={<PsychologyIcon />} label="EQ-тестирование" />
      <Grid paddingTop={2}>
        <Typography color="#aaa">Описание</Typography>
        <Typography paddingTop={2}>
          Эмоциональный показательный коэффициент (EQ) показывает, как вы
          используете эмоции в своей жизни, и учитывает разные стороны
          эмоционального интеллекта: отношение к себе и к другим и способности к
          общению; отношение к жизни и поиски гармонии.
        </Typography>
      </Grid>
      <Grid paddingTop={2}>
        <Typography color="#aaa">Подробная информация</Typography>
        <Typography paddingTop={2}>Длительность: 60 минут</Typography>
        <Typography paddingTop={1}>Количество вопросов: 42</Typography>
      </Grid>
      <Grid container justifyContent="center" paddingTop={2}>
        <StartButton>Начать тестирование</StartButton>
      </Grid>
    </WidgetWrapper>
  );
};
