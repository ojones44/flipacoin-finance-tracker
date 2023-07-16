// React Imports
import { FaPencilAlt, FaSave } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/appContext';

// Component Imports
import { Alert, InputForm, IconButton, AvatarCreator } from '../../components';
import Wrapper from '../../assets/wrappers/Settings';

function Settings() {
  const {
    setActivePage,
    user,
    updateUser,
    updatePassword,
    showAlert,
    displayAlert,
    isLoading,
  } = useAppContext();

  const [name, setName] = useState(user?.name || 'Unknown User');
  const [email, setEmail] = useState(user?.email || 'Unknown Email');
  const [isEditing, setIsEditing] = useState(false);

  const [oldPassword, setOldPassword] = useState('********');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    setActivePage('Edit Profile');
  }, []);

  function resetPasswordFields() {
    setOldPassword('********');
    setNewPassword('');
    setConfirmPassword('');
  }

  function resetUserFields() {
    setName(user?.name);
    setEmail(user?.email);
  }

  function cancelUserChange() {
    setIsEditing(false);
    resetUserFields();
  }

  function changePassword() {
    setChangingPassword(true);
    setOldPassword('');
  }

  function cancelPasswordChange() {
    setChangingPassword(false);
    resetPasswordFields();
  }

  function updateUserInfo(e) {
    e.preventDefault();
    const newUserInfo = { name, email };
    setIsEditing(false);
    updateUser(newUserInfo);
    setName(name);
    setEmail(email);
  }

  function resetPassword(e) {
    e.preventDefault();
    if (!oldPassword || !newPassword || !confirmPassword) {
      displayAlert('Please fill in all passwords fields', 3000);
      return;
    }
    if (newPassword.length < 8 || confirmPassword.length < 8) {
      displayAlert('Password must be more than 8 characters', 3000);
      return;
    }
    if (newPassword !== confirmPassword) {
      displayAlert('New passwords do not match', 3000);
      return;
    }

    const newPasswordInfo = { oldPassword, newPassword, confirmPassword };
    updatePassword(newPasswordInfo);
    setChangingPassword(false);
    resetPasswordFields();
  }

  return (
    <Wrapper>
      <header>
        <h4>Edit Profile</h4>
      </header>
      {showAlert && (
        <div className='settings-alert'>
          <Alert />
        </div>
      )}
      <div className='settings-page-grid'>
        <div className='section'>
          <div>
            <form action='submit' className='user-info'>
              <div className='user-inputs'>
                <InputForm
                  type='text'
                  name='name'
                  value={name}
                  labelText='Username'
                  onChange={(e) => setName(e.target.value)}
                  editing={isEditing}
                />

                <InputForm
                  type='email'
                  name='email'
                  value={email}
                  labelText='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  editing={isEditing}
                />
              </div>

              <div>
                {isEditing && (
                  <IconButton
                    btnType='submit'
                    classes='icon-btn-sm'
                    onClick={updateUserInfo}
                    icon={<FaSave />}
                    isLoading={isLoading}
                  />
                )}
                <IconButton
                  btnType='button'
                  classes='icon-btn-sm'
                  onClick={() => setIsEditing(true)}
                  icon={<FaPencilAlt />}
                  isLoading={isLoading}
                />

                {isEditing && (
                  <IconButton
                    btnType='button'
                    classes='icon-btn-sm'
                    onClick={cancelUserChange}
                    icon={<ImCross />}
                    isLoading={isLoading}
                  />
                )}
              </div>
            </form>
          </div>

          <div className='user-password'>
            <div className='old-password'>
              <form action='submit'>
                <InputForm
                  type='password'
                  name='password'
                  value={oldPassword}
                  labelText={changingPassword ? 'Old Password' : 'Password'}
                  onChange={(e) => setOldPassword(e.target.value)}
                  editing={changingPassword}
                />
              </form>

              <IconButton
                btnType='button'
                classes='icon-btn-sm'
                onClick={changePassword}
                icon={<FaPencilAlt />}
                isLoading={isLoading}
              />
            </div>

            <div className='change-password'>
              {changingPassword && (
                <>
                  <InputForm
                    type='password'
                    name='password'
                    value={newPassword}
                    labelText='New Password'
                    onChange={(e) => setNewPassword(e.target.value)}
                    editing={changingPassword}
                  />

                  <InputForm
                    type='password'
                    name='password'
                    value={confirmPassword}
                    labelText='Confirm Password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    editing={changingPassword}
                  />

                  <IconButton
                    btnType='button'
                    classes='icon-btn-sm'
                    onClick={resetPassword}
                    icon={<FaSave />}
                    isLoading={isLoading}
                  />

                  <IconButton
                    btnType='button'
                    classes='icon-btn-sm'
                    onClick={cancelPasswordChange}
                    icon={<ImCross />}
                    isLoading={isLoading}
                  />
                </>
              )}
            </div>
          </div>
        </div>
        <AvatarCreator />
      </div>
    </Wrapper>
  );
}
export default Settings;
