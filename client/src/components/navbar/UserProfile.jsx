// React Router
import { Link } from 'react-router-dom';

// React Imports
import { useAppContext } from '../../context/appContext';
import Avatar from '../Avatar';

function UserProfile() {
  const { user, avatar, activePage } = useAppContext();

  return (
    <Link to='/settings' className='route'>
      <section className='profile'>
        <div className='avatar'>
          <Avatar options={avatar} />
        </div>
        <div className='user'>
          <div>
            <h5>{user ? user.name : 'undefined'}</h5>
            <p>Free Account</p>
            <p>{activePage}</p>
          </div>
        </div>
      </section>
    </Link>
  );
}

export default UserProfile;
