// React Router
import { NavLink } from 'react-router-dom';

import links from '../../utils/links';

function SidebarNavigation({ navClass, setIsOpen }) {
  return (
    <section className={`nav ${navClass}`}>
      {links.map((link) => (
        <NavLink
          to={link.path}
          key={link.id}
          className='route'
          onClick={setIsOpen ? () => setIsOpen(false) : ''}
        >
          <div>
            {link.icon}
            <p>{link.page}</p>
          </div>
        </NavLink>
      ))}
    </section>
  );
}

export default SidebarNavigation;
