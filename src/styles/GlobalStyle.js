import { createGlobalStyle } from 'styled-components';

import './font.css';

const GlobalStyle = createGlobalStyle`

html,
body,
div,
span,
h1,
h2,
h3,
p,
header,
main,
section,
a,
button {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: 'Jost', Helvetica, Arial, sans-serif;
  background-color: #eceff4;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.1s ease-in-out;
  user-select: none;
}

button:active {
  filter: brightness(0.7);
  transition: all 0.1s ease-in-out;
}

`;

export default GlobalStyle;
