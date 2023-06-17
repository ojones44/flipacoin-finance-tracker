// React Imports
import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';

function AddMonth() {
  const { setActivePage } = useAppContext();

  useEffect(() => {
    setActivePage('Add Month');
  }, []);

  return <h1>Add Month Page</h1>;
}
export default AddMonth;
