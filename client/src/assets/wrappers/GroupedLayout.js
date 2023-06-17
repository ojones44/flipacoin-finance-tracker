import styled from 'styled-components';

const Wrapper = styled.main`
  background: linear-gradient(142deg, var(--primary-300) 0%, var(--white) 100%);

  display: grid;
  gap: var(--padding-150);
  grid-template-columns: minmax(275px, 1fr) 5fr;
  padding: var(--padding-150);
  max-height: 100vh;
  height: 100vh;

  .dashboard-container {
    background-color: var(--white);
    border: var(--dashboardBorder);
    border-radius: var(--borderRadiusLg);
    padding: var(--padding-100);
    box-shadow: var(--shadow-3);
  }

  .profile {
    display: flex;
    align-items: center;
    gap: var(--padding-50);
  }

  .avatar {
    width: 4rem;
    height: 4rem;
  }

  .navbar {
    display: flex;
    gap: var(--padding-150);
    flex-direction: column;
    justify-content: space-evenly;
  }

  .user {
    height: 6rem;
    flex: 1;
  }

  .user div {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: var(--padding-50);
    cursor: pointer;
    border-radius: var(--borderRadiusMd);
  }

  .user div h5 {
    font-weight: var(--fw-900);
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }

  .user div p {
    font-weight: var(--fw-400);
    margin: 0;
    padding: 0;
    color: var(--grey-400);
  }

  .user div:hover {
    background-color: var(--primary-500);
    color: var(--white);
  }

  .route {
    color: var(--black);
    border-radius: var(--borderRadius);
  }

  .desktop-nav {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--padding-25);
  }

  .desktop-nav div {
    padding: var(--padding-50);
    gap: var(--padding-100);
    left: 0px;
    transition: var(--transition);
    position: relative;
  }

  .desktop-nav p {
    text-decoration: none;
    margin: 0;
    padding: 0;
  }

  .desktop-nav p:visited {
    text-decoration: none;
    color: black;
  }

  .desktop-nav div:hover {
    left: 4px;
  }

  .active {
    background-color: var(--primary-300);
    color: var(--white);
  }

  .active svg {
    color: var(--white);
  }

  section div {
    display: flex;
    align-items: center;
  }

  svg {
    font-size: var(--fs-600);
    width: var(--fs-600);
    color: var(--primary-800);
  }

  .logout svg {
    color: var(--red-dark);
    gap: var(--padding-25);
  }

  .current-page {
    margin: 0;
    padding: 0;
    color: var(--grey-200);
    font-weight: var(--fw-400);
    display: none;
  }

  .logout button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--red-dark);
  }

  .logout button:hover {
    text-decoration: underline;
  }

  .hamburger {
    display: grid;
    place-items: center;
    cursor: pointer;
    display: none;
    width: 3rem;
    height: 3rem;
    border-radius: var(--borderRadius);
  }

  .hamburger svg {
    font-size: var(--default-svg-size);
  }

  .hamburger:hover {
    background-color: var(--grey-50);
  }

  @media (max-width: 900px) {
    width: 100%;
    grid-template-columns: 1fr;

    .navbar {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-height: 7rem;
    }

    .user {
      height: 5rem;
    }

    .dashboard-container {
      height: calc(100vh - 12rem);
    }

    .desktop-nav {
      display: none;
    }

    .logout {
      display: none;
    }

    .hamburger {
      display: grid;
    }

    .current-page {
      display: block;
    }
  }

  @media (max-width: 481px) {
    .avatar {
      width: 3rem;
      height: 3rem;
    }

    .user h5 {
      font-size: var(--fs-500);
    }

    .user p {
      font-size: var(--fs-300);
    }
  }
`;

export default Wrapper;
