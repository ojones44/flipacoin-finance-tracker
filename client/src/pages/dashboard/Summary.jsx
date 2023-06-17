// React Imports
import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';

function Summary() {
  const { setActivePage } = useAppContext();

  useEffect(() => {
    setActivePage('Summary');
  }, []);
  return <h1>Summary Page</h1>;
}
export default Summary;
