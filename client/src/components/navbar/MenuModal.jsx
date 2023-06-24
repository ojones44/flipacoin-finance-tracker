// React imports
import { GrClose } from 'react-icons/gr';
import { useAppContext } from '../../context/appContext';

// Component Imports
import SidebarNavigation from './SidebarNavigation';
import Logout from './Logout';

function MenuModal() {
  const { modalMenuOpen, setModalOpen } = useAppContext();

  return (
    <aside
      className={
        modalMenuOpen ? 'menu-modal modal-open' : 'menu-modal modal-closed'
      }
    >
      <div className='modal-body'>
        <button
          type='button'
          className='icon-btn'
          onClick={() => setModalOpen(false)}
        >
          <GrClose />
        </button>
        <SidebarNavigation navClass='mobile' setIsOpen={setModalOpen} />
        <Logout logoutType='mobile' />
      </div>
    </aside>
  );
}
export default MenuModal;
