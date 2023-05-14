// Style component imports
import Wrapper from '../assets/wrappers/LandingPage';

// Asset imports
import landingLogo from '../assets/images/logo.svg';
import mainLogo from '../assets/images/main.svg';

function Landing() {
  return (
    <Wrapper>
      <main>
        <nav>
          <img src={landingLogo} alt='flipacoin' className='logo' />
        </nav>
        <section className='page container'>
          <div>
            <h1>
              Financial <span>Tracking</span>
            </h1>
            <p>
              Are you tired of not knowing where all your money goes? Do you
              need to gain clarity on your finances? Flipacoin is the perfect
              app for managing your monthly and day to day spending. Track your
              outgoings, save for the important things, live for now and plan
              for the future. Lets go!
            </p>
            <button className='btn btn-hero' type='button'>
              Login/Register
            </button>
          </div>
          <img src={mainLogo} alt='flipacoin-landing' className='main-img' />
        </section>
      </main>
    </Wrapper>
  );
}
export default Landing;
