// React Imports
import { FiLogOut } from 'react-icons/fi';

// React Imports
import { useAppContext } from '../../context/appContext';

function Logout() {
  const { logoutUser } = useAppContext();

  return (
    <section className='logout'>
      <div>
        <FiLogOut />
        <button type='button' onClick={logoutUser}>
          Logout
        </button>
      </div>
    </section>
  );
}

export default Logout;
