// React imports
import { useState } from 'react';
import { VscMenu } from 'react-icons/vsc';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
      <VscMenu />
    </div>
  );
}

export default HamburgerMenu;
