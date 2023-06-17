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
    min-height: calc(100vh - var(--nav-height) - 65px);
    display: grid;
    align-items: center;
    margin-top: -3rem;
    margin: 0 auto;
  }
  h1 {
    font-weight: var(--fw-900);
    span {
      color: var(--primary-500);
      text-decoration: underline;
    }
  }
  p {
    color: var(--grey-600);
    font-size: 1.1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    margin-right: var(--padding-100);
    font-size: var(--fs-500);
    padding: var(--padding-50) var(--padding-150);
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: minmax(400px, 1fr) minmax(250px, 1fr);
      column-gap: 2rem;
    }
    .main-img {
      display: block;
      max-width: 100%;
    }
  }
`;
export default Wrapper;
