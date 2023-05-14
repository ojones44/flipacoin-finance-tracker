// React Imports
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Style component imports
import Wrapper from '../assets/wrappers/RegisterPage';

// Component Imports
import { Logo } from '../components';
import registerSchema from '../assets/data/registerSchema';
import demoUser from '../assets/data/demoUserSchema';

function Register() {
  const [formData, setFormData] = useState(registerSchema);

  const { fName, lName, email, password, confirmPassword } = formData;
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Checking password data');
  }, [password, confirmPassword]);

  function onChange(e) {
    setFormData((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  function createDemo() {
    setFormData(demoUser);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    navigate('/');
  }

  return (
    <Wrapper>
      <div className='register'>
        <Logo />
        <h4>Register</h4>
        <form onSubmit={onSubmit} className='form'>
          <label htmlFor='fName'>
            First Name
            <br />
            <input
              type='text'
              id='fName'
              name='fName'
              value={fName}
              onChange={onChange}
            />
          </label>
          <label htmlFor='lName'>
            Last Name
            <br />
            <input
              type='text'
              id='lName'
              name='lName'
              value={lName}
              onChange={onChange}
            />
          </label>
          <label htmlFor='email'>
            Email
            <br />
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
            />
          </label>
          <label htmlFor='password'>
            Password
            <br />
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
            />
          </label>
          <label htmlFor='confirm-password'>
            Confirm Password
            <br />
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={confirmPassword}
              onChange={onChange}
            />
          </label>
          <p>Sign up and discover your financial potential!</p>
          <div className='buttons'>
            <button type='submit' className='btn btn-hero'>
              Register
            </button>
            <button type='submit' onClick={createDemo} className='btn btn-hero'>
              Demo
            </button>
          </div>
        </form>
        <p>
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
