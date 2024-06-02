import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IosShareIcon from '@mui/icons-material/IosShare';
import { AnswerItem } from './AnswerItem';
import { Modal } from '../../../shared/Modal';
import { WidgetHeader } from '../../../shared/WidgetWrapper/ui/WidgetHeader';

interface Props {
  open: boolean;
  setIsOpenResult: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

export const ResultModal = ({ open, setIsOpenResult }: Props) => {
  return (
    <Modal
      open={open}
      setIsOpen={setIsOpenResult}
      withCloseIcon={false}
      width={800}
    >
      <WidgetHeader
        justifyContent="space-between"
        icon={<DoneAllIcon />}
        label="Результат прохождения"
      >
        <Grid>
          <IconButton style={{ marginRight: '8px' }}>
            <IosShareIcon />
          </IconButton>
          <IconButton onClick={() => setIsOpenResult(false)}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </WidgetHeader>
      <Grid paddingTop={4}>
        <Grid container>
          <Typography color="#999" variant="body1">
            Тестирование:
          </Typography>
          <Typography variant="body1" paddingLeft={1}>
            EQ-тестирование
          </Typography>
        </Grid>
      </Grid>
      <Grid paddingTop={2}>
        <Grid container>
          <Typography color="#999" variant="body1">
            Кол-во вопросов:
          </Typography>
          <Typography variant="body1" paddingLeft={1}>
            42
          </Typography>
        </Grid>
      </Grid>
      <Grid paddingTop={2}>
        <Grid container>
          <Typography color="#999" variant="body1">
            Длительность прохождения:
          </Typography>
          <Typography variant="body1" paddingLeft={1}>
            55 минут
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
            Количество набранных баллов:
          </Typography>
          <Typography variant="body1" paddingLeft={1}>
            125 баллов
          </Typography>
        </Grid>
      </Grid>
      <Grid paddingTop={2}>
        <Grid container>
          <Typography color="#999" variant="body1">
            Результат:
          </Typography>
          <Typography>
            У вас высокий уровень эмоционального интеллекта. Это преимущество
            позволяет вам приспосабливаться к любой ситуации. Вы по-настоящему
            понимаете себя на телесном и интуитивном уровне, а это нечто гораздо
            большее, чем «знание себя», основанное на самонаблюдении и
            рефлексии. Ваше «Я» — ваш партнер. Вы хорошо владеете собой и
            большую часть времени находитесь в ровном и позитивном расположении
            духа. Ваши отношения с другими людьми содержательны, вы используете
            свои эмоции и интуицию для того, чтобы понять их и окружающий вас
            мир.
          </Typography>
        </Grid>
      </Grid>
      <Grid paddingTop={4}>
        <Grid container>
          <Accordion
            style={{
              boxShadow: 'none',
              borderRadius: '12px',
              backgroundColor: '#3b46b0',
              color: '#fff',
              width: '100%',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Посмотреть ответы
            </AccordionSummary>
            <AccordionDetails>
              <Grid container gap={2}>
                <AnswerItem
                  question="Вопрос 1"
                  questionText="Я часто хандрю и пребываю в мрачном настроении без видимой причины"
                  answerChipText="№1 Верно"
                />
                <AnswerItem
                  question="Вопрос 2"
                  questionText=""
                  answerChipText="№2 Cкорее верно"
                />
                <AnswerItem
                  question="Вопрос 3"
                  questionText=""
                  answerChipText="№3 Неверно"
                />
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Modal>
  );
};
