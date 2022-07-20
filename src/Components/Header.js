import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Header</h1>
        <div className="buttons">
          <button type="button">button</button>
          <button type="button">button</button>
        </div>
      </header>
    );
  }
}

export default Header;
