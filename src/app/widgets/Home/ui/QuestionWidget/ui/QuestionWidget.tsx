import React, { useState } from 'react';
import { Button, Grid, IconButton, styled, Typography } from '@mui/material';
import { WidgetHeader } from '../../../../../shared/WidgetWrapper/ui/WidgetHeader';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Modal } from '../../../../../shared/Modal';
import { Chip } from '../../../../../shared/Chip';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CheckIcon from '@mui/icons-material/Check';

const AnswerButton = styled(Button)(() => ({
  textTransform: 'none',

  '& .MuiButton-endIcon': {
    position: 'absolute',
    right: 16,
  },
}));

const NextButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: '32px',
  color: theme.palette.primary.main,
}));

interface Props {
  open: boolean;
  setIsOpenQuestion: (
    value: ((prevState: boolean) => boolean) | boolean
  ) => void;
}

export const QuestionWidget = ({ open, setIsOpenQuestion }: Props) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Modal open={open} setIsOpen={setIsOpenQuestion} withCloseIcon={false}>
      <WidgetHeader
        justifyContent="space-between"
        icon={<PsychologyIcon />}
        label="EQ-тестирование"
      >
        <IconButton onClick={() => setIsOpenQuestion(false)}>
          <CloseIcon />
        </IconButton>
      </WidgetHeader>
      <Grid container justifyContent="center" paddingTop={2}>
        <Typography align="center">
          "Я часто хандрю и пребываю в мрачном настроении без видимой причины"
        </Typography>
      </Grid>
      <Grid container justifyContent="center" paddingTop={4} gap={2}>
        <AnswerButton
          variant={selected === 1 ? 'contained' : 'outlined'}
          fullWidth
          endIcon={selected === 1 && <CheckIcon />}
          onClick={() => setSelected(1)}
        >
          Верно
        </AnswerButton>
        <AnswerButton
          variant={selected === 2 ? 'contained' : 'outlined'}
          fullWidth
          endIcon={selected === 2 && <CheckIcon />}
          onClick={() => setSelected(2)}
        >
          Скорее верно
        </AnswerButton>
        <AnswerButton
          variant={selected === 3 ? 'contained' : 'outlined'}
          fullWidth
          endIcon={selected === 3 && <CheckIcon />}
          onClick={() => setSelected(3)}
        >
          {' '}
          Скорее неверно
        </AnswerButton>
        <AnswerButton
          variant={selected === 4 ? 'contained' : 'outlined'}
          fullWidth
          endIcon={selected === 4 && <CheckIcon />}
          onClick={() => setSelected(4)}
        >
          Неверно
        </AnswerButton>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        paddingTop={4}
      >
        <Chip>Вопрос: 1/42</Chip>
        <NextButton
          variant="outlined"
          endIcon={<KeyboardDoubleArrowRightIcon />}
        >
          Следующий вопрос
        </NextButton>
      </Grid>
    </Modal>
  );
};
