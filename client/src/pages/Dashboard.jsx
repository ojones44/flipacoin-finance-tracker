// React Router
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <section>
      <h1>Flipacoin Dashboard</h1>
      <Link to='/landing' className='btn btn-danger'>
        Logout
      </Link>
    </section>
  );
}
export default Dashboard;
