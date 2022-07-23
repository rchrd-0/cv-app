import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <header>
        <h1>Header</h1>
        <div className="buttons">
          <button type="button" onClick={onClick}>
            Show/Hide
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
