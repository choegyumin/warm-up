import { MyProfileProps } from './types';
import useMyProfile from './useMyProfile';

const MyProfile: React.FC<MyProfileProps> = () => {
  const { profile, onLoginClick, onLogoutClick } = useMyProfile();

  return (
    <>
      {profile != null ? (
        <button type="button" onClick={onLogoutClick}>
          Log out
        </button>
      ) : (
        <button type="button" onClick={onLoginClick}>
          Log in
        </button>
      )}
      {profile != null && <p>{profile.name}</p>}
    </>
  );
};
MyProfile.displayName = 'MyProfile';

export default MyProfile;
