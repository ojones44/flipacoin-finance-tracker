import styled from 'styled-components';

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h4 {
    padding-top: 10px;
  }

  br {
    margin-bottom: 5px;
  }

  .logo {
    width: 150px;
  }

  .register {
    padding: 15px 40px 15px 40px;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: var(--shadow-4), var(--shadow-4), var(--shadow-4);
    border-radius: 0.25rem;
    height: 600px;
    width: 400px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: left;
    gap: 10px;
  }

  input {
    color: var(--primary-500);
    border: none;
    background: transparent;
    border-bottom: 1px solid black;
    width: 100%;
    margin-bottom: 5px;
  }

  input:active,
  input:focus {
    outline: none;
  }

  *::selection {
    background-color: var(--primary-500);
    color: var(--white);
  }

  p:nth-of-type(1) {
    margin: 1rem 0 0.5rem;
  }

  .buttons {
    text-align: center;
    display: flex;
    gap: 10px;
  }

  .btn {
    width: 100%;
  }
`;

export default Wrapper;
