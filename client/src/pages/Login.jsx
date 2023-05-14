// React Router
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section>
      <h1>Login Page</h1>
      <p>Enter your login details</p>
      <Link to='/' className='btn btn-hero'>
        To The Dashboard!
      </Link>
    </section>
  );
}
export default Login;
