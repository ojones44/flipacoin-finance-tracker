import styled from 'styled-components';

const Wrapper = styled.main`
  background: linear-gradient(142deg, var(--accent-100) 0%, var(--white) 100%);

  display: grid;
  gap: 1.5rem;
  grid-template-columns: minmax(275px, 1fr) 5fr;
  padding: 1.5rem;
  max-height: 100vh;
  height: 100vh;

  img {
    width: 100%;
    padding-bottom: 5px;
  }

  .dashboard-container {
    background-color: var(--white);
    width: 100%;
    border: 4px solid var(--white);
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: var(--shadow-2);
  }

  .profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  .avatar {
    width: 4rem;
    height: 4rem;
  }

  .navbar {
    background-color: var(--transparent-white);
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .user {
    height: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .user h5 {
    font-weight: 900;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }

  .user p {
    margin: 0;
    padding: 0;
    font-weight: 400;
    color: var(--grey-400);
  }

  .route {
    color: black;
  }

  .pages {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.25rem;
  }

  section div {
    display: flex;
    align-items: center;
  }

  .pages div {
    border-radius: var(--borderRadius);
    padding: 0.5rem 1rem;
    padding-left: 0.5rem;
    gap: 0.75rem;
    left: 0px;
    transition: all linear 200ms;
    position: relative;
  }

  svg {
    width: 1.5rem;
    fill: var(--primary-500);
    transform: scale(0.95);
  }

  .logout svg {
    fill: var(--red-dark);
    gap: 0.25rem;
  }

  .pages p {
    text-decoration: none;
    margin: 0;
    padding: 0;
  }

  .pages p:visited {
    text-decoration: none;
    color: black;
  }

  .pages div:hover {
    left: 4px;
    background-color: var(--accent-100);

    svg {
      transform: scale(1);
    }
  }

  .logout button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--red-dark);
  }

  .logout button:hover {
    text-decoration: underline;
    color: var(--red-dark);
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

    .dashboard-container {
      height: calc(100vh - 12rem);
    }

    .pages {
      display: none;
    }
  }
`;

export default Wrapper;
