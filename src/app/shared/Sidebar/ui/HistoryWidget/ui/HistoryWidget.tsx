import { Grid, IconButton, List } from '@mui/material';
import { WidgetHeader } from '../../../../WidgetWrapper/ui/WidgetHeader';
import { HistoryItem } from './HistoryItem';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export const HistoryWidget = () => {
  return (
    <Grid container xs={12}>
      <WidgetHeader label="Активные" />
      <Grid xs={12}>
        <List>
          <HistoryItem
            label="EQ-тестирование"
            date="20 апреля"
            IconComponent={PsychologyIcon}
            endAdornment={
              <IconButton style={{ color: '#ed6c02' }}>
                <PlayCircleOutlineIcon />
              </IconButton>
            }
          />
        </List>
      </Grid>
    </Grid>
  );
};
