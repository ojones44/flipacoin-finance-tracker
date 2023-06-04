// React Imports
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppContext } from '../context/appContext';

// Style component imports
import Wrapper from '../assets/wrappers/RegisterPage';

// Component Imports
import { Logo, FloatingLabelForm, Alert } from '../components';
import registerSchema from '../assets/data/registerSchema';
import demoUser from '../assets/data/demoUserSchema';

function Register() {
  const [formData, setFormData] = useState(registerSchema);
  const [match, setMatch] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const { name, email, password, confirmPassword } = formData;
  const navigate = useNavigate();

  const {
    user,
    token,
    isLoading,
    showAlert,
    displayAlert,
    clearAlert,
    passwordMatch,
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
    if (
      name &&
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [name, email, password, confirmPassword]);

  function onChange(e) {
    setFormData((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  function checkPasswords() {
    const isMatched = password === confirmPassword;
    setMatch(isMatched);
    passwordMatch(isMatched);
  }

  function createDemo() {
    setFormData(demoUser);
  }

  function onSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      displayAlert('Form incomplete 😆');
      return;
    }
    if (name && email && password && confirmPassword) {
      if (!match) {
        displayAlert('Passwords still do not match! 😱');
        return;
      }
      const currentUser = { name, email, password };
      authenticateUser({
        currentUser,
        endpoint: 'register',
        authType: 'register',
      });
    }
  }

  return (
    <Wrapper className='full-page-centre'>
      <div className='register'>
        <Logo />
        <h5 className='flow'>Register</h5>

        <form onSubmit={onSubmit} className='form flow'>
          <FloatingLabelForm
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            labelText='First Name'
          />

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
            onBlur={checkPasswords}
          />

          <FloatingLabelForm
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={onChange}
            labelText='Confirm Password'
            onBlur={checkPasswords}
          />

          {showAlert && <Alert />}
          <div className='buttons'>
            <button
              type='submit'
              className='btn btn-hero'
              disabled={!isComplete || isLoading}
            >
              Register
            </button>
            <button
              type='submit'
              onClick={createDemo}
              className='btn btn-hero'
              disabled={isLoading}
            >
              Demo
            </button>
          </div>
        </form>
        <p className='signup'>
          Already registered?{' '}
          <Link to='/login' className='link'>
            Login
          </Link>
        </p>
      </div>
    </Wrapper>
  );
}
export default Register;
