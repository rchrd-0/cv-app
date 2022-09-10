import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 30px 0;
  gap: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colour.background};

  button {
    box-shadow: ${(props) => props.theme.boxShadow.heavy};
  }
`;

export default StyledMain;
