import React, { Component } from 'react';
import './styles/style.css';

import Main from './Components/Main';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
