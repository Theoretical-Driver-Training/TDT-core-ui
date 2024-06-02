import React from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Grid, List } from '@mui/material';
import { TasksItem } from './TasksItem';
import { Circle } from '@mui/icons-material';
import { WidgetWrapper } from '../../../shared/WidgetWrapper';
import { WidgetHeader } from '../../../shared/WidgetWrapper/ui/WidgetHeader';
import { ButtonShowAll } from '../../../shared/ButtonShowAll';

interface Props {
  setIsOpenHistory: (
    value: ((prevState: boolean) => boolean) | boolean
  ) => void;
}

export const TasksWidget = ({ setIsOpenHistory }: Props) => {
  return (
    <WidgetWrapper container item direction="column" height="100%">
      <WidgetHeader icon={<DoneAllIcon />} label="Задачи на сегодня" />
      <Grid container direction="column" flexGrow={1}>
        <List
          style={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}
        >
          <TasksItem
            label='Таблицы "Шульте"'
            IconComponent={Circle}
            color="#ff9e43"
            checked={true}
          />
          <TasksItem
            label='Тест "Светофор"'
            IconComponent={Circle}
            color="#7467ef"
          />
          <TasksItem
            label='Тест "Американских военных пилотов (с изменениями)"'
            IconComponent={Circle}
            color="#7467ef"
          />
          <TasksItem
            label='Опросник "САН"'
            IconComponent={Circle}
            color="#7467ef"
          />
          <TasksItem
            label='Опросник "Готовность водителя"'
            IconComponent={Circle}
            color="#7467ef"
          />
        </List>
        <ButtonShowAll onClick={() => setIsOpenHistory(true)} />
      </Grid>
    </WidgetWrapper>
  );
};
