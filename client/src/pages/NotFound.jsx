// React Imports
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

// Style component imports
import Wrapper from '../assets/wrappers/NotFound';

//  Asset Imports
import notFound from '../assets/images/not-found.svg';

function NotFound() {
  const { user, token } = useAppContext();
  const navigate = useNavigate();

  function redirect() {
    navigate('/');
  }

  return (
    <Wrapper>
      <div className='container'>
        <img src={notFound} alt='not-found' className='main-img' />
        <h3>Merlins Beard! The classic 404 🙈</h3>
        <p>Unfortunately this page does not exist</p>
        <button type='button' className='btn' onClick={redirect}>
          {user && token ? 'Back To The Dashboard' : 'Back Home'}
        </button>
      </div>
    </Wrapper>
  );
}
export default NotFound;
