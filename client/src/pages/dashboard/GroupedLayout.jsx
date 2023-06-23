// React Router
import { Outlet } from 'react-router-dom';

// React Imports
import { useAppContext } from '../../context/appContext';

// Component Imports
import SidebarNavigation from '../../components/navbar/SidebarNavigation';
import UserProfile from '../../components/navbar/UserProfile';
import Logout from '../../components/navbar/Logout';
import HamburgerMenu from '../../components/navbar/HamburgerMenu';
import MenuModal from '../../components/navbar/MenuModal';

// Style component imports
import Wrapper from '../../assets/wrappers/GroupedLayout';

function GroupedLayout() {
  const { modalMenuOpen } = useAppContext();
  return (
    <Wrapper>
      <aside
        className={
          modalMenuOpen
            ? 'dashboard-container navbar blur'
            : 'dashboard-container navbar'
        }
      >
        <UserProfile />
        <SidebarNavigation navClass='desktop' />
        <Logout />
        <HamburgerMenu />
      </aside>
      <MenuModal />
      <section
        className={
          modalMenuOpen ? 'dashboard-container blur' : 'dashboard-container'
        }
      >
        <Outlet />
      </section>
    </Wrapper>
  );
}
export default GroupedLayout;
