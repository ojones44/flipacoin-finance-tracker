// React Router
import { NavLink } from 'react-router-dom';

import links from '../../utils/links';

function SidebarNavigation({ navClass }) {
  return (
    <section className={navClass}>
      {links.map((link) => (
        <NavLink
          to={link.path}
          key={link.id}
          // onClick={setActiveNav}
          // className={activeNav ? `${navClass} active` : `${navClass}`}
          className='route'
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
