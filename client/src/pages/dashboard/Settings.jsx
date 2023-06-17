// React Imports
import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';

function Settings() {
  const { setActivePage } = useAppContext();

  useEffect(() => {
    setActivePage('Settings');
  }, []);
  return <h1>Settings Page</h1>;
}
export default Settings;
