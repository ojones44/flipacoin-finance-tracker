// React Imports
import { FiLogOut } from 'react-icons/fi';

// React Imports
import { useAppContext } from '../../context/appContext';

function Logout({ logoutType }) {
  const { logoutUser } = useAppContext();

  return (
    <section
      className={logoutType === 'mobile' ? `logout` : 'logout logout-nav'}
    >
      <div>
        <FiLogOut />
        <button type='button' className='logout-btn' onClick={logoutUser}>
          Logout
        </button>
      </div>
    </section>
  );
}

export default Logout;
