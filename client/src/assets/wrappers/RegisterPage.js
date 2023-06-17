import styled from 'styled-components';

const Wrapper = styled.main`
  .logo {
    width: 150px;
  }

  .register {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 40px 15px 40px;
    box-shadow: var(--shadow-4), var(--shadow-4), var(--shadow-4);
    border-radius: var(--borderRadius);
    width: 400px;
    max-width: 90%;
  }

  .form {
    display: flex;
    width: 95%;
    flex-direction: column;
    text-align: left;
    gap: var(--padding-75);
  }

  .form-group {
    position: relative;
    margin-bottom: var(--padding-150);
  }

  label {
    color: var(--grey-300);
    display: inline-block;
    width: 200px;
    position: absolute;
    left: 5px;
    pointer-events: none;
    transition: all 0.35s ease;
    -moz-transition: all 0.35s ease;
    -webkit-transition: all 0.35s ease;
  }

  .has-input {
    transform: translateY(-20px) translateX(-4px);
    font-size: 14px;
    color: var(--black);
  }

  input {
    color: var(--primary-500);
    border: none;
    background: transparent;
    border-bottom: 1px solid black;
    width: 100%;
    margin-bottom: 5px;
  }

  input[type='text'] {
    text-transform: capitalize;
  }

  input:active,
  input:focus {
    outline: none;
  }

  input:active + label,
  input:focus + label {
    transform: translateY(-20px) translateX(-4px);
    font-size: 14px;
    color: var(--black);
  }

  *::selection {
    background-color: var(--primary-500);
    color: var(--white);
  }

  .flow {
    margin: 2rem 0 0.5rem;
  }

  .buttons {
    display: flex;
    gap: var(--padding-75);
  }

  .btn {
    flex: 1;
  }

  .link {
    color: var(--primary-500);
  }
`;

export default Wrapper;
