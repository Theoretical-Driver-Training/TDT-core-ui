import {
  Grid,
  IconButton,
  styled,
  Toolbar,
  ToolbarProps,
  Typography,
} from '@mui/material';
import { Logo } from '../../Logo';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useHistory } from 'react-router-dom';

const ToolbarGrid = styled(Toolbar)<ToolbarProps>(() => ({
  borderBottom: '1px solid #eee',
}));

const ToolbarLogoLink = styled(Link)(() => ({
  textDecoration: 'none',
  color: '#000',
}));

const LogoutButtonIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.dark,
}));

export const AppToolbar = () => {
  const history = useHistory();

  const handleGoToProfile = () => {
    history.push('/profile');
  };

  const handleLogout = () => {
    history.push('/login');
  };

  return (
    <ToolbarGrid style={{ padding: '0px 16px' }}>
      <Grid container justifyContent="space-between" wrap="nowrap">
        <Grid container item alignItems="center" gap={2} xs={10}>
          <ToolbarLogoLink to="/">
            <Logo />
          </ToolbarLogoLink>
          <Typography variant="h6">Theoretical-Driver-Training</Typography>
        </Grid>
        <Grid
          container
          item
          alignItems="center"
          justifyContent="flex-end"
          gap={2}
          xs={2}
        >
          <IconButton onClick={handleGoToProfile}>
            <AccountCircleIcon />
          </IconButton>
          <LogoutButtonIcon onClick={handleLogout}>
            <LogoutIcon />{' '}
          </LogoutButtonIcon>
        </Grid>
      </Grid>
    </ToolbarGrid>
  );
};
