import styled from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 0.5rem;

  .settings-page-grid {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 2rem;
  }

  .settings-alert {
    padding-block: 0 1rem;
  }

  .section {
    width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: var(--borderRadiusLg);
    box-shadow: var(--shadow-4);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .user-info {
    display: flex;
    padding-bottom: 2.5rem;
  }

  .user-inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .user-password {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .change-password {
    padding-top: 1rem;
  }

  .avatar-section {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr;
  }

  .avatar-section h4 {
    grid-column: 1/-1;
  }

  .avatar-options {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    overflow: auto;
    grid-column: 1 / 3;
  }

  .avatar-options label {
    min-width: 130px;
  }

  h4 {
    padding-inline: 1rem;
  }

  label {
    min-width: 110px;
  }

  label,
  input {
    margin-right: 1rem;
    display: inline-block;
  }

  input {
    border: 1px solid var(--black);
    border-radius: var(--borderRadius);
    padding: 0.3rem 0.5rem;
  }

  input:active,
  input:focus {
    border: 1px solid var(--primary-500);
    outline: none;
    appearance: none;
  }

  select {
    padding: 0.25rem;
    background: none;
    border: 1px solid var(--black);
    border-radius: var(--borderRadius);
    margin-bottom: 3px;
  }

  svg {
    font-size: 1rem;
  }
`;

export default Wrapper;
