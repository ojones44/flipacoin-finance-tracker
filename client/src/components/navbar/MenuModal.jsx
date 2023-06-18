// React imports
import { GrClose } from 'react-icons/gr';

// Component Imports
import SidebarNavigation from './SidebarNavigation';

function MenuModal({ isOpen, setIsOpen }) {
  return (
    <aside
      className={isOpen ? 'menu-modal modal-open' : 'menu-modal modal-closed'}
    >
      <div className='modal-body'>
        <button
          type='button'
          className='menu-btn'
          onClick={() => setIsOpen(false)}
        >
          <GrClose />
        </button>
        <SidebarNavigation navClass='mobile' setIsOpen={setIsOpen} />
      </div>
    </aside>
  );
}
export default MenuModal;
