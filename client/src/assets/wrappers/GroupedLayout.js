import styled from 'styled-components';

const Wrapper = styled.main`
  background: linear-gradient(142deg, var(--primary-300) 0%, var(--white) 100%);

  display: grid;
  gap: var(--padding-100);
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
    transition: var(--transition);
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

  .user div p:nth-child(3) {
    color: var(--black);
    display: none;
  }

  .user div:hover {
    background-color: var(--primary-500);
    color: var(--white);
  }

  .route {
    color: var(--black);
    border-radius: var(--borderRadius);
  }

  .nav {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--padding-25);
  }

  .nav div {
    padding: var(--padding-50);
    gap: var(--padding-100);
    left: 0px;
    transition: var(--transition);
    position: relative;
  }

  .nav p {
    text-decoration: none;
    margin: 0;
    padding: 0;
  }

  .nav p:visited {
    text-decoration: none;
    color: black;
  }

  .nav div:hover {
    left: 4px;
  }

  .active {
    background-color: var(--primary-300);
    color: var(--white);
    svg {
      color: var(--white);
    }
  }

  section div {
    display: flex;
    align-items: center;
  }

  svg {
    font-size: var(--fs-600);
    width: var(--fs-600);
    color: var(--primary-800);
    cursor: pointer;
  }

  .logout svg {
    color: var(--red-dark);
    gap: var(--padding-25);
  }

  .menu-modal {
    padding: var(--padding-100);
    position: absolute;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: var(--shadow-3);
    width: 500px;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
    transition: all 0.3s ease;
  }

  .modal-closed {
    transform: translate(100%, -50%);
    opacity: 0;
    z-index: -1;
  }

  .modal-open {
    transform: translateX(0, -50%);
    opacity: 1;
    z-index: 1;
  }

  .modal-body {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 3rem 1fr;
    gap: 3rem;
  }

  .modal-body .menu-btn:hover {
    transform: rotate(90deg);
    background-color: none;
  }

  @media (min-width: 900px) {
    .menu-modal {
      display: none;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 7rem 1fr;
    grid-auto-rows: max-content;

    .navbar {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-height: 7rem;
    }

    .nav.desktop {
      display: none;
    }

    .logout-nav {
      display: none;
    }

    .menu-btn {
      display: grid;
    }

    .user div p:nth-child(3) {
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
