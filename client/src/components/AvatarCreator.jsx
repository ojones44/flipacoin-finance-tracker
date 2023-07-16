// React Imports
import { useState, useEffect } from 'react';
import { useAppContext } from '../context/appContext';

// Component Imports
import Avatar from './Avatar';

// Data Imports
import avatarOptions from '../utils/avatarOptions';

function AvatarCreator() {
  const { avatar, updateAvatar } = useAppContext();

  const [isLoading, setIsLoading] = useState(true);
  const [newAvatar, setNewAvatar] = useState({});

  function randomizeAvatar() {
    const randomAvatarItems = [];
    avatarOptions.forEach((item) =>
      randomAvatarItems.push(
        item.options[Math.floor(Math.random() * item.options.length)]
      )
    );

    setNewAvatar({
      top: randomAvatarItems[0],
      accessories: randomAvatarItems[1],
      hairColor: randomAvatarItems[2],
      facialHair: randomAvatarItems[3],
      facialHairColor: randomAvatarItems[4],
      clothes: randomAvatarItems[5],
      fabricColor: randomAvatarItems[6],
      eyes: randomAvatarItems[7],
      eyebrows: randomAvatarItems[8],
      mouth: randomAvatarItems[9],
      skin: randomAvatarItems[10],
    });
  }

  useEffect(() => {
    setNewAvatar(avatar);
    setIsLoading(false);
  }, [avatar]);

  function customizeAvatar(e) {
    setNewAvatar((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  function changeAvatar() {
    updateAvatar({ newAvatar });
  }

  return (
    <div className='avatar-section'>
      <h4>Customise Avatar</h4>
      {!isLoading && (
        <>
          <aside className='section avatar-options'>
            {avatarOptions.map((item) => (
              <div key={item.id}>
                <label>{item.optionType}:</label>
                <select
                  key={item.id}
                  name={item.value}
                  id={item.value}
                  value={newAvatar[item.value]}
                  onChange={(e) => customizeAvatar(e)}
                >
                  {item.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <button
              type='button'
              className='btn btn-danger'
              onClick={changeAvatar}
            >
              Save Changes
            </button>
            <button
              type='button'
              className='btn btn-funky'
              onClick={randomizeAvatar}
            >
              Randomize!
            </button>
          </aside>
          <section className='section avatar'>
            <Avatar options={newAvatar} />
          </section>
        </>
      )}
    </div>
  );
}
export default AvatarCreator;
