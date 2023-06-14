import styled from 'styled-components';

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h3 {
    padding: 50px 0 0;
  }

  p {
    color: var(--grey-700);
  }

  button {
    padding: 10px;
  }
  .main-img {
    width: 100%;
    max-width: 500px;
  }
`;

export default Wrapper;
