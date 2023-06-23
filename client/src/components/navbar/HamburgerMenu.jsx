// React imports
import { VscMenu } from 'react-icons/vsc';
import { useAppContext } from '../../context/appContext';

function HamburgerMenu() {
  const { setModalOpen } = useAppContext();

  return (
    <button
      type='button'
      className='menu-btn'
      onClick={() => setModalOpen(true)}
    >
      <VscMenu />
    </button>
  );
}

export default HamburgerMenu;
