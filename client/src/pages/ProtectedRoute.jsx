// React imports
import { Navigate } from 'react-router-dom';

// State import
import { useAppContext } from '../context/appContext';

function ProtectedRoute({ children }) {
  const { user, token } = useAppContext();

  if (!user && !token) {
    return <Navigate to='/landing' />;
  }

  return children;
}

export default ProtectedRoute;
