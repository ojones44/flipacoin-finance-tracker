// React Router
import { Link } from 'react-router-dom';

// React imports
import { useAppContext } from '../context/appContext';

function Dashboard() {
  const { removeUserFromLocalStorage } = useAppContext();

  return (
    <section>
      <h1>Flipacoin Dashboard Page</h1>
      <Link
        to='/landing'
        className='btn btn-danger'
        onClick={removeUserFromLocalStorage}
      >
        Logout
      </Link>
    </section>
  );
}
export default Dashboard;
