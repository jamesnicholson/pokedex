import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
}
body {
    font-family:Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #root{
      margin: 0 auto;
  }
`;
export default GlobalStyles;