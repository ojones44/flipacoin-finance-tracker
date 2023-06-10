// React Router
import { Outlet, Link } from 'react-router-dom';

// React imports
import { useAppContext } from '../../context/appContext';

// Style component imports
import Wrapper from '../../assets/wrappers/GroupedLayout';

function GroupedLayout() {
  const { removeUserFromLocalStorage, resetState, user } = useAppContext();

  function logout() {
    removeUserFromLocalStorage();
    resetState();
  }

  // TODO: Refactor dashboard code into a component and move SVG's to a a seperate file and import

  return (
    <Wrapper>
      <aside className='dashboard-container navbar'>
        <section className='profile'>
          <div className='avatar'>
            <img
              src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light'
              alt='avatar'
            />
          </div>
          <div className='user'>
            <h5>{user.name}</h5>
            <p>Free Account</p>
          </div>
        </section>
        <section className='pages'>
          <Link to='/' className='route'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M7 21h-4v-11h4v11zm7-11h-4v11h4v-11zm7 0h-4v11h4v-11zm2 12h-22v2h22v-2zm-23-13h24l-12-9-12 9z' />
              </svg>
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to='/all-months' className='route'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M0 8v-3c0-1.105.895-2 2-2h20c1.104 0 2 .895 2 2v3h-24zm24 3v8c0 1.104-.896 2-2 2h-20c-1.105 0-2-.896-2-2v-8h24zm-15 6h-6v1h6v-1zm3-2h-9v1h9v-1zm9 0h-3v1h3v-1z' />
              </svg>
              <p>Months Overview</p>
            </div>
          </Link>
          <Link to='/add-month' className='route'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M18.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-7.18 4h-12.82v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3v2.501c-.771-.322-1.614-.501-2.5-.501-3.584 0-6.5 2.916-6.5 6.5 0 1.747.696 3.331 1.82 4.5zm-.252-23.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z' />
              </svg>

              <p>Add New Month</p>
            </div>
          </Link>
          <Link to='/summary' className='route'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M18 10c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm.5 8.474v.526h-.5v-.499c-.518-.009-1.053-.132-1.5-.363l.228-.822c.478.186 1.114.383 1.612.27.574-.13.692-.721.057-1.005-.465-.217-1.889-.402-1.889-1.622 0-.681.52-1.292 1.492-1.425v-.534h.5v.509c.362.01.768.073 1.221.21l-.181.824c-.384-.135-.808-.257-1.222-.232-.744.043-.81.688-.29.958.856.402 1.972.7 1.972 1.773.001.858-.672 1.315-1.5 1.432zm-7.911-5.474h-2.589v-2h3.765c-.484.602-.881 1.274-1.176 2zm-.589 3h-2v-2h2.264c-.166.641-.264 1.309-.264 2zm2.727-6h-4.727v-2h7v.589c-.839.341-1.604.822-2.273 1.411zm2.273-6h-7v-2h7v2zm0 3h-7v-2h7v2zm-4.411 12h-2.589v-2h2.069c.088.698.264 1.369.52 2zm-10.589-11h7v2h-7v-2zm0 3h7v2h-7v-2zm12.727 11h-4.727v-2h3.082c.438.753.994 1.428 1.645 2zm-12.727-5h7v2h-7v-2zm0 3h7v2h-7v-2zm0-6h7v2h-7v-2z' />
              </svg>
              <p>Summary</p>
            </div>
          </Link>
          <Link to='/settings' className='route'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M24 13.616v-3.232c-1.651-.587-2.693-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.749-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.743-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 3.384c-2.762 0-5-2.239-5-5s2.238-5 5-5 5 2.239 5 5-2.238 5-5 5zm3-5c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3z' />
              </svg>
              <p>Settings</p>
            </div>
          </Link>
        </section>
        <section className='logout'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M8 9v-4l8 7-8 7v-4h-8v-6h8zm2-7v2h12v16h-12v2h14v-20h-14z' />
            </svg>
            <button type='button' onClick={logout}>
              Logout
            </button>
          </div>
        </section>
      </aside>
      <section className='dashboard-container'>
        <Outlet />
      </section>
    </Wrapper>
  );
}
export default GroupedLayout;
