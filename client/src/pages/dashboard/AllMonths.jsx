// React Imports
import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';

function AllMonths() {
  const { setActivePage } = useAppContext();

  useEffect(() => {
    setActivePage('Months Overview');
  }, []);

  return <h1>All Months Page</h1>;
}
export default AllMonths;
