import React from 'react';

import StyledHeader from './styledHeader';

const Header = (props) => {
  const { onClick, mode } = props;
  return (
    <StyledHeader>
      <div id="header-left">
        <h1>CV App</h1>
        <div id="made-by">
          Made by
          <a href="https://github.com/rchrd-0" target="_blank" rel="noreferrer">
            <img alt="github icon" />
            RCHRD
          </a>
          for
          <a
            href="https://www.theodinproject.com/"
            target="_blank"
            rel="noreferrer"
          >
            The Odin Project
          </a>
        </div>
      </div>
      <div id="header-right">
        <button
          id="show-hide-btn"
          type="button"
          onClick={onClick}
          className={`${mode ? 'hidden' : 'active'}`}
        >
          {mode ? 'Show form' : 'Hide form'}
        </button>
      </div>
    </StyledHeader>
  );
};

export default Header;
