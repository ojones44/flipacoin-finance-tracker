// React Imports
import { useState, useEffect } from 'react';

// Component Imports
import Avatar from './Avatar';

// Data Imports
import avatarOptions from '../utils/avatarOptions';

function AvatarCreator() {
  // TODO: Implement selecters to customize avatar, then update the users avatar is the backend user Schema.

  const [isLoading, setIsLoading] = useState(true);
  const randomAvatarItems = [];

  const [randomAvatar, setRandomAvatar] = useState({});

  useEffect(() => {
    if (randomAvatarItems.length === 0) {
      avatarOptions.forEach((item) =>
        randomAvatarItems.push(
          item.options[Math.floor(Math.random() * item.options.length)]
        )
      );
      setTimeout(() => {
        setRandomAvatar({
          top: randomAvatarItems[0],
          accessory: randomAvatarItems[1],
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
        setIsLoading(false);
      }, 250);
    }
  }, []);

  function updateAvatar(e) {
    console.log(e.target);
    // setRandomAvatar((prevValues) => ({
    //   ...prevValues,
    //   [e.target.name]: e.traget.value,
    // }));
  }

  return (
    <div className='avatar-section'>
      <h4>Customise Avatar</h4>
      <aside className='section avatar-options'>
        {avatarOptions.map((item, index) => (
          <div key={item.id}>
            <label>{item.optionType}:</label>
            <select
              key={item.id}
              name={item.value}
              id={item.value}
              placeholder={item.optionType}
              value={randomAvatarItems[index]}
              onChange={updateAvatar}
            >
              <option value='' disabled>
                Select {item.optionType}
              </option>
              {item.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button type='button' className='btn'>
          Save Changes
        </button>
      </aside>
      <section className='section avatar'>
        {!isLoading && (
          <Avatar
            top={randomAvatar.top}
            accessory={randomAvatar.accessory}
            hairColor={randomAvatar.hairColor}
            facialHair={randomAvatar.facialHair}
            facialHairColor={randomAvatar.facialHairColor}
            clothes={randomAvatar.clothes}
            fabricColor={randomAvatar.fabricColor}
            eyes={randomAvatar.eyes}
            eyebrows={randomAvatar.eyebrows}
            mouth={randomAvatar.mouth}
            skin={randomAvatar.skin}
          />
        )}
      </section>
    </div>
  );
}
export default AvatarCreator;
