import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

.app {
  background-color: aqua;
  height: 100vh;
  display: grid;
  place-items: center;
}

/* Cross-browser */
scrollbar-width: none; /* Firefox */
-ms-overflow-style: none; /* Internet Explorer and Edge */

/* Chrome, Safari e Opera */
::-webkit-scrollbar {
  display: none;
}

/* Alternative way to hide scrollbar*/
overflow-y: hidden;

`

export default GlobalStyle