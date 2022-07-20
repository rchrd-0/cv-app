import React, { Component } from 'react';
import './styles/style.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
