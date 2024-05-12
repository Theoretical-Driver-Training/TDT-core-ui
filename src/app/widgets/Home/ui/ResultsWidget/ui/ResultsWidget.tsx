import React from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { WidgetWrapper } from '../../../../../shared/WidgetWrapper';
import { WidgetHeader } from '../../../../../shared/WidgetWrapper/ui/WidgetHeader';
import { Grid, List } from '@mui/material';
import { ResultItem } from './ResultItem';
import { Circle } from '@mui/icons-material';
import { ButtonShowAll } from '../../../../../shared/ButtonShowAll';

interface Props {
  setIsOpenHistory: (
    value: ((prevState: boolean) => boolean) | boolean
  ) => void;
}

export const ResultsWidget = ({ setIsOpenHistory }: Props) => {
  return (
    <WidgetWrapper container item direction="column" height="100%">
      <WidgetHeader icon={<DoneAllIcon />} label="Мои результаты" />
      <Grid container direction="column" flexGrow={1}>
        <List
          style={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}
        >
          <ResultItem
            label="EQ-тестирование"
            IconComponent={Circle}
            color="#7467ef"
            count={40}
          />
          <ResultItem
            label="Тест Айзека"
            IconComponent={Circle}
            color="#ff9e43"
            count={80}
          />
        </List>
        <ButtonShowAll onClick={() => setIsOpenHistory(true)} />
      </Grid>
    </WidgetWrapper>
  );
};
