import styled from 'styled-components';

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    justify-content: center;
    margin-top: -3rem;
    margin: 0 auto;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
      border-bottom: 3px solid black;
    }
  }
  p {
    color: var(--grey-600);
    font-size: 1.1rem;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
      width: 400px;
    }
  }
`;
export default Wrapper;
