// React Router
import { Link } from 'react-router-dom';

// Style component imports
import Wrapper from '../assets/wrappers/LandingPage';

// Asset imports
import landingImg from '../assets/images/main.svg';

// Component Imports
import { Logo } from '../components';

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <section className='page container'>
        <div>
          <h1>
            Financial <span>Tracking</span>
          </h1>
          <p className='line-flow'>
            Are you tired of not knowing where all your money goes? Do you need
            to gain clarity on your monthly and day-to-day finances? Flipacoin
            is the perfect app for managing your spending. Track your outgoings,
            save for the important things, and set meaningful goals. Ready?
          </p>
          <Link to='/login' className='btn btn-hero'>
            Login
          </Link>
          <Link to='/register' className='btn btn-funky'>
            Register
          </Link>
        </div>
        <img src={landingImg} alt='flipacoin-landing' className='main-img' />
      </section>
    </Wrapper>
  );
}
export default Landing;
