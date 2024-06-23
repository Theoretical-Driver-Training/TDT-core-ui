import { WidgetHeader } from '../../../shared/WidgetWrapper/ui/WidgetHeader';
import { Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { Modal } from '../../../shared/Modal';
import DoneAllIcon from '@mui/icons-material/DoneAll';

interface Props {
  open: boolean;
  setIsOpenAnswer: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

export const ResultWidget = ({ open, setIsOpenAnswer }: Props) => {
  return (
    <Modal
      open={open}
      setIsOpen={setIsOpenAnswer}
      withCloseIcon={false}
      width={490}
    >
      <WidgetHeader
        justifyContent="space-between"
        icon={<DoneAllIcon />}
        label="Результат тестирования"
      >
        <IconButton onClick={() => setIsOpenAnswer(false)}>
          <CloseIcon />
        </IconButton>
      </WidgetHeader>
      <Grid paddingTop={4}>
        <Grid container>
          <Typography color="#999" variant="body1">
            Тестирование:
          </Typography>
          <Typography variant="body1" paddingLeft={1}>
            Таблицы "Шульте"
          </Typography>
        </Grid>
      </Grid>
      <Grid paddingTop={2}>
        <Grid container>
          <Typography color="#999" variant="body1">
            Длительность прохождения:
          </Typography>
          <Typography variant="body1" paddingLeft={1}>
            5 минут 24 секунды
          </Typography>
        </Grid>
      </Grid>
      <Grid paddingTop={2}>
        <Grid container>
          <Typography color="#999" variant="body1">
            Дата прохождения:
          </Typography>
          <Typography variant="body1" paddingLeft={1}>
            26.04.2024
          </Typography>
        </Grid>
      </Grid>
      <Grid paddingTop={2}>
        <Grid container>
          <Typography color="#999" variant="body1">
            Количество ошибок:
          </Typography>
          <Typography variant="body1" paddingLeft={1}>
            3 ошибки
          </Typography>
        </Grid>
      </Grid>
    </Modal>
  );
};
