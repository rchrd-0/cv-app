import React, { Component } from 'react';
import styled from 'styled-components';
// import './styles/style.css';

import Main from './Components/Main';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <MainWrapper>
          <Theme>
            <Main />
          </Theme>
        </MainWrapper>
      </>
    );
  }
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

export default App;
