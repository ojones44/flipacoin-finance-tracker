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
  const { fName, email, password, confirmPassword } = formData;
  const navigate = useNavigate();

  const {
    isLoading,
    showAlert,
    displayAlert,
    displaySuccess,
    clearAlert,
    passwordMatch,
  } = useAppContext();

  useEffect(() => {
    clearAlert();
  }, [fName, email, password, confirmPassword]);

  function onChange(e) {
    setFormData((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  function checkPasswords() {
    setMatch(password === confirmPassword);

    if (confirmPassword !== '') {
      passwordMatch(match);
    }
  }

  function createDemo() {
    setFormData(demoUser);
  }

  function onSubmit(e) {
    e.preventDefault();

    if (!fName || !email || !password || !confirmPassword) {
      displayAlert('Form incomplete 😆');
    }
    if (fName && email && password && confirmPassword) {
      if (!match) {
        displayAlert('Passwords still do not match! 😱');
        return;
      }
      displaySuccess('Form successfully submitted 👍🏻');
      console.log(formData);
      // navigate('/');
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
            name='fName'
            value={fName}
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
            <button type='submit' className='btn btn-hero'>
              Register
            </button>
            <button type='submit' onClick={createDemo} className='btn btn-hero'>
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
