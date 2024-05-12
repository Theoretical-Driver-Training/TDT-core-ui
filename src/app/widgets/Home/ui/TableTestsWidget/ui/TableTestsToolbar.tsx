import React, { useState } from 'react';
import {
  Grid,
  IconButton,
  List,
  ListItem,
  Radio,
  styled,
  TextField,
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Chip } from '../../../../../shared/Chip';
import { Tooltip } from '../../../../../shared/Tooltip/ui/Tooltip';

const SearchField = styled(TextField)(() => ({
  '& input': {
    padding: 10,
    fontSize: 14,
    height: 20,
  },
}));

export const TableTestsToolbar = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <Grid paddingTop={2}>
      <Grid container alignItems="center">
        <SearchField placeholder="Поиск" />
        <Tooltip
          open={filtersOpen}
          onClose={() => setFiltersOpen(false)}
          tooltipChildren={
            <List disablePadding>
              <ListItem style={{ fontSize: '12px', padding: '0px 8px' }}>
                <Radio checked /> Все
              </ListItem>
              <ListItem style={{ fontSize: '12px', padding: '0px 8px' }}>
                <Radio /> Активные
              </ListItem>
              <ListItem style={{ fontSize: '12px', padding: '0px 8px' }}>
                <Radio /> Популярные
              </ListItem>
            </List>
          }
        >
          <IconButton
            style={{ marginLeft: '8px', color: '#3b46b0' }}
            onClick={() => setFiltersOpen(true)}
          >
            <FilterAltIcon />
          </IconButton>
        </Tooltip>
        <Chip>Фильтр: Все</Chip>
      </Grid>
    </Grid>
  );
};
