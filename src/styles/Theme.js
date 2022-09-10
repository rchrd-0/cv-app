import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colour: {
    background: '#eceff4',
    section: '#d8dee9',
    header: '#262c48',
    card: '#3b4252',
    primary: '#5e81ac',
    accent: '#81a1c1',
    valid: '#66bcc5',
    invalid: '#ab345a',
    text: '#434c5d',
  },

  font: {
    display: "'Jost', Helvetica, Arial, sans-serif",
  },

  boxShadow: {
    light: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    medium:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
    heavy: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
