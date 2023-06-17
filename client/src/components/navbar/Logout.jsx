// React Imports
import { FiLogOut } from 'react-icons/fi';

// React Imports
import { useAppContext } from '../../context/appContext';

function Logout() {
  const { removeUserFromLocalStorage, resetState } = useAppContext();

  function logout() {
    removeUserFromLocalStorage();
    resetState();
  }

  return (
    <section className='logout'>
      <div>
        <FiLogOut />
        <button type='button' onClick={logout}>
          Logout
        </button>
      </div>
    </section>
  );
}

export default Logout;
