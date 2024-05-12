import { Grid, IconButton, List } from '@mui/material';
import { WidgetHeader } from '../../../../WidgetWrapper/ui/WidgetHeader';
import { ActiveTestsItem } from '../../ActiveTestsWidget/ui/ActiveTestsItem';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { ButtonShowAll } from '../../../../ButtonShowAll';

export const PopularWidget = () => {
  return (
    <Grid container xs={12}>
      <WidgetHeader label="Популярные" />
      <Grid xs={12}>
        <List>
          <ActiveTestsItem
            label="Тест Айзенка"
            date="Добавлен 25 апреля"
            IconComponent={PsychologyAltIcon}
            endAdornment={
              <IconButton style={{ color: '#ed6c02' }}>
                <PlayCircleOutlineIcon />
              </IconButton>
            }
          />
        </List>
      </Grid>
      <ButtonShowAll onClick={() => null} />
    </Grid>
  );
};
