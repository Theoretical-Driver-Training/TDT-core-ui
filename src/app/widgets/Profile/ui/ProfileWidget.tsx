import { WidgetWrapper } from '../../../shared/WidgetWrapper';
import { ProfileForm } from './ProfileForm';
import { ProfileWidgetHeader } from './ProfileWidgetHeader';

export const ProfileWidget = () => {
  return (
    <WidgetWrapper item>
      <ProfileWidgetHeader />
      <ProfileForm />
    </WidgetWrapper>
  );
};
