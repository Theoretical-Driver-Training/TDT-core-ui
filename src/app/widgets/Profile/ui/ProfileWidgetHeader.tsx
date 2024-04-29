import { Grid, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const ProfileWidgetHeader = () => {
  return (
    <Grid container alignItems="center" gap={2}>
      <AccountCircleIcon />
      <Typography variant="h6">Мой профиль</Typography>
    </Grid>
  );
};
