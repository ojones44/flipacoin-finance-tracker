// React Imports
import { Link } from 'react-router-dom';

// Style component imports
import Wrapper from '../assets/wrappers/NotFound';

//  Asset Imports
import notFound from '../assets/images/not-found-alt.svg';

function NotFound() {
  return (
    <Wrapper>
      <div className='container'>
        <img src={notFound} alt='not-found' className='main-img' />
        <h3>Uh oh! This page cannot be found 🙈</h3>
        <Link to='/landing'>
          <button type='button' className='btn'>
            Why don&apos;t we go home?
          </button>
        </Link>
      </div>
    </Wrapper>
  );
}
export default NotFound;
