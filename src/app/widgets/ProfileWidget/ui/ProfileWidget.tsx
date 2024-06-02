import { WidgetWrapper } from '../../../shared/WidgetWrapper';
import { ProfileForm } from './ProfileForm';
import { WidgetHeader } from '../../../shared/WidgetWrapper/ui/WidgetHeader';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const ProfileWidget = () => {
  return (
    <WidgetWrapper item>
      <WidgetHeader icon={<AccountCircleIcon />} label="Мой профиль" />
      <ProfileForm />
    </WidgetWrapper>
  );
};
