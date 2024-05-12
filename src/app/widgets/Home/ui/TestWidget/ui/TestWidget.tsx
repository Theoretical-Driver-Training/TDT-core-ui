import React from 'react';
import { Button, Grid, IconButton, styled, Typography } from '@mui/material';
import { WidgetHeader } from '../../../../../shared/WidgetWrapper/ui/WidgetHeader';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { PRIMARY_GRADIENT } from '../../../../../app';
import { Modal } from '../../../../../shared/Modal';
import CloseIcon from '@mui/icons-material/Close';

const StartButton = styled(Button)(() => ({
  background: PRIMARY_GRADIENT,
  color: '#fff',
}));

interface Props {
  open: boolean;
  setIsOpenTest: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

export const TestWidget = ({ open, setIsOpenTest }: Props) => {
  return (
    <Modal open={open} setIsOpen={setIsOpenTest} withCloseIcon={false}>
      <WidgetHeader
        justifyContent="space-between"
        icon={<PsychologyIcon />}
        label="EQ-тестирование"
      >
        <IconButton onClick={() => setIsOpenTest(false)}>
          <CloseIcon />
        </IconButton>
      </WidgetHeader>
      <Grid paddingTop={2}>
        <Typography color="#aaa">Описание</Typography>
        <Grid paddingTop={1}>
          <Typography>
            Эмоциональный показательный коэффициент (EQ) показывает, как вы
            используете эмоции в своей жизни, и учитывает разные стороны
            эмоционального интеллекта: отношение к себе и к другим и способности
            к общению; отношение к жизни и поиски гармонии.
          </Typography>
        </Grid>
      </Grid>
      <Grid paddingTop={2}>
        <Typography color="#aaa">Подробная информация</Typography>
        <Grid paddingTop={1}>
          <Typography>Количество вопросов: 42</Typography>
        </Grid>
        <Grid paddingTop={1}>
          <Typography>Длительность: 60 минут</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" paddingTop={4}>
        <StartButton>Начать тестирование</StartButton>
      </Grid>
    </Modal>
  );
};
