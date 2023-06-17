// Style component imports
import { useEffect } from 'react';
import Wrapper from '../../assets/wrappers/Goals';

// React Imports
import { useAppContext } from '../../context/appContext';

function Goals() {
  const { setActivePage } = useAppContext();

  useEffect(() => {
    setActivePage('Dashboard');
  }, []);

  return (
    <Wrapper>
      <h1>Goals Page</h1>
    </Wrapper>
  );
}
export default Goals;
