import styled from 'styled-components';

const InputForm = styled.form`
  flex: 1;
  max-width: 700px;
  min-width: 400px;
  background-color: ${(props) => props.theme.colour.section};
  box-shadow: ${(props) => props.theme.boxShadow.light};
  color: ${(props) => props.theme.colour.text};
  font-size: 1rem;
  padding: 20px 30px;
  border-radius: 8px;

  input,
  textarea {
    width: 100%;
    border-radius: 4px;
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    line-height: 2rem;
    font-size: 1.1rem;
    padding: 0 10px;
    border: 1px solid ${(props) => props.theme.colour.text};
    resize: none;

    &:focus {
      outline: 2px solid ${(props) => props.theme.colour.primary};
      box-shadow: ${(props) => props.theme.boxShadow.heavy};
    }
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-transform: uppercase;

    &.span-2 {
      grid-column: span 2;
    }
  }

  #contact-header {
    margin-top: 15px;
  }

  h2 {
    grid-column: 1 / -1;
    color: ${(props) => props.theme.colour.header};
    font-size: 1.6rem;
    font-weight: 500;
  }

  .form-head {
    grid-column: 1 / span 2;
    display: flex;
    justify-content: space-between;

    > button {
      background-color: ${(props) => props.theme.colour.accent};
      color: ${(props) => props.theme.colour.background};
    }
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
    row-gap: 15px;
    margin-bottom: 30px;

    &:last-of-type {
      margin-bottom: 0;
    }

    > button {
      grid-column: span 2;
      width: fit-content;
      place-self: center;
      background-color: ${(props) => props.theme.colour.primary};
      color: ${(props) => props.theme.colour.background};

      &.remove-item {
        margin-top: 5px;
        background-color: ${(props) => props.theme.colour.invalid};
      }
    }
  }
`;

export default InputForm;
