import styled from 'styled-components';

import github from '../Assets/github.svg';
import eyeOff from '../Assets/eye-off.svg';
import eye from '../Assets/eye.svg';

const StyledHeader = styled.header`
  width: 500px;
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colour.section};
  background: ${(props) => props.theme.colour.background};
  user-select: none;

  #header-left {
    border-radius: 4px;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.colour.card};
    box-shadow: ${(props) => props.theme.boxShadow.heavy};

    h1 {
      font-size: 2rem;
      font-weight: 500;
    }

    #made-by {
      display: flex;
      align-items: center;
      gap: 0.5ch;

      img {
        width: 24px;
        content: url(${github});
      }

      a {
        display: flex;
        gap: 0.5ch;
        color: ${(props) => props.theme.colour.accent};
        font-weight: 500;
      }
    }
  }

  #header-right {
    display: flex;
    align-items: center;

    > button {
      background-size: 20px;
      background-repeat: no-repeat;
      background-position: 12px center;
      padding-left: 40px;
      color: ${(props) => props.theme.colour.background};
      background-color: ${(props) => props.theme.colour.valid};
      box-shadow: ${(props) => props.theme.boxShadow.heavy};

      &.active {
        background-image: url(${eyeOff});
      }

      &.hidden {
        background-image: url(${eye});
      }
    }
  }
`;

export default StyledHeader;
