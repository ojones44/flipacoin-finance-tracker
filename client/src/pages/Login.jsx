// React Imports
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppContext } from '../context/appContext';

// Style component imports
import Wrapper from '../assets/wrappers/RegisterPage';

// Component Imports
import { Logo, FloatingLabelForm, Alert } from '../components';
import loginSchema from '../assets/data/loginSchema';

function Login() {
  const [formData, setFormData] = useState(loginSchema);
  const [isComplete, setIsComplete] = useState(false);

  const { email, password } = formData;
  const navigate = useNavigate();

  const {
    user,
    token,
    isLoading,
    showAlert,
    displayAlert,
    clearAlert,
    authenticateUser,
  } = useAppContext();

  useEffect(() => {
    if (user && token) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, token, navigate]);

  useEffect(() => {
    clearAlert();
    if (email && password) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [email, password]);

  function onChange(e) {
    setFormData((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      displayAlert('Please fill in credentials 👆🏻');
      return;
    }
    if (email && password) {
      const currentUser = { email, password };
      authenticateUser({ currentUser, endpoint: 'login', authType: 'login' });
      // navigate('/');
    }
  }

  return (
    <Wrapper className='full-page-centre'>
      <div className='register'>
        <Logo />
        <h5 className='flow'>Login</h5>

        <form onSubmit={onSubmit} className='form flow'>
          <FloatingLabelForm
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            labelText='Email'
          />

          <FloatingLabelForm
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            labelText='Password'
          />

          {showAlert && <Alert />}
          <div className='buttons'>
            <button
              type='submit'
              className='btn btn-hero'
              disabled={!isComplete || isLoading}
            >
              Login
            </button>
          </div>
        </form>
        <p className='signup'>
          Not yet registered?{' '}
          <Link to='/register' className='link'>
            Register
          </Link>
        </p>
      </div>
    </Wrapper>
  );
}
export default Login;
