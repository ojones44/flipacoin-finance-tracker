// React Router
import { Link } from 'react-router-dom';

// React Imports
import { useAppContext } from '../../context/appContext';
import CurrentPage from './CurrentPage';

function UserProfile() {
  const { user } = useAppContext();

  return (
    <Link to='/settings' className='route'>
      <section className='profile'>
        <div className='avatar'>
          <img
            src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light'
            alt='avatar'
          />
        </div>
        <div className='user'>
          <div>
            <h5>{user ? user.name : 'undefined'}</h5>
            <p>Free Account</p>
            <CurrentPage />
          </div>
        </div>
      </section>
    </Link>
  );
}

export default UserProfile;
