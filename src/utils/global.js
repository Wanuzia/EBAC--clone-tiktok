import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

html {
  scroll-snap-type: y mandatory;
}

.app {
  background-color: black;
  height: 100vh;
  display: grid;
  place-items: center;
}

h3 {
  padding-bottom: 20px;
}

p {
  padding-bottom: 20px;
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