import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
}
body {
    font-family: 'Press Start 2P', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: aliceblue;
    
  }
  #root{
      margin: 0 auto;
  }
`;
export default GlobalStyles;