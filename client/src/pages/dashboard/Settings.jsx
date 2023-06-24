// React Imports
import { FaPencilAlt, FaSave } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/appContext';

// Component Imports
import Alert from '../../components/Alert';

function Settings() {
  const { setActivePage, user, updateUser, updatePassword, showAlert } =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
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
    const newPasswordInfo = { oldPassword, newPassword, confirmPassword };
    updatePassword(newPasswordInfo);
    setChangingPassword(false);
    resetPasswordFields();
  }

  return (
    <main>
      <header>
        <h2>Edit Profile</h2>
      </header>
      <div>{showAlert && <Alert />}</div>
      <div>
        <form action='submit' className=''>
          <label htmlFor='name'>Username: </label>
          <input
            name='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditing}
          />
          <label htmlFor='email'>Email: </label>
          <input
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEditing}
          />
          {isEditing && (
            <button type='submit' className='icon-btn' onClick={updateUserInfo}>
              <FaSave />
            </button>
          )}
        </form>
        <button
          type='button'
          className='icon-btn'
          onClick={() => setIsEditing(true)}
        >
          <FaPencilAlt />
        </button>
        <button type='button' className='icon-btn' onClick={cancelUserChange}>
          <ImCross />
        </button>
      </div>
      <div>
        <form action='submit'>
          <label htmlFor='password'>Password: </label>
          <input
            name='password'
            type='password'
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            disabled={!changingPassword}
          />

          {changingPassword && (
            <>
              <label htmlFor='password'>New Password: </label>
              <input
                name='password'
                type='password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label htmlFor='password'>Confirm Password: </label>
              <input
                name='password'
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type='submit'
                className='icon-btn'
                onClick={resetPassword}
              >
                <FaSave />
              </button>
            </>
          )}
        </form>
        <button
          type='button'
          className='icon-btn'
          onClick={() => setChangingPassword(true)}
        >
          <FaPencilAlt />
        </button>
        <button
          type='button'
          className='icon-btn'
          onClick={cancelPasswordChange}
        >
          <ImCross />
        </button>
      </div>
    </main>
  );
}
export default Settings;
