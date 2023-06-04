// React Router
import { Outlet, Link } from 'react-router-dom';

// React imports
import { useAppContext } from '../../context/appContext';

function GroupedLayout() {
  const { removeUserFromLocalStorage, resetState } = useAppContext();

  function logout() {
    removeUserFromLocalStorage();
    resetState();
  }

  return (
    <section>
      <h1>Flipacoin Dashboard Page</h1>
      <button type='button' className='btn btn-danger' onClick={logout}>
        Logout
      </button>

      <Link to='/'>Goals</Link>
      <Link to='/settings'>Settings</Link>
      <Link to='/summary'>Summary</Link>
      <Outlet />
    </section>
  );
}
export default GroupedLayout;
