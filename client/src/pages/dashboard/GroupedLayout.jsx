// React Router
import { Outlet } from 'react-router-dom';

// Component Imports
import SidebarNavigation from '../../components/navbar/SidebarNavigation';
import UserProfile from '../../components/navbar/UserProfile';
import Logout from '../../components/navbar/Logout';
import HamburgerMenu from '../../components/navbar/HamburgerMenu';

// Style component imports
import Wrapper from '../../assets/wrappers/GroupedLayout';

function GroupedLayout() {
  return (
    <Wrapper>
      <aside className='dashboard-container navbar'>
        <UserProfile />
        <SidebarNavigation navClass='desktop-nav' />
        <Logout />
        <HamburgerMenu />
      </aside>
      <section className='dashboard-container'>
        <Outlet />
      </section>
    </Wrapper>
  );
}
export default GroupedLayout;
