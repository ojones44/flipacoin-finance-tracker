// React imports
import { useState } from 'react';
import { VscMenu } from 'react-icons/vsc';

// Component Imports
import MenuModal from './MenuModal';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        className='menu-btn'
        onClick={() => setIsOpen(true)}
      >
        <VscMenu />
      </button>
      <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default HamburgerMenu;
